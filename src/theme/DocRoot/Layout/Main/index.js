import React from 'preact/compat';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function DocRootLayoutMain({ hiddenSidebarContainer, children }) {
  const sidebar = useDocsSidebar();

  return (
    <main
      className={clsx(
        styles.docMainContainer,
        (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced,
      )}>
      <div
        className={clsx(
          styles.docItemWrapper,
          'container padding-top--md padding-bottom--lg',
          hiddenSidebarContainer && styles.docItemWrapperEnhanced,
        )}>
        {children}
      </div>
    </main>
  );
}
