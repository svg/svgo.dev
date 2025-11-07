import React from 'preact/compat';
import clsx from 'clsx';
import SvgoHackerman from '../../vectors/svgo_hackerman.svg';
import SvgoIntegrations from '../../vectors/svgo_integrations.svg';
import SvgoOss from '../../vectors/svgo_oss.svg';
import styles from './index.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: SvgoHackerman,
    description: (
      <>
        SVGO can be used through both the command-line interface and JavaScript
        API, with help pages and documentation available for both.
      </>
    ),
  },
  {
    title: 'Integrations',
    Svg: SvgoIntegrations,
    description: (
      <>
        Many libraries, frameworks, or tools bundle or have integrations
        available for SVGO already, like Docusaurus, PostCSS, and webpack.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: SvgoOss,
    description: (
      <>
        We welcome contributions! Feel free to to file a bug report, feature
        request, or open pull requests on GitHub.
      </>
    ),
  },
];

/**
 * @param {{
 *   Svg: React.ComponentType<React.SVGProps<SVGSVGElement> & { title?: string }>,
 *   title: string,
 *   description: React.JSX.Element
 * }} param0
 * @returns {React.JSX.Element}
 */
function Feature({ Svg, title, description }) {
  return (
    <div className={styles.featureWrapper}>
      <div className={styles.featureBackground}></div>
      <div className={styles.feature}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={clsx(styles.featureText, 'padding-horiz--md')}>
          <h2 className={styles.featureTitle}>{title}</h2>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <svg height="0" width="0">
        <clipPath id="featureMobilePath" clipPathUnits="objectBoundingBox">
          <path d="M 0 .4 Q .4 .2 1 .1 V 1 H 0" />
        </clipPath>
        <clipPath id="featureDesktopPath" clipPathUnits="objectBoundingBox">
          <path d="M 0 .25 Q .2 -.1 .4 .1 T .8 .2 1.05 0 V 1 H 0" />
        </clipPath>
      </svg>
      <section className={styles.features}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </section>
    </>
  );
}
