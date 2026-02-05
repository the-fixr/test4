// NFT utilities for minting and displaying NFTs
import { createPublicClient, http } from 'viem';
import { base } from 'viem/chains';

export const publicClient = createPublicClient({
  chain: base,
  transport: http(),
});

// Example: Check if user owns a specific NFT
export async function checkNFTOwnership(
  contractAddress: `0x${string}`,
  ownerAddress: `0x${string}`,
  tokenId?: bigint
): Promise<boolean> {
  try {
    const balance = await publicClient.readContract({
      address: contractAddress,
      abi: [{
        name: 'balanceOf',
        type: 'function',
        stateMutability: 'view',
        inputs: [{ name: 'owner', type: 'address' }],
        outputs: [{ name: '', type: 'uint256' }],
      }],
      functionName: 'balanceOf',
      args: [ownerAddress],
    });
    return balance > 0n;
  } catch (error) {
    console.error('Error checking NFT ownership:', error);
    return false;
  }
}

// Example: Get NFT metadata URI
export async function getNFTMetadata(
  contractAddress: `0x${string}`,
  tokenId: bigint
): Promise<string | null> {
  try {
    const uri = await publicClient.readContract({
      address: contractAddress,
      abi: [{
        name: 'tokenURI',
        type: 'function',
        stateMutability: 'view',
        inputs: [{ name: 'tokenId', type: 'uint256' }],
        outputs: [{ name: '', type: 'string' }],
      }],
      functionName: 'tokenURI',
      args: [tokenId],
    });
    return uri;
  } catch (error) {
    console.error('Error getting NFT metadata:', error);
    return null;
  }
}
