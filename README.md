# Passkeys NextJS App

Get started with Passkeys in just 2 minutes

```bash
npx create-next-app@latest pdk-next
```

```bash
npx install @passkeys/core @passkeys/react
```

***Generate a random UUID***

Example: 12345678-abcd-efgh-ijkl-mnopqrstuvwx

For production request one here [hello@passkeys.foundation] / [passkeys.foundation]

New a new component

```tsx filename=src/app/components/Wallet.tsx
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
```

Import Wallet into the Layout

```tsx filename=/src/app/layout.tsx
import Wallet from "./components/Wallet";

...
<Wallet>
{children}
</Wallet>
```

Use Wallet on Page

```tsx filename=/src/app/page.tsx
'use client'

import { WalletWidget } from "@passkeys/react";
import { useWallet } from "@passkeys/react";

...
const wallet = useWallet();
const connectWallet = () => {  wallet.providers.solana.connect();};
...

...
<WalletWidget/>
...

```
