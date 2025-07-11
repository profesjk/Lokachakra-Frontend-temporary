import { NextResponse } from 'next/server';
import { 
  Connection, 
  PublicKey, 
  Keypair, 
  Transaction, 
  SystemProgram, 
  sendAndConfirmTransaction,
  TransactionInstruction,
  LAMPORTS_PER_SOL 
} from '@solana/web3.js';

// Configuration
const PROGRAM_ID = new PublicKey("Cb2kAL6pdTpEVhmXiZ7kiJ2jttHXfMoJA4tbZiiCZyjF");

// Multiple RPC endpoints for redundancy
const RPC_ENDPOINTS = [
    'https://api.devnet.solana.com',
    'https://devnet.helius-rpc.com/?api-key=public',
    'https://rpc.ankr.com/solana_devnet'
];

// Try multiple connections until one works
let connection;
let currentEndpointIndex = 0;

async function getWorkingConnection() {
    for (let i = 0; i < RPC_ENDPOINTS.length; i++) {
        try {
            const testConnection = new Connection(RPC_ENDPOINTS[i], 'confirmed');
            // Test the connection
            await testConnection.getLatestBlockhash();
            console.log('✅ Connected to Solana RPC:', RPC_ENDPOINTS[i]);
            return testConnection;
        } catch (error) {
            console.warn(`❌ Failed to connect to ${RPC_ENDPOINTS[i]}:`, error.message);
            continue;
        }
    }
    throw new Error('All Solana RPC endpoints are unavailable');
}

// Initialize connection
connection = new Connection(RPC_ENDPOINTS[0], 'confirmed');

// Utility functions
function serializeString(str) {
    const stringBytes = Buffer.from(str, 'utf8');
    const lengthBuffer = Buffer.alloc(4);
    lengthBuffer.writeUInt32LE(stringBytes.length, 0);
    return Buffer.concat([lengthBuffer, stringBytes]);
}

function serializeUserRoles(roles) {
    const buffer = Buffer.alloc(10);
    let offset = 0;
    
    buffer.writeUInt8(roles.founder ? 1 : 0, offset++);
    buffer.writeUInt8(roles.investor ? 1 : 0, offset++);
    buffer.writeUInt8(roles.accelerator ? 1 : 0, offset++);
    buffer.writeUInt8(roles.executive ? 1 : 0, offset++);
    buffer.writeUInt8(roles.legal ? 1 : 0, offset++);
    buffer.writeUInt8(roles.government ? 1 : 0, offset++);
    buffer.writeUInt8(roles.cybersecurity ? 1 : 0, offset++);
    buffer.writeUInt8(roles.freelancer ? 1 : 0, offset++);
    buffer.writeUInt8(roles.mentor_research ? 1 : 0, offset++);
    buffer.writeUInt8(roles.exit_planner ? 1 : 0, offset++);
    
    return buffer;
}

function serializeCreateProfileData(ipfsCid, userRoles) {
    const cidBuffer = serializeString(ipfsCid);
    const rolesBuffer = serializeUserRoles(userRoles);
    return Buffer.concat([cidBuffer, rolesBuffer]);
}

function createUserRoles(role) {
    const roleProperties = {
        founder: false,
        investor: false,
        accelerator: false,
        executive: false,
        legal: false,
        government: false,
        cybersecurity: false,
        freelancer: false,
        mentor_research: false,
        exit_planner: false
    };
    
    switch(role.toLowerCase()) {
        case 'founder':
        case 'founders':
            roleProperties.founder = true;
            break;
        case 'investor':
        case 'investors':
            roleProperties.investor = true;
            break;
        case 'accelerator':
        case 'accelerators':
            roleProperties.accelerator = true;
            break;
        case 'executive':
        case 'executives':
            roleProperties.executive = true;
            break;
        case 'legal':
            roleProperties.legal = true;
            break;
        case 'government':
            roleProperties.government = true;
            break;
        case 'cybersecurity':
            roleProperties.cybersecurity = true;
            break;
        case 'freelancer':
        case 'freelancers':
            roleProperties.freelancer = true;
            break;
        case 'mentor_research':
        case 'mentors_research':
        case 'mentor':
        case 'research':
            roleProperties.mentor_research = true;
            break;
        case 'exit_planner':
        case 'exit_planners':
        case 'exit':
        case 'planner':
            roleProperties.exit_planner = true;
            break;
        default:
            roleProperties.founder = true;
            break;
    }
    
    return roleProperties;
}

