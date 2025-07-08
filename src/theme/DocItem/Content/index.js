import React from 'preact/compat';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import DefaultBadge from '../../../components/DefaultBadge';
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
  const doc = useDoc();

  /** @type {any} */
  const frontMatter = doc.frontMatter;
  const { metadata, contentTitle } = doc;

  const syntheticTitle = useSyntheticTitle(metadata, frontMatter, contentTitle);

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header className={styles.header}>
          <Heading as="h1" className={styles.pageTitle}>{syntheticTitle}</Heading>
          {frontMatter.svgo?.defaultPlugin && (
            <div className={styles.badge}>
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
          <PluginDemo />
        </>
      )}
    </div>
  );
}
