import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { ThemeClassNames } from '@docusaurus/theme-common';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import clsx from 'clsx';
import DefaultBadge from '../../../components/DefaultBadge';
import PluginDemo from '../../../components/PluginDemo';
import PluginParams from '../../../components/PluginParams';
import PluginUsage from '../../../components/PluginUsage';
import styles from './index.module.css';

/**
 * @param {import('@docusaurus/plugin-content-docs').DocMetadata} metadata
 * @param {import('@docusaurus/plugin-content-docs').DocFrontMatter} frontMatter
 * @param {string} [contentTitle]
 * @returns {string?}
 */
function useSyntheticTitle(metadata, frontMatter, contentTitle) {
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';

  if (!shouldRender) {
    return null;
  }

  return metadata.title;
}

/**
 * @param {import('@theme/DocItem/Content').Props} props
 * @returns {React.JSX.Element}
 */
export default function DocItemContent({ children }) {
  const doc = useDoc();
  const { metadata, contentTitle } = doc;
  const frontMatter = /** @type {import('../../../docs').SvgoDocFrontMatter} */ (doc.frontMatter);

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
          <PluginUsage pluginId={frontMatter.svgo.pluginId} parameters={frontMatter.svgo.parameters} />

          {frontMatter.svgo?.parameters && (
            <>
              <h3 id="parameters">Parameters</h3>
              <PluginParams parameters={frontMatter.svgo.parameters}/>
            </>
          )}

          <h2 id="demo">Demo</h2>
          <PluginDemo pluginId={frontMatter.svgo.pluginId} />
        </>
      )}
    </div>
  );
}
