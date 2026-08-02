import React from 'react';
import SpriteSheet from '../components/SpriteSheet';

/**
 * @param {import('@theme/Root').Props} props
 * @returns {React.JSX.Element}
 */
export default function Root({ children }) {
  return (
    <>
      <SpriteSheet />
      {children}
    </>
  );
}
