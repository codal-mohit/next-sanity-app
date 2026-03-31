import { Metadata } from 'next';
import type { FC } from 'react';

export type Component<E = unknown> = FC<E>;

export type ParamsComponent<
  T extends string | string[],
  Q extends Record<string, string | string[] | undefined> = Record<string, undefined>,
  E = unknown,
> = Component<NextParams<T, Q> & E>;

export interface NextParams<
  T extends string | string[],
  Q extends Record<string, string | string[] | undefined> = Record<string, undefined>,
> {
  params: Promise<Record<T extends string ? T : T[number], T extends string[] ? string[] : string>>;
  searchParams: Promise<Q>;
}

export type GenerateMetaData<
  T extends string | string[] | null = null,
  Q extends Record<string, string | string[] | undefined> = Record<string, undefined>,
> = T extends string | string[]
  ? (params: NextParams<T, Q>) => Promise<Metadata>
  : () => Promise<Metadata>;

export type ImageType =
  | {
      image?: {
        _type: 'image';
        asset?: {
          _ref: string;
          _type: 'reference';
        };
      };
    }
  | undefined;

export type SanitySection = {
  isAboveTheFold?: boolean;
  parentDocument?: {
    _id: string;
    _type: string;
  };
};
