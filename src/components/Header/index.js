import { navigate } from 'gatsby-link';
import React from 'react';

const index = ({ name }) => {
  return (
    <header className="flex justify-between align-center p-4">
      <button
        className="focus:outline-none focus:ring focus:border-indigo-300"
        onClick={() => navigate(-1)}
      >
        back
      </button>
      <h1 className="text-3xl text-indigo-900 font-bold">🚀 Explore</h1>
      <button>github</button>
    </header>
  );
};

export default index;
