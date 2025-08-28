import React from 'react';
import LandingHeader from '../components/LandingHeader';
import LandingHero from '../components/LandingHero';
import FeaturesSection from '../components/FeaturesSection';
import DirectionsSection from '../components/DirectionsSection';
import EducationSection from '../components/EducationSection';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <LandingHeader />
      <main>
        <LandingHero />
        <FeaturesSection />
        <DirectionsSection />
        <EducationSection />
        {/* Следующие секции будут здесь */}
      </main>
    </div>
  );
};

export default LandingPage;