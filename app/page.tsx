import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story time',
    },
    {
      action: 'tx',
      label: 'Send Base Sepolia',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/Elisa.jpg`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Hypersolid',
  description: 'Hypersolid',
  openGraph: {
    title: 'Hypersolid',
    description: 'Degen Lottery',
    images: [`${NEXT_PUBLIC_URL}/Elisa.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Hypersolid NFT</h1>
    </>
  );
}
