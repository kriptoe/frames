import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'Link to Google',
      target: 'https://www.google.com',
    },
    {
      action: 'tx',
      label: 'Click the Button',
      target: `${NEXT_PUBLIC_URL}/api/buttonclicker`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/Elisa.jpg`,
    aspectRatio: '1:1',
  },
});

export const metadata: Metadata = {
  title: 'Frame Test',
  description: 'LFG',
  openGraph: {
    title: 'Frame Test',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/Elisa.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Hypersolid</h1>
    </>
  );
}
