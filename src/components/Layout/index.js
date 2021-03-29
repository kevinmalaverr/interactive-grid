import React from 'react';
import './styles.css';
import Header from '../Header';

const Layout = ({ children, sectionName }) => {
  return (
    <>
      <Header></Header>
      <div className="main-container">{children}</div>;
    </>
  );
};

export default Layout;
