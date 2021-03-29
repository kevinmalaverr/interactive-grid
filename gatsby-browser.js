import React from 'react';
import Layout from './src/components/Layout';
import './src/styles/global.css';
import 'animate.css';

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Layout {...props}>{element}</Layout>
    </>
  );
};
