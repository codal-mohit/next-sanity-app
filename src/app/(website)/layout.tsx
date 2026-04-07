import { VisualEditing } from 'next-sanity/visual-editing';
import { draftMode } from 'next/headers';

import DraftModeToast from '@/app/components/Sanity/DraftModeToast';
import { SanityLive } from '@/sanity/lib/live';

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isEnabled: isDraftModeActive } = await draftMode();

  return (
    <>
      <div>Header</div>
      {children}
      <div>Footer</div>
      {isDraftModeActive && (
        <>
          <SanityLive />
          <DraftModeToast />
          <VisualEditing />
        </>
      )}
    </>
  );
};

export default RootLayout;
