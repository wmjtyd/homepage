import { PublicKey } from '@solana/web3.js';

export function toShortAddr(pubkey: string | PublicKey, length = 4): string {
  if (!pubkey) return pubkey;
  if (typeof pubkey !== 'string') {
    pubkey = pubkey.toString();
  }
  return `${pubkey.substr(0, length)}...${pubkey.substr(-length)}`;
}
