'use server';

import { draftMode } from 'next/headers';

type DisableDraftMode = () => Promise<void>;

const disableDraftMode: DisableDraftMode = async () => {
  'use server';

  await Promise.allSettled([
    void (await draftMode()).disable(),
    // Simulate a delay to show the loading state
    new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }),
  ]);
};

export default disableDraftMode;
