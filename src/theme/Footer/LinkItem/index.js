import React from 'preact/compat';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styles from './index.module.css';

export default function FooterLinkItem({ item }) {
  const { to, href, label, prependBaseUrlToHref, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
          href: prependBaseUrlToHref ? normalizedHref : href,
        }
        : {
          to: toUrl,
        })}
      {...props}>
      <div className={styles.footerLink}>
        {label}
        {href && !isInternalUrl(href) && <IconExternalLink />}
      </div>
    </Link>
  );
}
