import React from 'react';

export default function FooterCopyright({copyright}) {
  return (
    <div dangerouslySetInnerHTML={{__html: copyright}} />
  );
}
