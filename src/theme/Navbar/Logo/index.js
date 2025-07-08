import React from 'preact/compat';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import Logo from '../../../vectors/logo.svg';

export default function NavbarLogo() {
  return (
    <Link to="/" className={styles.logoWrapper} aria-label="SVGO home">
      <Logo className={styles.logo}/>
    </Link>
  );
}
