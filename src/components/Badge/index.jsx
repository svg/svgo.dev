import React from 'react';
import styles from './index.module.css';

/**
 * @param {import('react').PropsWithChildren<{ title: string }>} props
 * @returns {React.JSX.Element}
 */
export default function Badge({ title, children }) {
  return (
    <span className={styles.box} title={title}>
      {children}
    </span>
  );
}
