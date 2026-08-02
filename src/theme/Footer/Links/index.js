import React from 'react';
import { isMultiColumnFooterLinks } from '@docusaurus/theme-common';
import FooterLinksMultiColumn from '@theme/Footer/Links/MultiColumn';
import FooterLinksSimple from '@theme/Footer/Links/Simple';

/**
 * @param {import('@theme/Footer/Links').Props} props
 * @returns {React.JSX.Element}
 */
export default function FooterLinks({ links }) {
  return isMultiColumnFooterLinks(links) ? (
    <FooterLinksMultiColumn columns={links} />
  ) : (
    <FooterLinksSimple links={links} />
  );
}
