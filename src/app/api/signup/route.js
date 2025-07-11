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
const connection = new Connection("http://127.0.0.1:8899"); // Update this for production

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
    try {
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
        
        // Get recent blockhash
        const { blockhash } = await connection.getLatestBlockhash();
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = keypair.publicKey;
        
        // For development, we'll need to airdrop some SOL to the keypair
        try {
            await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
            // Wait a bit for the airdrop to complete
            await new Promise(resolve => setTimeout(resolve, 3000));
        } catch (airdropError) {
            console.warn("Airdrop failed:", airdropError);
        }
        
        // Sign and send transaction
        const signature = await sendAndConfirmTransaction(
            connection,
            transaction,
            [keypair],
            {
                commitment: 'confirmed',
                maxRetries: 3,
            }
        );
        
        return {
            signature,
            profilePDA: profilePDA.toString(),
            role,
            cid,
            walletAddress: userWalletPublicKey
        };
        
    } catch (error) {
        console.error("Error uploading to blockchain:", error);
        throw error;
    }
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
        
        // Upload user data to IPFS
        const cid = await getCidFromUser(user);
        
        // Upload to Solana blockchain
        const result = await uploadDataToBlockchain(cid, walletAddress, role);
        
        return NextResponse.json({ 
            success: true, 
            message: 'User profile created successfully',
            data: result 
        });
        
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { 
                success: false, 
                error: error.message || 'Internal server error' 
            }, 
            { status: 500 }
        );
    }
}
