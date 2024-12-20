import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import CopyIcon from '@theme/Icon/Copy';
import SuccessIcon from '@theme/Icon/Success';
import Head from '@docusaurus/Head';
import HomepageFeatures from '../../src/components/HomepageFeatures';
import styles from './index.module.css';
import SvgoTrixie from '../vectors/svgo_trixie.svg';

const INSTALL_COMMAND = 'npm i -g svgo';

const onClick = async () => {
  navigator.clipboard.writeText(INSTALL_COMMAND);
}

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={clsx(styles.heroSplit, 'container')}>
        <div className={styles.infoSection}>
          <p className={styles.tagline}>
            SVG Optimizer for Node.js and CLI
          </p>
          <p className={styles.subtitle}>
            SVGO and its various integrations will enable you to optimize
            SVGs and serve your web applications faster.
          </p>
          <div>
            <Link
              className="button button--lg"
              to="/docs/introduction">
              Read the docs
            </Link>
          </div>
          <div className={styles.installInstructions} onClick={onClick}>
            $ {INSTALL_COMMAND}
            <span className={styles.cursor}>█</span>
            <span className={clsx(styles.icon, styles.copyIcon)}>
              <CopyIcon height="1em"/>
            </span>
            <span className={clsx(styles.icon, styles.successIcon)}>
              <SuccessIcon height="1em"/>
            </span>
          </div>
        </div>
        <div className={styles.mascotSection}>
          <SvgoTrixie className={styles.mascot}/>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="description" content="SVGO is a Node.js library and command-line application for optimizing vector images."/>
        <meta name="og:image" content="https://svgo.dev/img/opengraph.jpg"/>
        <meta name="og:image:type" content="image/jpeg"/>
        <meta name="og:image:width" content="1920"/>
        <meta name="og:image:height" content="480"/>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
