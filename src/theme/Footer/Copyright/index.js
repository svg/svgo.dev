import React from 'preact/compat';

export default function FooterCopyright({ copyright }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: copyright }} />
  );
}
