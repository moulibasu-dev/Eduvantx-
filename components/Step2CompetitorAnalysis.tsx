
import React from 'react';
import Card from './ui/Card';
import { competitors, industryFacts, adCompetitors, adInsights, iframeSrc1 } from '../data';
import { ICONS } from '../constants';

const Step2CompetitorAnalysis: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card>
        <h2 className="text-2xl font-bold text-brick-red font-serif mb-4">Competitor & Industry Analysis</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-text-secondary">
            <thead className="text-xs text-text-primary uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">Competitor</th>
                <th scope="col" className="px-6 py-3">Business Model & Offerings</th>
                <th scope="col" className="px-6 py-3">Target Audience & Focus</th>
                <th scope="col" className="px-6 py-3">Differentiators / USP</th>
                <th scope="col" className="px-6 py-3">Digital / Ads Presence</th>
                <th scope="col" className="px-6 py-3">Notes / Scale Indicators</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, index) => (
                <tr key={index} className="bg-card border-b border-border hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-text-primary whitespace-nowrap">{c.name}</td>
                  <td className="px-6 py-4">{c.model}</td>
                  <td className="px-6 py-4">{c.audience}</td>
                  <td className="px-6 py-4">{c.usp}</td>
                  <td className="px-6 py-4">{c.presence}</td>
                  <td className="px-6 py-4">{c.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold text-brick-red font-serif mb-3">Key Industry Facts</h3>
        <ul className="space-y-2">
          {industryFacts.map((fact, index) => (
            <li key={index} className="flex items-start text-text-secondary">
              {ICONS.list}
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </Card>
      
      <Card>
        <h2 className="text-2xl font-bold text-brick-red font-serif mb-4">Ad Analysis for Competitors</h2>
         <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-text-secondary">
            <thead className="text-xs text-text-primary uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">Competitor</th>
                <th scope="col" className="px-6 py-3">Ad Content/Type</th>
                <th scope="col" className="px-6 py-3">Platform</th>
                <th scope="col" className="px-6 py-3">Key Highlights</th>
                <th scope="col" className="px-6 py-3">Ad Strategy / Targeting</th>
              </tr>
            </thead>
            <tbody>
              {adCompetitors.map((c, index) => (
                <tr key={index} className="bg-card border-b border-border hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-text-primary">{c.name}</td>
                  <td className="px-6 py-4"><ul>{c.content.map(i => <li key={i}>- {i}</li>)}</ul></td>
                  <td className="px-6 py-4">{c.platform}</td>
                  <td className="px-6 py-4"><ul>{c.highlights.map(i => <li key={i}>- {i}</li>)}</ul></td>
                  <td className="px-6 py-4"><ul>{c.strategy.map(i => <li key={i}>- {i}</li>)}</ul></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      
      <Card>
        <h3 className="text-xl font-semibold text-brick-red font-serif mb-3">Key Insights for EduvantX</h3>
        <ul className="space-y-3">
          {adInsights.map((insight, index) => (
            <li key={index} className="flex items-start text-text-secondary">
                {ICONS.check}
                <span>{insight}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <div className="aspect-w-16 aspect-h-9">
            <iframe src={iframeSrc1} width="100%" height="569" allowFullScreen={true} className="w-full h-[300px] md:h-[569px] rounded-lg border-2 border-border"></iframe>
        </div>
      </Card>

    </div>
  );
};

export default Step2CompetitorAnalysis;