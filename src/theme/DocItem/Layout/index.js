import React from 'preact/compat';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import DocItemContent from '@theme/DocItem/Content';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function DocItemLayout({ children }) {
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
