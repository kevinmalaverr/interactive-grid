import React from 'react';
import pageTransition from '../utils/pageTransition';
import { navigate } from 'gatsby';
import Header from '../components/Header';

const other = () => {
  return (
    <>
      <Header name="Template areas" />
      <h1>lorsd sdsd dsadsd</h1>
      <button onClick={pageTransition({ onMiddle: () => navigate('/') })}>
        volver
      </button>
    </>
  );
};

export default other;
