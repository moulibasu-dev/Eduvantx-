
import React from 'react';
import Card from './ui/Card';

const kpis = [
  { category: "Lead Generation Metrics", items: ["Leads per month through Google and Meta ads.", "Lead-to-Conversion Rate: % of leads that sign up for a course."] },
  { category: "Website Traffic", items: ["Organic traffic from SEO, paid traffic from ads, and content marketing."] },
  { category: "Engagement", items: ["Engagement on LinkedIn posts, blog interactions, social shares, etc."] },
  { category: "Cost Metrics", items: ["CPC and CTR for paid ads.", "Cost per Lead (CPL) across Google & Meta ads."] },
];

const Pillar4KPIs: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-xl font-bold text-brick-red mb-4">Key Performance Indicators (KPIs)</h3>
        <div className="grid md:grid-cols-2 gap-6">
            {kpis.map((kpi, index) => (
                <div key={index} className="bg-background p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-text-primary mb-2">{kpi.category}</h4>
                    <ul className="list-disc list-inside text-text-secondary text-sm space-y-1">
                        {kpi.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            ))}
        </div>
      </Card>
      <Card>
        <h3 className="text-xl font-bold text-brick-red mb-4">Media Estimates</h3>
        <div className="w-full overflow-x-auto border-2 border-border rounded-lg">
          <iframe 
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSOr8hfVT6sCRTkTKLYVN4iUuy49BPB8BKjXqNAL7uxniUt_ZI2L5oJYynZZKcQ49VHL2HEfh-zCCBU/pubhtml?widget=true&amp;headers=false"
            className="w-full h-[500px]"
            frameBorder="0"
          ></iframe>
        </div>
      </Card>
    </div>
  );
};

export default Pillar4KPIs;
