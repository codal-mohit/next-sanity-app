import type { ElementType, ReactNode } from 'react';
import { Fragment } from 'react';

import { isDevelopment, isValidArray } from '@/lib/utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BaseSection = any;

// TODO: DEBUG sharedSection missing in types
interface RuntimeSharedSection {
  _type: 'sharedSection';
  _key: string;
  modules: BaseSection[];
}

type SectionInput = BaseSection | RuntimeSharedSection;

interface SanityPageProps {
  components: Record<string, ElementType>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  params?: Promise<Record<'slug', string[]>>;
  searchParams?: Promise<Record<string, unknown>>;
}

const flattenSections = (sections: SectionInput[] = []): BaseSection[] =>
  sections
    .flatMap((section) => {
      if ('modules' in section && isValidArray(section.modules)) {
        return section.modules;
      }
      return section as BaseSection;
    })
    .filter((item): item is BaseSection => Boolean(item && item._type));

type SanityPageType = (props: SanityPageProps) => ReactNode;

const SanityPage: SanityPageType = (props) => {
  const { components, data, params, searchParams } = props;
  let rawSections: SectionInput[] = [];

  if (data) {
    if ('sections' in data && isValidArray(data.sections)) {
      rawSections = data.sections as SectionInput[];
    } else if ('modules' in data && isValidArray(data.modules)) {
      rawSections = data.modules;
    }
  }

  const sections = flattenSections(rawSections);

  return (
    <Fragment>
      {sections.map((sectionData, index) => {
        if (!sectionData?._type) return null;

        const type = sectionData._type;
        const Component = components?.[type];

        if (!Component) {
          if (isDevelopment) {
            console.warn(`SanityPage: No component mapping found for type "${type}"`);
          }
          return null;
        }

        return (
          <Component
            key={sectionData._key}
            {...sectionData}
            isAboveTheFold={index < 2}
            params={params}
            searchParams={searchParams}
            siteSettings={data && 'siteSettings' in data ? data.siteSettings : undefined}
          />
        );
      })}
    </Fragment>
  );
};

export default SanityPage;
