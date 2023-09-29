import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import Logo from '../../../vectors/logo.svg';

export default function NavbarLogo() {
  return (
    <Link to="/" className={clsx(styles.logoWrapper)} aria-label="SVGO home">
      <Logo className={clsx(styles.logo)}/>
    </Link>
  );
}
