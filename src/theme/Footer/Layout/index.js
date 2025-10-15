import React from 'preact/compat';
import clsx from 'clsx';
import { Logo } from '../../../components/SpriteSheet';
import styles from './index.module.css';

export default function FooterLayout({ links, copyright }) {
  return (
    <>
      <svg height="0" width="0">
        <clipPath id="footerMobilePath" clipPathUnits="objectBoundingBox">
          <path d="M 0 .05 Q .5 0 1 .11 V 1 H 0" />
        </clipPath>
        <clipPath id="footerDesktopPath" clipPathUnits="objectBoundingBox">
          <path d="M 0 0 Q .2 .3 .4 .1 T .8 .1 1 .3 V 1 H 0" />
        </clipPath>
      </svg>
      <footer className={clsx(styles.wrapper, 'footer')}>
        <div className={styles.logo}><Logo /></div>
        <div className={clsx(styles.footer, 'container')}>
          {links}
          {copyright && (
            <div className="text--center">
              {copyright}
            </div>
          )}
        </div>
      </footer>
    </>
  );
}
