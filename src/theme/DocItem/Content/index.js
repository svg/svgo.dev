import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import DefaultBadge from '../../../components/DefaulBadge';
import styles from './index.module.css';

function useSyntheticTitle(metadata, frontMatter, contentTitle) {
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';

  if (!shouldRender) {
    return null;
  }

  return metadata.title;
}

export default function DocItemContent({ children }) {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const syntheticTitle = useSyntheticTitle(metadata, frontMatter, contentTitle);

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header className={clsx(styles.header)}>
          <Heading as="h1">{syntheticTitle}</Heading>
          {frontMatter.svgo?.defaultPlugin && (
            <div className={clsx(styles.badge)}>
              <DefaultBadge />
            </div>
          )}
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
