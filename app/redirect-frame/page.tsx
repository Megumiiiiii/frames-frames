import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Redirect to cute dog pictures',
      action: 'post_redirect',
    },
  ],
  video: 'https://arweave.net/T1ydJjyz4tzFG8Vxs3VD8pqAmoIDcYV91VH0WrFejeU',
  post_url: `${NEXT_PUBLIC_URL}/api/frame-redirect`,
});

export const metadata: Metadata = {
  title: 'frame.megumii.xyz',
  description: 'Osu!',
  openGraph: {
    title: 'frame.megumii.xyz',
    description: 'Osu!',
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
