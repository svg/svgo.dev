import React from 'react';
import clsx from 'clsx';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import styles from './styles.module.css';

export default function DocItemLayout({children}) {
  return (
    <div className={styles.wrapper}>
      <div className={clsx('col', styles.docItemCol)}>
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      <div className={styles.toc}>
        <DocItemTOCDesktop/>
      </div>
    </div>
  );
}
