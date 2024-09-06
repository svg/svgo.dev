import React from 'react';
import styles from './index.module.css';

export default function DefaultBadge() {
  return (
    <span className={styles.badge} title="This plugin is enabled by default.">
      Default
    </span>
  );
}