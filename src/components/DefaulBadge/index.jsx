import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

export default function DefaultBadge() {
  return (
    <span className={clsx(styles.badge)} title="This plugin is enabled by default.">
      Default
    </span>
  );
}
