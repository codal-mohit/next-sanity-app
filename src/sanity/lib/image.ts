import { type SanityImageSource, createImageUrlBuilder } from '@sanity/image-url';

import { dataset, projectId } from '@/sanity/env';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export const resolveSanityUrl = (source?: SanityImageSource | string | null) => {
  if (!source) return null;
  return typeof source === 'string' ? source : builder.image(source).auto('format').url();
};
