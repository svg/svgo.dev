import React from 'react';

/**
 * @param {import('@theme/Footer/Copyright').Props} props
 * @returns {React.JSX.Element}
 */
export default function FooterCopyright({ copyright }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: copyright }} />
  );
}
