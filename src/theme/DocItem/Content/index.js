import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import DefaultBadge from '../../../components/DefaulBadge';
import styles from './index.module.css';
import PluginUsage from '../../../components/PluginUsage';
import PluginParams from '../../../components/PluginParams';
import PluginDemo from '../../../components/PluginDemo';

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

      {frontMatter.svgo?.pluginId && (
        <>
          <h2 id="usage">Usage</h2>
          <PluginUsage />

          {frontMatter.svgo?.parameters && (
            <>
              <h3 id="parameters">Parameters</h3>
              <PluginParams />
            </>
          )}

          <h2 id="demo">Demo</h2>
          <PluginDemo/>
        </>
      )}
    </div>
  );
}
