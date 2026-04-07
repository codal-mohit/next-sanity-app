'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import disableDraftMode from '@/app/actions/disableDraftMode';
import type { Component } from '@/app/types';

const DraftModeToast: Component = () => {
  const [pending, startTransition] = useTransition();
  const { refresh } = useRouter();

  const handleClick = async () => {
    await disableDraftMode();
    startTransition(() => {
      refresh();
    });
  };

  return (
    <button
      className="fixed right-0 bottom-0 z-9999 bg-black/30 px-1 text-white"
      disabled={pending}
      onClick={handleClick}
      type="button"
    >
      {pending ? 'Exiting Presentation Mode...' : 'Exit Presentation Mode'}
    </button>
  );
};

export default DraftModeToast;
