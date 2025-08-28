import React from 'react';
import LandingHeader from '../components/LandingHeader';
import LandingHero from '../components/LandingHero';
import FeaturesSection from '../components/FeaturesSection';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <LandingHeader />
      <main>
        <LandingHero />
        <FeaturesSection />
        {/* Следующие секции будут здесь */}
      </main>
    </div>
  );
};

export default LandingPage;