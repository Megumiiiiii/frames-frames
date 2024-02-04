import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Click Me',
    },
  ],
  video: 'https://arweave.net/T1ydJjyz4tzFG8Vxs3VD8pqAmoIDcYV91VH0WrFejeU',
  input: {
    text: 'A',
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'frame.megumii.xyz',
  description: 'Osu!',
  openGraph: {
    title: 'frame.megumii.xyz',
    description: 'LFG',
    videos: ['https://arweave.net/T1ydJjyz4tzFG8Vxs3VD8pqAmoIDcYV91VH0WrFejeU'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>frame.megumii.xyz</h1>
    </>
  );
}
