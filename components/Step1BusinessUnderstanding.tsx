
import React from 'react';
import Card from './ui/Card';
import { businessUnderstanding, keyObjectives } from '../data';
import { ICONS } from '../constants';

const Step1BusinessUnderstanding: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card>
        <h2 className="text-2xl font-bold text-brick-red font-serif mb-4">Business Overview: EduvantX</h2>
        <p className="text-text-secondary">{businessUnderstanding.overview}</p>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-xl font-semibold text-brick-red font-serif mb-3">Offerings</h3>
          <div className="space-y-4">
            {businessUnderstanding.offerings.map((offering, index) => (
              <div key={index}>
                <h4 className="font-bold text-text-primary">{offering.title}</h4>
                <p className="text-text-secondary">{offering.description}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold text-brick-red font-serif mb-3">Digital Marketing Needs</h3>
          <p className="text-text-secondary">{businessUnderstanding.digitalNeeds.focus}</p>
          <p className="mt-2 text-lg font-semibold text-brick-red bg-red-50 p-2 rounded-md inline-block">{businessUnderstanding.digitalNeeds.budget}</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-xl font-semibold text-brick-red font-serif mb-3 flex items-center">{ICONS.check} Key USPs (Unique Selling Propositions)</h3>
        <ul className="space-y-2">
          {businessUnderstanding.usps.map((usp, index) => (
            <li key={index} className="flex items-start text-text-secondary">
              {ICONS.list}
              <span>{usp}</span>
            </li>
          ))}
        </ul>
      </Card>

       <Card>
        <h3 className="text-xl font-semibold text-brick-red font-serif mb-3 flex items-center">{ICONS.challenge} Key Challenges</h3>
        <ul className="space-y-2">
          {businessUnderstanding.challenges.map((challenge, index) => (
            <li key={index} className="flex items-start text-text-secondary">
               {ICONS.list}
              <span>{challenge}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="text-2xl font-bold text-brick-red font-serif mb-4 flex items-center">{ICONS.objective} Key Objectives</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {keyObjectives.map((obj, index) => (
            <div key={index} className="bg-background p-4 rounded-md border border-border">
              <h4 className="font-bold text-text-primary">{obj.title}</h4>
              <p className="text-text-secondary text-sm my-2">{obj.objective}</p>
              <ul className="text-xs text-text-secondary list-disc list-inside space-y-1">
                {obj.tactics.map((tactic, i) => <li key={i}>{tactic}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Card>

    </div>
  );
};

export default Step1BusinessUnderstanding;