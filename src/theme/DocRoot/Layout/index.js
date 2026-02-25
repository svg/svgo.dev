import React, { useState } from 'preact/compat';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import BackToTopButton from '@theme/BackToTopButton';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import styles from './styles.module.css';

export default function DocRootLayout({ children }) {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);

  return (
    <div className={styles.docsWrapper}>
      <BackToTopButton />
      <div className={styles.docRoot}>
        <DocRootLayoutSidebar
          // @ts-expect-error Will never be null.
          sidebar={sidebar.items}
          hiddenSidebarContainer={hiddenSidebarContainer}
          setHiddenSidebarContainer={setHiddenSidebarContainer}
        />
        <DocRootLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
          {children}
        </DocRootLayoutMain>
      </div>
    </div>
  );
}
