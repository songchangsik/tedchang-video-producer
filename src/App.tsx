import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedWorks } from './components/FeaturedWorks';
import { PersonalYoutube } from './components/PersonalYoutube';
import { Contact } from './components/Contact';
import { Planning } from './components/Planning';
import { AdminModal } from './components/AdminModal';

const PortfolioContent: React.FC = () => {
  const { data } = usePortfolio();
  const planningVisible = data.settings?.planningVisible ?? false;

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-zinc-900 selection:bg-blue-500 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedWorks />
        <PersonalYoutube />
        {planningVisible && <Planning />}
        <Contact />
      </main>
      <AdminModal />
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}
