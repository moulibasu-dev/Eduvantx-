
import React, { useState } from 'react';
import Step1BusinessUnderstanding from './components/Step1BusinessUnderstanding';
import Step2CompetitorAnalysis from './components/Step2CompetitorAnalysis';
import Step3ICP from './components/Step3ICP';
import Step4Strategy from './components/Step4Strategy';
import { ICONS } from './constants';

type Tab = 'Step 1' | 'Step 2' | 'Step 3' | 'Step 4';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Step 1');

  // FIX: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  const tabs: { name: Tab; label: string; icon: React.ReactElement }[] = [
    { name: 'Step 1', label: 'Business Understanding', icon: ICONS.business },
    { name: 'Step 2', label: 'Competitor Analysis', icon: ICONS.competitor },
    { name: 'Step 3', label: 'ICP & Pain Points', icon: ICONS.icp },
    { name: 'Step 4', label: '4 Pillar Strategy', icon: ICONS.strategy },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Step 1': return <Step1BusinessUnderstanding />;
      case 'Step 2': return <Step2CompetitorAnalysis />;
      case 'Step 3': return <Step3ICP />;
      case 'Step 4': return <Step4Strategy />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary font-serif">
            Proposal for <span className="text-brick-red">EduvantX</span>
          </h1>
          <p className="mt-2 text-lg text-text-secondary">A comprehensive digital strategy for growth.</p>
        </header>

        <div className="bg-card rounded-xl shadow-lg p-4 md:p-6 border border-border">
          <div className="border-b border-border">
            <nav className="-mb-px flex flex-wrap md:space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`${
                    activeTab === tab.name
                      ? 'border-brick-red text-brick-red'
                      : 'border-transparent text-text-secondary hover:text-text-primary hover:border-gray-300'
                  } flex items-center whitespace-nowrap py-4 px-2 md:px-4 border-b-2 font-medium text-sm md:text-base transition-colors duration-300 ease-in-out focus:outline-none`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <main className="mt-8">
            {renderContent()}
          </main>
        </div>

        <footer className="text-center mt-12 py-4 text-text-secondary">
            <p>&copy; {new Date().getFullYear()} Digital Proposal. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;