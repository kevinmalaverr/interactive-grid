import React, { useRef } from 'react';
import './styles.scss';
import { navigate } from 'gatsby';
import pageTransition from '../../utils/pageTransition';

const Grid = () => {
  const item = useRef();

  const handleClick = () =>
    pageTransition({
      onMiddle: () => {
        console.log(navigate('/other'));
      },
    });

  return (
    <div className="navigation animate__animated animate__fadeIn">
      <div className="navigation__intro bg-indigo-700" onClick={handleClick()}>
        <h2>introducción</h2>
      </div>
      <div
        className="navigation__templates bg-green-300"
        onClick={handleClick()}
      >
        texto tengo texto
      </div>
      <div
        className="navigation__template-areas bg-blue-700"
        onClick={handleClick()}
      >
        texto tengo texto
      </div>
      <div
        className="navigation__alignment bg-indigo-700"
        onClick={handleClick()}
      >
        texto tengo texto
      </div>
      <div className="navigation__gap bg-purple-700" onClick={handleClick()}>
        texto tengo texto
      </div>
    </div>
  );
};

export default Grid;
