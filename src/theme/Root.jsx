import React from 'react';
import SpriteSheet from '../components/SpriteSheet';

export default function Root({ children }) {
  return (
    <>
      <SpriteSheet />
      {children}
    </>
  );
}
