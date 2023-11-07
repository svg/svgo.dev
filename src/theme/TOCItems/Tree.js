import clsx from 'clsx';
import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

function TOCItemTree({ toc, className, linkClassName, isChild }) {
  const { metadata } = useDoc();

  if (!toc.length) {
    return null;
  }

  const { editUrl } = metadata;

  return (
    <>
      {!isChild && (
        <div className={clsx(styles.onThisPage)}>
          On this page
        </div>
      )}
      <ul className={clsx(isChild ? undefined : className, isChild ? undefined : styles.rootToc, styles.noSeperator)}>
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
        <div className={clsx(styles.editPage)}>
          <a
            href={editUrl}
            target="_blank"
            className={linkClassName ?? undefined}
          >
            <Translate>Edit this page on GitHub</Translate>
          </a>
        </div>
      )}
    </>
  );
}

export default React.memo(TOCItemTree);
