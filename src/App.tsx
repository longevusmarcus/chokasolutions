import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import BusinessCases from './components/BusinessCases';
import WellnessVenues from './components/WellnessVenues';
import Benefits from './components/Benefits';
import Vision from './components/Vision';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <BusinessCases />
        <WellnessVenues />
        <Benefits />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}

export default App;