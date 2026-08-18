import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { usePluginData } from '@docusaurus/useGlobalData';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import clsx from 'clsx';
import Badge from '../../../components/Badge';
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
  const { plugins } = /** @type {import('../../../plugins/svgo').SvgoPluginData} */ (usePluginData('svgo'));
  const { metadata, contentTitle } = doc;
  const frontMatter = /** @type {import('../../../docs').SvgoDocFrontMatter} */ (doc.frontMatter);

  const syntheticTitle = useSyntheticTitle(metadata, frontMatter, contentTitle);

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      <div className={styles.preContent}>
        {syntheticTitle && (
          <header className={styles.header}>
            <Heading as="h1" className={styles.pageTitle}>{syntheticTitle}</Heading>
            {frontMatter.svgo && plugins[frontMatter.svgo.pluginId].isDefault && (
              <Badge
                title={translate({
                  id: 'svgo.theme.DocItem.Content.defaultTitle',
                  message: 'This plugin is enabled by default.'
                })}
              >
                <Translate id="svgo.theme.DocItem.Content.defaultBadge" description="Assigned next to any plugins that are a part of preset-default in SVGO.">
                  Default
                </Translate>
              </Badge>
            )}
          </header>
        )}

        {frontMatter.svgo && (
          <p className={styles.source}>
            {plugins[frontMatter.svgo.pluginId].since && (
              <>
                <span>
                  <Translate
                    id="svgo.theme.DocItem.Content.since"
                    values={{
                      version: plugins[frontMatter.svgo.pluginId].since
                    }}
                  >
                    {'Since v{version}'}
                  </Translate></span>
                <span aria-hidden={true}>·</span>
              </>
            )}
            <a
              href={`https://github.com/svg/svgo/blob/main/plugins/${frontMatter.svgo.pluginId}.js`}
              target="_blank"
              rel="noreferrer"
            >
              <Translate id="svgo.theme.DocItem.Content.source">
                Source
              </Translate>
            </a>
          </p>
        )}
      </div>

      <MDXContent>{children}</MDXContent>

      {frontMatter.svgo?.pluginId && (
        <>
          <h2 id="usage">
            <Translate id="svgo.theme.DocItem.Content.usage">
              Usage
            </Translate>
          </h2>
          <PluginUsage pluginId={frontMatter.svgo.pluginId} parameters={frontMatter.svgo.parameters} />

          {frontMatter.svgo?.parameters && (
            <>
              <h3 id="parameters">
                <Translate id="svgo.theme.DocItem.Content.parameters">
                  Parameters
                </Translate>
              </h3>
              <PluginParams parameters={frontMatter.svgo.parameters}/>
            </>
          )}

          <h2 id="demo">
            <Translate id="svgo.theme.DocItem.Content.demo">
              Demo
            </Translate>
          </h2>
          <PluginDemo pluginId={frontMatter.svgo.pluginId} />
        </>
      )}
    </div>
  );
}
