import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import UndrawMountain from '../../vectors/undraw_mountain.svg';
import UndrawReact from '../../vectors/undraw_react.svg';
import UndrawTree from '../../vectors/undraw_tree.svg';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: UndrawMountain,
    description: (
      <>
        Easy to use through both the command-line interface and JavaScript
        API.
      </>
    ),
  },
  {
    title: 'Integrations',
    Svg: UndrawTree,
    description: (
      <>
        Many applications and frameworks depend on or have supported integrations
        for SVGO already, like Docusaurus and Webpack.
      </>
    ),
  },
  {
    title: 'Open-Source',
    Svg: UndrawReact,
    description: (
      <>
        We welcome contributions, so feel free to join us on GitHub!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('card', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" aria-hidden="true"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
