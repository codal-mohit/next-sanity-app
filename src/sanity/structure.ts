import { Preview } from 'sanity';
import type { DefaultDocumentNodeResolver, StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list().title('Content').items(S.documentTypeListItems());

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S) =>
  S.document().views([S.view.form(), S.view.component(Preview).title('Preview')]);
