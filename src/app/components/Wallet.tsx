'use client'

import { createWallet } from '@passkeys/core';
import { WalletProvider } from '@passkeys/react';

export default function Wallet({
    children
  }: {
    children: React.ReactNode;
  }) {

    const wallet = createWallet({
        appId: '8bd805f2-fac5-4f37-9bf9-204e27f3f8f7', // Only required for production, contact us to get yours.
        providers: {
          solana: true,
        },
      });

      return(
<>
<WalletProvider wallet={wallet}>
        {children as NonNullable<React.ReactNode>}
</WalletProvider>
</>
      )
    }