# test4

A Farcaster mini app created with [Shipyard](https://shipyard.fixr.nexus).

## Features

- **Nft**: NFT minting and display utilities (see `lib/nft.ts`)

## Quick Start

```bash
npm install
npm run dev
```

## Configuration

Your app config is in `lib/config.ts`:

```typescript
export const config = {
  primaryColor: '#06B6D4',
  features: ["nft"],
};
```



## NFT Support

Use the NFT utilities in `lib/nft.ts`:

```typescript
import { checkNFTOwnership, getNFTMetadata } from '@/lib/nft';

const ownsNFT = await checkNFTOwnership(
  '0xYourNFTContract',
  userWalletAddress
);
```

## Deploy

Deploy to Vercel:

```bash
vercel
```

Then update the URLs in `public/manifest.json` with your deployed URL.

---

Built with 💜 by [Fixr](https://fixr.nexus)
