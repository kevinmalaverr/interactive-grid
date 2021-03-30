import React, { useRef } from 'react';
import './styles.scss';
import { navigate } from 'gatsby';
import pageTransition from '../../utils/pageTransition';

const Grid = () => {
  const handleClick = () =>
    pageTransition({
      onMiddle: () => {
        console.log(navigate('/other'));
      },
    });

  return (
    <div className="navigation animate__animated animate__fadeIn">
      <article
        className="navigation__section navigation__intro bg-indigo-700"
        onClick={handleClick()}
      >
        <h2 className="text-xl">Introducción</h2>
      </article>
      <article
        className="navigation__section navigation__templates bg-indigo-500"
        onClick={handleClick()}
      >
        <h2 className="text-xl">template-columns</h2>
        <h2 className="text-xl">template-rows</h2>
      </article>
      <article
        className="navigation__section navigation__template-areas bg-blue-700"
        onClick={handleClick()}
      >
        <h2 className="text-xl">Template Areas</h2>
      </article>
      <article
        className="navigation__section navigation__alignment bg-indigo-700"
        onClick={handleClick()}
      >
        <h2 className="text-xl">Alignment</h2>
      </article>
      <article
        className="navigation__section navigation__gap bg-purple-700"
        onClick={handleClick()}
      >
        <h2 className="text-xl">Gap</h2>
      </article>
    </div>
  );
};

export default Grid;