async function getCidFromUser(user) {
    const pinataApiKey = "2488c868234db9bca5ec";
    const pinataSecretApiKey = "3fb8146247782e648d0bd0426fc6ffc22616ebcbfe92c98d710ca7ebed4a4428";
    const pinataUrl = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
    
    const pinataHeaders = {
        "Content-Type": "application/json",
        "pinata_api_key": pinataApiKey,
        "pinata_secret_api_key": pinataSecretApiKey,
    };
    
    const pinataBody = { user: user };
    
    try {
        const response = await fetch(pinataUrl, {
            method: "POST",
            headers: pinataHeaders,
            body: JSON.stringify(pinataBody),
        });
        
        if (!response.ok) {
            throw new Error(`Pinata API error: ${response.statusText}`);
        }
        
        const data = await response.json();
        return data.IpfsHash;
    } catch (error) {
        console.error("Error uploading to Pinata:", error);
        throw error;
    }
}

async function uploadDataToBlockchain(cid, userWalletPublicKey, role) {
    let retries = 0;
    const maxRetries = 3;
    
    while (retries < maxRetries) {
        try {
            console.log(`🔗 Attempting blockchain upload (attempt ${retries + 1}/${maxRetries})`);
            
            // Get a working connection
            if (retries > 0) {
                console.log('🔄 Trying alternative RPC endpoint...');
                connection = await getWorkingConnection();
            }
            
            // Create a new keypair for the transaction (you might want to use the user's wallet instead)
            const keypair = Keypair.generate();
            
            // Create UserRoles object based on the role
            const userRoles = createUserRoles(role);
            
            // Serialize data
            const serializedData = serializeCreateProfileData(cid, userRoles);
            
            // Create instruction data with discriminator
            const instructionData = Buffer.concat([
                Buffer.from([0]), // Instruction discriminator for CreateProfile
                serializedData
            ]);
            
            // Derive the profile PDA
            const [profilePDA] = await PublicKey.findProgramAddress(
                [Buffer.from("profile"), keypair.publicKey.toBuffer()],
                PROGRAM_ID
            );
            
            // Create the instruction
            const instruction = new TransactionInstruction({
                keys: [
                    {
                        pubkey: keypair.publicKey,
                        isSigner: true,
                        isWritable: true,
                    },
                    {
                        pubkey: profilePDA,
                        isSigner: false,
                        isWritable: true,
                    },
                    {
                        pubkey: SystemProgram.programId,
                        isSigner: false,
                        isWritable: false,
                    },
                ],
                programId: PROGRAM_ID,
                data: instructionData,
            });
            
            // Create and send transaction
            const transaction = new Transaction().add(instruction);
            
            // Get recent blockhash with timeout
            console.log('📡 Getting recent blockhash from Solana devnet...');
            const { blockhash } = await Promise.race([
                connection.getLatestBlockhash('confirmed'),
                new Promise((_, reject) => 
                    setTimeout(() => reject(new Error('Blockhash timeout')), 10000)
                )
            ]);
            console.log('✅ Got blockhash:', blockhash);
            
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = keypair.publicKey;
            
            // For development, we'll need to airdrop some SOL to the keypair
            try {
                console.log('💰 Checking balance and requesting SOL airdrop for transaction fees...');
                
                // Check current balance
                const currentBalance = await connection.getBalance(keypair.publicKey);
                console.log('💳 Current balance:', currentBalance / LAMPORTS_PER_SOL, 'SOL');
                
                if (currentBalance < 0.1 * LAMPORTS_PER_SOL) { // If less than 0.1 SOL
                    console.log('💰 Requesting airdrop...');
                    
                    // Try multiple smaller airdrops if needed (devnet has rate limits)
                    let totalAirdropped = 0;
                    const targetAmount = 1 * LAMPORTS_PER_SOL; // 1 SOL should be enough
                    
                    while (totalAirdropped < targetAmount && totalAirdropped < 2 * LAMPORTS_PER_SOL) {
                        try {
                            const airdropAmount = Math.min(1 * LAMPORTS_PER_SOL, targetAmount - totalAirdropped);
                            const airdropSignature = await connection.requestAirdrop(keypair.publicKey, airdropAmount);
                            
                            // Wait for airdrop confirmation with timeout
                            console.log('⏳ Waiting for airdrop confirmation...');
                            await Promise.race([
                                connection.confirmTransaction(airdropSignature, 'confirmed'),
                                new Promise((_, reject) => 
                                    setTimeout(() => reject(new Error('Airdrop timeout')), 30000)
                                )
                            ]);
                            
                            totalAirdropped += airdropAmount;
                            console.log('✅ Airdrop confirmed. Total airdropped:', totalAirdropped / LAMPORTS_PER_SOL, 'SOL');
                            
                            // Small delay to avoid rate limiting
                            await new Promise(resolve => setTimeout(resolve, 1000));
                        } catch (airdropError) {
                            console.warn('❌ Individual airdrop failed:', airdropError.message);
                            break;
                        }
                    }
                    
                    // Verify balance after airdrop
                    const newBalance = await connection.getBalance(keypair.publicKey);
                    console.log('✅ Airdrop process completed. New balance:', newBalance / LAMPORTS_PER_SOL, 'SOL');
                } else {
                    console.log('✅ Sufficient balance available');
                }
            } catch (airdropError) {
                console.warn("❌ Airdrop failed:", airdropError);
                
                // Check if we have any balance at all
                const finalBalance = await connection.getBalance(keypair.publicKey);
                console.log('💳 Final balance check:', finalBalance / LAMPORTS_PER_SOL, 'SOL');
                
                if (finalBalance === 0) {
                    throw new Error('Unable to fund account for transaction. Devnet faucet may be unavailable. Please try again in a few moments.');
                }
            }
            
            // Get estimated transaction fee
            const estimatedFee = await transaction.getEstimatedFee(connection);
            console.log('💸 Estimated transaction fee:', estimatedFee / LAMPORTS_PER_SOL, 'SOL');
            
            // Final balance check before transaction
            const preTransactionBalance = await connection.getBalance(keypair.publicKey);
            console.log('💳 Pre-transaction balance:', preTransactionBalance / LAMPORTS_PER_SOL, 'SOL');
            
            if (preTransactionBalance < estimatedFee) {
                throw new Error('Insufficient balance for transaction fees. Please try again.');
            }
            
            // Sign and send transaction
            console.log('📝 Signing and sending transaction...');
            const signature = await sendAndConfirmTransaction(
                connection,
                transaction,
                [keypair],
                {
                    commitment: 'confirmed',
                    maxRetries: 5,
                    preflightCommitment: 'confirmed',
                    skipPreflight: false,
                }
            );
            console.log('✅ Transaction confirmed with signature:', signature);
            
            return {
                signature,
                profilePDA: profilePDA.toString(),
                role,
                cid,
                walletAddress: userWalletPublicKey
            };
            
        } catch (error) {
            console.error(`❌ Blockchain upload attempt ${retries + 1} failed:`, error);
            retries++;
            
            if (retries >= maxRetries) {
                // If all retries failed, throw a more user-friendly error
                if (error.message.includes('fetch failed') || error.message.includes('timeout')) {
                    throw new Error('Network connection failed. Please check your internet connection and try again.');
                } else if (error.message.includes('blockhash')) {
                    throw new Error('Solana network is currently unavailable. Please try again in a few moments.');
                } else {
                    throw new Error(`Blockchain operation failed: ${error.message}`);
                }
            }
            
            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, 2000 * retries));
        }
    }
    
    throw new Error('Maximum retries exceeded. Please try again later.');
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { user, role, walletAddress } = body;
        
        if (!user || !role || !walletAddress) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields: user, role, or walletAddress' }, 
                { status: 400 }
            );
        }
        
        // Validate wallet address
        try {
            new PublicKey(walletAddress);
        } catch (error) {
            return NextResponse.json(
                { success: false, error: 'Invalid wallet address' }, 
                { status: 400 }
            );
        }

        console.log('🚀 Starting signup process for role:', role);
        console.log('👤 Wallet address:', walletAddress);
        
        // Upload user data to IPFS
        console.log('📤 Uploading user data to IPFS...');
        const cid = await getCidFromUser(user);
        console.log('✅ IPFS upload successful, CID:', cid);
        
        // Upload to Solana blockchain
        console.log('⛓️ Starting blockchain upload...');
        const result = await uploadDataToBlockchain(cid, walletAddress, role);
        console.log('✅ Signup process completed successfully!');
        
        return NextResponse.json({ 
            success: true, 
            message: 'User profile created successfully',
            data: result 
        });
        
    } catch (error) {
        console.error("API Error:", error);
        
        // Provide more specific error messages
        let errorMessage = 'Internal server error';
        let statusCode = 500;
        
        if (error.message.includes('Network connection failed')) {
            errorMessage = error.message;
            statusCode = 503; // Service Unavailable
        } else if (error.message.includes('Solana network is currently unavailable')) {
            errorMessage = error.message;
            statusCode = 503; // Service Unavailable
        } else if (error.message.includes('Pinata')) {
            errorMessage = 'Failed to store data. Please try again.';
            statusCode = 502; // Bad Gateway
        } else if (error.message.includes('Maximum retries exceeded')) {
            errorMessage = 'Service is temporarily unavailable. Please try again in a few minutes.';
            statusCode = 503; // Service Unavailable
        } else {
            errorMessage = error.message || 'An unexpected error occurred';
        }
        
        return NextResponse.json(
            { 
                success: false, 
                error: errorMessage
            }, 
            { status: statusCode }
        );
    }
}
