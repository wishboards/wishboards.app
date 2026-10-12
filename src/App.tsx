import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { DemoShowcase } from './components/DemoShowcase';
import { FeaturePillars } from './components/FeaturePillars';
import { DeploymentGuide } from './components/DeploymentGuide';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Hero />
        <InteractiveSandbox />
        <DemoShowcase />
        <FeaturePillars />
        <DeploymentGuide />
      </main>
      <Footer />
    </div>
  );
};

export default App;
