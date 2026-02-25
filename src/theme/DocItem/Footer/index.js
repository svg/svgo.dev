import React from 'preact/compat';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { ThemeClassNames } from '@docusaurus/theme-common';
import TagsListInline from '@theme/TagsListInline';
import clsx from 'clsx';

function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        'row margin-bottom--sm',
      )}>
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}

export default function DocItemFooter() {
  const { metadata } = useDoc();
  const { tags } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayFooter = canDisplayTagsRow;

  if (!canDisplayFooter) {
    return null;
  }

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      {canDisplayTagsRow && <TagsRow tags={tags} />}
    </footer>
  );
}
