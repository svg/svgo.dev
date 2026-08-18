import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import Logo from '../../../vectors/logo.svg';
import styles from './index.module.css';

export default function NavbarLogo() {
  return (
    <Link
      to="/"
      className={styles.logoWrapper}
      aria-label={translate({
        id: 'svgo.theme.Navbar.Logo.ariaLabel',
        message: 'SVGO home',
      })}
    >
      <Logo className={styles.logo}/>
    </Link>
  );
}
