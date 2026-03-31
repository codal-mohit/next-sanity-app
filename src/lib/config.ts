type Environment = 'development' | 'production';

let NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV as Environment;
if (NODE_ENV !== 'development' && NODE_ENV !== 'production') {
  NODE_ENV = 'development';
}


export const config = {
  NODE_ENV,
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || '',
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || '',
  NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-12-30',
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  NEXT_PUBLIC_SANITY_STUDIO_URL: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || '',
  SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN || '',
} as const satisfies {
  NODE_ENV: Environment;
  NEXT_PUBLIC_APP_NAME: string;
  NEXT_PUBLIC_APP_URL: string;
  NEXT_PUBLIC_SANITY_API_VERSION: string;
  NEXT_PUBLIC_SANITY_DATASET: string;
  NEXT_PUBLIC_SANITY_PROJECT_ID: string;
  NEXT_PUBLIC_SANITY_STUDIO_URL: string;
  SANITY_API_READ_TOKEN: string;
};

export default config;
