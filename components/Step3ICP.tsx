
import React from 'react';
import Card from './ui/Card';
import { icps } from '../data';

const Step3ICP: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card>
        <h2 className="text-2xl font-bold text-brick-red font-serif mb-4">Ideal Customer Profiles (ICP) + Pain Points & Triggers</h2>
        <div className="space-y-6">
          {icps.map((icp, index) => (
            <div key={index} className="bg-background border border-border p-4 rounded-lg">
              <h3 className="text-lg font-bold text-brick-red mb-3">{icp.title}</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Demographics</h4>
                  <ul className="list-disc list-inside text-text-secondary space-y-1">
                    {icp.demographics.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Key Triggers</h4>
                  <ul className="list-disc list-inside text-text-secondary space-y-1">
                    {icp.triggers.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Pain Points</h4>
                  <ul className="list-disc list-inside text-text-secondary space-y-1">
                    {icp.painPoints.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Step3ICP;