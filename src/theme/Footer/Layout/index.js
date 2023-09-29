import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

export default function FooterLayout({links, copyright}) {
  return (
    <footer className={clsx('footer', styles.wrapper)}>
      <div className={clsx('container', styles.footer)}>
        {links}
        {copyright && (
          <div className="text--center">
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
