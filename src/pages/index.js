import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import CopyIcon from '@theme/Icon/Copy';
import SuccessIcon from '@theme/Icon/Success';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../../src/components/HomepageFeatures';
import styles from './index.module.css';

const onClick = async () => {
  navigator.clipboard.writeText("npx svgo");
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx(styles.heroTitle)}>{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            Get Started
          </Link>
        </div>
        <div className={clsx(styles.installInstructions)} onClick={onClick}>
          $ npx svgo
          <span className={clsx(styles.cursor)}>█</span>
          <span className={clsx(styles.icon, styles.copyIcon)}>
            <CopyIcon height="1em"/>
          </span>
          <span className={clsx(styles.icon, styles.successIcon)}>
            <SuccessIcon height="1em"/>
          </span>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="description" content="SVGO is a Node.js library and command-line application to optimize vectors."/>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
