import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import DonationProcess from '../components/DonationProcess';
import LocationMap from '../components/LocationMap';
import EmergencySection from '../components/EmergencySection';
import FAQ from '../components/FAQ';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <InfoSection />
      <DonationProcess />
      <LocationMap />
      <EmergencySection />
      <FAQ />
    </main>
  );
};

export default Home;