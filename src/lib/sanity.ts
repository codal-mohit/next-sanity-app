'use server';

import type { ClientPerspective, QueryParams } from 'next-sanity';
import { draftMode } from 'next/headers';

import { isDevelopment } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import token from '@/sanity/lib/token';

interface SanityFetchOptions<QueryString> {
  query: QueryString;
  params?: QueryParams | Promise<QueryParams>;
  perspective?: Omit<ClientPerspective, 'raw'>;
  stega?: boolean;
}

export const sanityFetch = async <const QueryString extends string>(
  options: SanityFetchOptions<QueryString>,
) => {
  const { query, params = {}, perspective: perspectiveOverride, stega: stegaOverride } = options;

  const { isEnabled } = await draftMode();

  const perspective = perspectiveOverride || isEnabled ? 'drafts' : 'published';

  const stega = stegaOverride ?? perspective === 'drafts';

  const parameter = await params;

  if (perspective === 'drafts') {
    return client.fetch(query, parameter, {
      stega,
      perspective: 'drafts',
      token,
      useCdn: false,
      next: {
        revalidate: 0,
      },
    });
  }

  return client.fetch(query, parameter, {
    stega,
    perspective: 'published',
    useCdn: true,
    next: {
      revalidate: isDevelopment ? 0 : 60,
    },
  });
};
