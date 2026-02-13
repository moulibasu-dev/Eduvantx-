
import React from 'react';
import Card from './ui/Card';
import { contentCalendar } from '../data';
import { communicationStrategyIntro, adMessagingStrategy, industryFactsData, customerJourneyPlan } from '../communicationStrategyData';
import { ICONS } from '../constants';

const Pillar2Communication: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-2xl font-bold text-brick-red font-serif mb-4">{communicationStrategyIntro.title}</h3>
        <p className="text-text-secondary">{communicationStrategyIntro.description}</p>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-brick-red mb-4">Google and Meta Ad Messaging Strategy for EduvantX</h3>
        <div className="space-y-8">
          {adMessagingStrategy.map((strategy, index) => (
            <div key={index} className="bg-background p-4 rounded-lg border border-border">
              <h4 className="text-lg font-semibold text-text-primary mb-3">{strategy.icp}</h4>
              
              <div className="mb-4">
                <h5 className="font-bold text-text-secondary text-sm mb-2">Pain Points:</h5>
                <ul className="space-y-1">
                  {strategy.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start text-text-secondary text-sm">
                      {ICONS.list}<span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-dashed border-gray-300 p-3 rounded-md bg-white">
                    <h5 className="font-semibold text-text-primary mb-2">Google Ads:</h5>
                    <p className="font-bold text-sm">"{strategy.googleAds.headline}"</p>
                    <p className="text-text-secondary text-xs my-1">{strategy.googleAds.description}</p>
                    <p className="text-xs text-brick-red font-medium mt-2">CTA: {strategy.googleAds.cta}</p>
                    <p className="text-xs text-text-secondary mt-1"><span className="font-semibold">Targeting:</span> {strategy.googleAds.targeting}</p>
                </div>
                 <div className="border border-dashed border-gray-300 p-3 rounded-md bg-white">
                    <h5 className="font-semibold text-text-primary mb-2">Meta Ads (Facebook/Instagram):</h5>
                    <p className="font-bold text-sm">"{strategy.metaAds.headline}"</p>
                    <p className="text-text-secondary text-xs my-1">{strategy.metaAds.adText}</p>
                    <p className="text-xs text-brick-red font-medium mt-2">CTA: {strategy.metaAds.cta}</p>
                     <p className="text-xs text-text-secondary mt-1"><span className="font-semibold">Targeting:</span> {strategy.metaAds.targeting}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      <Card>
        <h3 className="text-xl font-bold text-brick-red mb-4">Industry Facts & Supporting Data</h3>
        <ul className="space-y-3">
          {industryFactsData.map((fact, index) => (
            <li key={index} className="flex items-start text-text-secondary">
              {ICONS.check}
              <span>
                {fact.fact} (<a href={fact.source} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">source</a>)
              </span>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-brick-red mb-4">Full Communication Strategy Plan for Customer Journey Touchpoints</h3>
        <div className="grid md:grid-cols-3 gap-6">
            {customerJourneyPlan.map((plan, index) => (
                <div key={index} className="bg-background p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-text-primary mb-3">{plan.stage}</h4>
                    <div>
                        <h5 className="font-bold text-text-secondary text-sm mb-2">Content Strategy:</h5>
                         <ul className="space-y-1 mb-4">
                            {plan.contentStrategy.map((point, i) => (
                                <li key={i} className="flex items-start text-text-secondary text-sm">
                                {ICONS.list}<span>{point}</span>
                                </li>
                            ))}
                        </ul>
                         <h5 className="font-bold text-text-secondary text-sm mb-2">Ad Type:</h5>
                         <p className="text-text-secondary text-sm">{plan.adType}</p>
                    </div>
                </div>
            ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-brick-red mb-4">Hero Hub Hygiene Content Calendar (LinkedIn)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-text-secondary">
            <thead className="text-xs text-text-primary uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">Content Type</th>
                <th scope="col" className="px-6 py-3">Description</th>
                <th scope="col" className="px-6 py-3">Frequency</th>
                <th scope="col" className="px-6 py-3">Target Objective</th>
              </tr>
            </thead>
            <tbody>
              {contentCalendar.map((item, index) => (
                <tr key={index} className="bg-card border-b border-border hover:bg-gray-50">
                  <td className={`px-6 py-4 font-bold ${item.type === 'Hero' ? 'text-brick-red' : item.type === 'Hub' ? 'text-text-primary' : 'text-text-secondary'}`}>{item.type}</td>
                  <td className="px-6 py-4">{item.description}</td>
                  <td className="px-6 py-4">{item.frequency}</td>
                  <td className="px-6 py-4">{item.objective}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Pillar2Communication;
