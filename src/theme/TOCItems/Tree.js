import clsx from 'clsx';
import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import Translate from '@docusaurus/Translate';
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
 * @param {array} toc
 * @param {object} svgoFrontMatter
 */
function insertPluginTocItems(toc, svgoFrontMatter) {
  const usageChildren = []

  if (svgoFrontMatter.parameters) {
    usageChildren.push({
      children: [],
      id: 'parameters',
      level: 3,
      value: 'Parameters',
    });
  }

  toc.push({ children: usageChildren, toc, id: 'usage', level: 2, value: 'Usage' });
  toc.push({ children: [], toc, id: 'demo', level: 2, value: 'Demo' });
}

function TOCItemTree({ toc, className, linkClassName, isChild }) {
  const { metadata, frontMatter } = useDoc();

  if (toc && !isChild && frontMatter.svgo?.pluginId) {
    insertPluginTocItems(toc, frontMatter.svgo);
  }

  if (!toc.length) {
    return null;
  }

  const { editUrl } = metadata;

  return (
    <>
      {!isChild && (
        <div className={styles.onThisPage}>
          On this page
        </div>
      )}
      <ul className={clsx(styles.noSeperator, isChild ? undefined : className, isChild ? undefined : styles.rootToc)}>
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
          {frontMatter.svgo?.pluginId && (
            <div className={styles.extraTocEntries}>
              <a
                href={`https://github.com/svg/svgo/blob/main/plugins/${frontMatter.svgo.pluginId}.js`}
                target="_blank"
                className={linkClassName ?? undefined}
                rel="noreferrer"
              >
                <Translate>Read the implementation</Translate>
              </a>
            </div>
          )}
          <div className={styles.extraTocEntries}>
            <a
              href={editUrl}
              target="_blank"
              className={linkClassName ?? undefined}
              rel="noreferrer"
            >
              <Translate>Edit this page on GitHub</Translate>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(TOCItemTree);
