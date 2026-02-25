import Layout from '@theme-original/Layout';
import React from 'react';
import SpriteSheet from '../../components/SpriteSheet';

export default function LayoutWrapper(props) {
  return (
    <>
      <SpriteSheet />
      <Layout {...props} />
    </>
  );
}
