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
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
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
