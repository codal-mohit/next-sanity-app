import config from '@/lib/config';

export const apiVersion = config.NEXT_PUBLIC_SANITY_API_VERSION;

export const dataset = assertValue(
  config.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
);

export const projectId = assertValue(
  config.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);

export const studioUrl = assertValue(
  config.NEXT_PUBLIC_SANITY_STUDIO_URL,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_URL',
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
