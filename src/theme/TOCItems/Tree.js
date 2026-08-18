import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import IconExternalLink from '@theme/Icon/ExternalLink';
import clsx from 'clsx';
import styles from './index.module.css';

/**
 * This is a hack to dynamically insert TOC items into the plugin pages table
 * of contents. Normally, only headings inserted in the Markdown or MDX file
 * will appear in the TOC, which excludes headings specified in React
 * components.
 *
 * By doing this, we can insert the TOC headings despite them being declared in
 * React components.
 *
 * @param {any[]} toc
 * @param {import('../../docs').SvgoFrontMatter} svgoFrontMatter
 */
function insertPluginTocItems(toc, svgoFrontMatter) {
  const usageChildren = [];

  if (svgoFrontMatter.parameters) {
    usageChildren.push({
      children: [],
      id: 'parameters',
      level: 3,
      value: translate({
        id: 'svgo.theme.DocItem.Content.parameters',
        message: 'Parameters'
      })
    });
  }

  toc.push({
    children: usageChildren,
    toc,
    id: 'usage',
    level: 2,
    value: translate({
      id: 'svgo.theme.DocItem.Content.usage',
      message: 'Usage'
    })
  });

  toc.push({ children: [],
    toc,
    id: 'demo',
    level: 2,
    value: translate({
      id: 'svgo.theme.DocItem.Content.demo',
      message: 'Demo'
    })
  });
}

/**
 * @param {import('@theme/TOCItems/Tree').Props} props
 * @returns {React.JSX.Element?}
 */
function TOCItemTree({ toc, className, linkClassName, isChild }) {
  const doc = useDoc();
  const frontMatter = /** @type {import('../../docs').SvgoDocFrontMatter} */ (doc.frontMatter);
  const metadata = doc.metadata;

  if (toc && !isChild && frontMatter.svgo?.pluginId) {
    insertPluginTocItems(/** @type {any} */ (toc), frontMatter.svgo);
  }

  if (!toc.length) {
    return null;
  }

  const { editUrl } = metadata;

  return (
    <>
      {!isChild && (
        <div className={styles.onThisPage}>
          <Translate
            id="svgo.theme.TOCItems.onThisPage"
            description="Shown above the the table of contents."
          >
            On this page
          </Translate>
        </div>
      )}
      <ul className={clsx(styles.noSeparator, isChild ? undefined : className, isChild ? undefined : styles.rootToc)}>
        {toc.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={linkClassName ?? undefined}
              dangerouslySetInnerHTML={{ __html: heading.value }}
            />
            <TOCItemTree
              isChild
              toc={heading.children}
              className={className}
              linkClassName={linkClassName}
            />
          </li>
        ))}
      </ul>
      {!isChild && (
        <div className={styles.topBorder}>
          <div className={styles.extraTocEntries}>
            <a
              // @ts-expect-error Will never be null.
              href={editUrl}
              target="_blank"
              className={linkClassName ?? undefined}
              rel="noreferrer"
            >
              <Translate id="svgo.theme.TOCItems.editThisPage">
                Edit this page on GitHub
              </Translate>
              <IconExternalLink height=".8em" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(TOCItemTree);
