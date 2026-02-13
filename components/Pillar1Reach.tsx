
import React, { useState } from 'react';
import Card from './ui/Card';
import { iframeSrc2, pillar1ReachData } from '../data';
import { ICONS } from '../constants';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle }) => (
    <div className="border-b border-border last:border-b-0">
        <button
            onClick={onToggle}
            className="w-full text-left flex justify-between items-center py-4 px-2 hover:bg-gray-50 transition-colors duration-200"
            aria-expanded={isOpen}
        >
            <span className="text-lg font-semibold text-text-primary">{title}</span>
            <ChevronDownIcon className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="p-4 bg-gray-50/50 rounded-b-md">
                {children}
            </div>
        </div>
    </div>
);

const Section: React.FC<{title: string, points: string[]}> = ({title, points}) => (
    <div className="mb-4">
        <h4 className="font-semibold text-text-primary text-md mb-2">{title}</h4>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="flex items-start text-text-secondary text-sm">
                    {ICONS.list}
                    <span>{point}</span>
                </li>
            ))}
        </ul>
    </div>
);


const Pillar1Reach: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>('india');

    const handleAccordionToggle = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    const { seo, socialMedia, googleMetaAds, contentMarketing, brandBuilding } = pillar1ReachData;
    const { india, uae, uk } = seo;

    return (
        <div className="space-y-6">
            <Card>
                <h3 className="text-xl font-bold text-brick-red mb-2">1. SEO Strategy</h3>
                <p className="text-text-secondary mb-4">A comprehensive, multi-regional SEO strategy to enhance brand awareness and improve online visibility, focusing on high-volume keywords, long-tail opportunities, and local optimization.</p>
                
                <div className="border border-border rounded-lg">
                    <AccordionItem title={india.title} isOpen={openAccordion === 'india'} onToggle={() => handleAccordionToggle('india')}>
                       <p className="text-text-secondary mb-4 text-sm">{india.introduction}</p>
                       <div className="space-y-4">
                            <div>
                               <h4 className="font-semibold text-text-primary text-md mb-2">{india.benchmark.title}</h4>
                               <p className="text-text-secondary mb-3 text-sm">{india.benchmark.intro}</p>
                               <h5 className="font-medium text-text-primary mb-2">High-Volume Keywords:</h5>
                               <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left text-text-secondary mb-4">
                                    <thead className="text-xs text-text-primary uppercase bg-gray-100"><tr className="border-b border-border">
                                        <th scope="col" className="px-4 py-2">Keyword</th><th scope="col" className="px-4 py-2">Avg. Monthly Searches</th><th scope="col" className="px-4 py-2">Competition</th></tr></thead>
                                    <tbody>{india.benchmark.highVolume.map(kw => <tr key={kw.keyword} className="hover:bg-gray-50"><td className="px-4 py-2">{kw.keyword}</td><td className="px-4 py-2">{kw.searches}</td><td className="px-4 py-2 capitalize">{kw.competition}</td></tr>)}</tbody>
                                </table>
                               </div>
                               <h5 className="font-medium text-text-primary mb-2">Keywords with Opportunity for Growth:</h5>
                               <div className="overflow-x-auto">
                               <table className="w-full text-sm text-left text-text-secondary">
                                    <thead className="text-xs text-text-primary uppercase bg-gray-100"><tr className="border-b border-border">
                                        <th scope="col" className="px-4 py-2">Keyword</th><th scope="col" className="px-4 py-2">Avg. Monthly Searches</th><th scope="col" className="px-4 py-2">Competition</th></tr></thead>
                                    <tbody>{india.benchmark.growth.map(kw => <tr key={kw.keyword} className="hover:bg-gray-50"><td className="px-4 py-2">{kw.keyword}</td><td className="px-4 py-2">{kw.searches}</td><td className="px-4 py-2 capitalize">{kw.competition}</td></tr>)}</tbody>
                                </table>
                               </div>
                            </div>
                            <Section title={india.focusAreas.onPage.title} points={india.focusAreas.onPage.points} />
                            <Section title={india.focusAreas.keywordStrategy.title} points={india.focusAreas.keywordStrategy.points} />
                            <Section title={india.focusAreas.offPage.title} points={india.focusAreas.offPage.points} />
                            <Section title={india.localSeo.title} points={india.localSeo.points} />
                            <Section title={india.contentMarketing.title} points={india.contentMarketing.points} />
                            <Section title={india.technicalSeo.title} points={india.technicalSeo.points} />
                            <Section title={india.kpis.title} points={india.kpis.points} />
                       </div>
                    </AccordionItem>
                    <AccordionItem title={uae.title} isOpen={openAccordion === 'uae'} onToggle={() => handleAccordionToggle('uae')}>
                        <div className="space-y-4">
                            <Section title={uae.analysis.title} points={uae.analysis.points} />
                            <Section title={uae.competitor.title} points={uae.competitor.points} />
                            <Section title={uae.onPage.title} points={uae.onPage.points} />
                            <Section title={uae.content.title} points={uae.content.points} />
                            <Section title={uae.local.title} points={uae.local.points} />
                        </div>
                    </AccordionItem>
                    <AccordionItem title={uk.title} isOpen={openAccordion === 'uk'} onToggle={() => handleAccordionToggle('uk')}>
                         <div className="space-y-4">
                            <Section title={uk.analysis.title} points={uk.analysis.points} />
                            <Section title={uk.competitor.title} points={uk.competitor.points} />
                            <Section title={uk.onPage.title} points={uk.onPage.points} />
                            <Section title={uk.content.title} points={uk.content.points} />
                            <Section title={uk.local.title} points={uk.local.points} />
                        </div>
                    </AccordionItem>
                </div>
            </Card>

            <Card>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe src={iframeSrc2} frameBorder="0" width="100%" height="569" allowFullScreen={true} className="w-full h-[300px] md:h-[569px] rounded-lg border-2 border-border"></iframe>
                </div>
            </Card>

            <Card>
                <h3 className="text-xl font-bold text-brick-red mb-2">{socialMedia.title}</h3>
                <p className="text-text-secondary mb-4">{socialMedia.intro}</p>
                <div className="space-y-3">
                    {socialMedia.points.map((point, index) => (
                        <div key={index}>
                           <h4 className="font-semibold text-text-primary flex items-center">{ICONS.check} {point.title}</h4>
                           <p className="text-text-secondary text-sm pl-7">{point.text}</p>
                        </div>
                    ))}
                </div>
            </Card>

            <Card>
                <h3 className="text-xl font-bold text-brick-red mb-2">{googleMetaAds.title}</h3>
                <h4 className="font-semibold text-text-primary mb-3">{googleMetaAds.intro}</h4>
                <ul className="space-y-2">
                    {googleMetaAds.points.map((point, index) => (
                        <li key={index} className="flex items-start text-text-secondary">
                            {ICONS.list}<span>{point}</span>
                        </li>
                    ))}
                </ul>
            </Card>

            <Card>
                <h3 className="text-xl font-bold text-brick-red mb-2">{contentMarketing.title}</h3>
                <div className="space-y-3 mt-4">
                    {contentMarketing.points.map((point, index) => (
                         <div key={index}>
                           <h4 className="font-semibold text-text-primary flex items-center">{ICONS.check} {point.title}</h4>
                           <p className="text-text-secondary text-sm pl-7">{point.text}</p>
                        </div>
                    ))}
                </div>
            </Card>
            
            <Card>
                <h3 className="text-xl font-bold text-brick-red mb-2">{brandBuilding.title}</h3>
                <p className="text-text-secondary mb-4">{brandBuilding.intro}</p>
                <ul className="space-y-2">
                    {brandBuilding.points.map((point, index) => (
                        <li key={index} className="flex items-start text-text-secondary">
                            {ICONS.list}<span>{point}</span>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default Pillar1Reach;