
import React, { useState } from 'react';
import Pillar1Reach from './Pillar1Reach';
import Pillar2Communication from './Pillar2Communication';
import Pillar3Infrastructure from './Pillar3Infrastructure';
import Pillar4KPIs from './Pillar4KPIs';

type Pillar = 'Reach' | 'Communication' | 'Infrastructure' | 'KPIs';

const Step4Strategy: React.FC = () => {
  const [activePillar, setActivePillar] = useState<Pillar>('Reach');

  const pillars: Pillar[] = ['Reach', 'Communication', 'Infrastructure', 'KPIs'];

  const renderContent = () => {
    switch (activePillar) {
      case 'Reach': return <Pillar1Reach />;
      case 'Communication': return <Pillar2Communication />;
      case 'Infrastructure': return <Pillar3Infrastructure />;
      case 'KPIs': return <Pillar4KPIs />;
      default: return null;
    }
  };

  return (
    <div>
      <div className="border-b border-border mb-6">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          {pillars.map((pillar) => (
            <button
              key={pillar}
              onClick={() => setActivePillar(pillar)}
              className={`${
                activePillar === pillar
                  ? 'border-brick-red text-brick-red'
                  : 'border-transparent text-text-secondary hover:text-text-primary hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-200`}
            >
              Pillar {pillars.indexOf(pillar) + 1}: {pillar}
            </button>
          ))}
        </nav>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Step4Strategy;