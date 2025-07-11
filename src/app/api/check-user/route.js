import { NextResponse } from 'next/server';
import { 
  Connection, 
  PublicKey
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

async function fetchIPFSData(cid) {
    try {
        const response = await fetch(`https://gateway.pinata.cloud/ipfs/${cid}`);
        if (response.ok) {
            return await response.json();
        }
        return null;
    } catch (error) {
        console.error('Error fetching IPFS data:', error);
        return null;
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { walletAddress } = body;
        
        if (!walletAddress) {
            return NextResponse.json(
                { success: false, error: 'Wallet address is required' }, 
                { status: 400 }
            );
        }
        
        // Validate wallet address
        let userPublicKey;
        try {
            userPublicKey = new PublicKey(walletAddress);
        } catch (error) {
            return NextResponse.json(
                { success: false, error: 'Invalid wallet address' }, 
                { status: 400 }
            );
        }
        
        console.log('🔍 Checking for existing user:', walletAddress);
        
        // Get working connection
        const connection = await getWorkingConnection();
        
        // Try to find the user's profile PDA
        try {
            // We need to try different possible keypairs since we don't know which one was used
            // In a real implementation, you might want to store this mapping somewhere
            // For now, we'll just return that the user doesn't exist and let them sign up again
            
            // Alternative approach: Check if there's any transaction history for this wallet
            // that might indicate they've used our platform before
            const signatures = await connection.getSignaturesForAddress(userPublicKey, { limit: 50 });
            
            // Look for transactions that might be related to our program
            let foundUserTransaction = null;
            for (const signature of signatures) {
                try {
                    const transaction = await connection.getTransaction(signature.signature, {
                        commitment: 'confirmed',
                        maxSupportedTransactionVersion: 0
                    });
                    
                    if (transaction?.transaction?.message?.staticAccountKeys) {
                        const accountKeys = transaction.transaction.message.staticAccountKeys;
                        const programFound = accountKeys.some(key => key.equals(PROGRAM_ID));
                        
                        if (programFound) {
                            foundUserTransaction = signature.signature;
                            break;
                        }
                    }
                } catch (txError) {
                    console.warn('Error checking transaction:', txError);
                    continue;
                }
            }
            
            if (foundUserTransaction) {
                console.log('✅ Found user transaction:', foundUserTransaction);
                
                // Get the actual transaction details to extract real data
                const txDetails = await connection.getTransaction(foundUserTransaction, {
                    commitment: 'confirmed',
                    maxSupportedTransactionVersion: 0
                });
                
                // Try to find and decode the IPFS CID from transaction data
                let extractedCID = null;
                let profilePDA = null;
                let realUserData = {};
                
                if (txDetails?.meta?.logMessages) {
                    // Look for any IPFS CID in the logs (this is a simplified approach)
                    const logs = txDetails.meta.logMessages.join(' ');
                    const cidMatch = logs.match(/Qm[1-9A-HJ-NP-Za-km-z]{44,}|baf[0-9a-z]{56,}/);
                    if (cidMatch) {
                        extractedCID = cidMatch[0];
                        console.log('📄 Found IPFS CID in transaction:', extractedCID);
                        
                        // Fetch the actual user data from IPFS
                        const ipfsData = await fetchIPFSData(extractedCID);
                        if (ipfsData && ipfsData.user) {
                            realUserData = ipfsData.user;
                            console.log('📋 Retrieved user data from IPFS:', realUserData);
                        }
                    }
                }
                
                // Try to derive the Profile PDA (simplified approach)
                try {
                    // We need to find the keypair that was used, but since we can't,
                    // we'll extract it from the transaction accounts
                    const accounts = txDetails?.transaction?.message?.staticAccountKeys || [];
                    if (accounts.length > 1) {
                        profilePDA = accounts[1].toString(); // Typically the second account is the PDA
                    }
                } catch (pdaError) {
                    console.warn('Could not extract PDA from transaction');
                }
                
                // Create user data structure with real data where available
                const userData = {
                    role: realUserData.role || 'founder', // Use real role if available
                    roleType: realUserData.roleType || 'knowledgeable',
                    walletAddress: walletAddress,
                    profilePDA: profilePDA || 'extracted-from-transaction',
                    signature: foundUserTransaction,
                    cid: extractedCID,
                    formData: realUserData.formData || {
                        name: realUserData.name || 'Existing User',
                        // Include any other data found in IPFS
                        ...realUserData
                    },
                    signupTimestamp: realUserData.timestamp || new Date(txDetails?.blockTime * 1000 || Date.now()).toISOString()
                };
                
                console.log('📦 Prepared user data for auto-login:', userData);
                
                return NextResponse.json({ 
                    success: true, 
                    exists: true,
                    userData: userData
                });
            } else {
                console.log('ℹ️ No existing account found for this wallet');
                return NextResponse.json({ 
                    success: true, 
                    exists: false
                });
            }
            
        } catch (error) {
            console.error('Error checking blockchain data:', error);
            // If we can't check the blockchain, assume user doesn't exist
            return NextResponse.json({ 
                success: true, 
                exists: false
            });
        }
        
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
