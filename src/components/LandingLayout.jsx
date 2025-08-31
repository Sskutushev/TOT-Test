import React from 'react';
import LandingHeader from './LandingHeader';
import Footer from './Footer';
import './LandingLayout.css';

const LandingLayout = ({ children }) => {
  return (
    <div className="landing-layout">
      <LandingHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
