
import React from 'react';
import Card from './ui/Card';
import { ICONS } from '../constants';
import { landingPageWireframe, iframeSrc } from '../landingPageWireframeData';

const WireframeSection: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
    <div className={`bg-background p-4 rounded-lg border border-border ${className}`}>
        <h4 className="text-lg font-bold text-brick-red font-serif mb-3">{title}</h4>
        <div className="space-y-3 text-text-secondary text-sm">
            {children}
        </div>
    </div>
);

const Pillar3Infrastructure: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-2xl font-bold text-brick-red font-serif mb-4">Landing Page Wireframe for EduvantX</h3>
        <p className="text-text-secondary mb-6">This wireframe layout is designed to optimize for lead generation while addressing pain points and offering value propositions at every stage. The landing page has clear CTAs, trust signals, and engaging content to guide visitors toward conversion, with a user-friendly and mobile-responsive design.</p>
        
        <div className="space-y-6">
            <WireframeSection title="Header Section">
                <p><span className="font-semibold text-text-primary">Logo:</span> {landingPageWireframe.header.logo}</p>
                <div>
                    <p className="font-semibold text-text-primary">Navigation Bar:</p>
                    <ul className="list-disc list-inside ml-4">
                        {landingPageWireframe.header.navBar.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
                <p><span className="font-semibold text-text-primary">Primary Call to Action (CTA):</span> {landingPageWireframe.header.primaryCTA}</p>
                <p><span className="font-semibold text-text-primary">Secondary CTA:</span> {landingPageWireframe.header.secondaryCTA}</p>
            </WireframeSection>
            
            <WireframeSection title="Hero Section">
                <p><span className="font-semibold text-text-primary">Headline:</span> "{landingPageWireframe.hero.headline}"</p>
                <p><span className="font-semibold text-text-primary">Subheadline:</span> "{landingPageWireframe.hero.subheadline}"</p>
                <p><span className="font-semibold text-text-primary">Hero Image:</span> {landingPageWireframe.hero.heroImage}</p>
                <div>
                    <p className="font-semibold text-text-primary">CTA Buttons:</p>
                     <ul className="list-disc list-inside ml-4">
                        {landingPageWireframe.hero.ctaButtons.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </WireframeSection>

            <WireframeSection title={landingPageWireframe.section1.title}>
                <div>
                    <p className="font-semibold text-text-primary mb-2">Course Cards:</p>
                    <div className="grid md:grid-cols-3 gap-3">
                        {landingPageWireframe.section1.courses.map(course => (
                            <div key={course.name} className="bg-white p-3 border border-dashed rounded-md">
                                <p className="font-bold">{course.name}</p>
                                <p className="text-xs">{course.details}</p>
                                <p className="text-accent-blue text-xs font-semibold mt-1">“Learn More” CTA</p>
                            </div>
                        ))}
                    </div>
                </div>
                 <div>
                    <p className="font-semibold text-text-primary">Key Benefits:</p>
                     <ul className="list-disc list-inside ml-4">
                        {landingPageWireframe.section1.keyBenefits.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </WireframeSection>

            <WireframeSection title={landingPageWireframe.section2.title}>
                <p><span className="font-semibold text-text-primary">Text:</span> "{landingPageWireframe.section2.text}"</p>
                <div>
                    <p className="font-semibold text-text-primary">Bullet Points:</p>
                    <ul className="list-disc list-inside ml-4">
                        {landingPageWireframe.section2.bulletPoints.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
                <p><span className="font-semibold text-text-primary">Image:</span> {landingPageWireframe.section2.image}</p>
            </WireframeSection>

            <WireframeSection title={landingPageWireframe.section3.title}>
                 <div>
                    <p className="font-semibold text-text-primary">Carousel of Student Testimonials:</p>
                    <ul className="list-disc list-inside ml-4">
                        {landingPageWireframe.section3.testimonials.map(item => <li key={item}>"{item}"</li>)}
                    </ul>
                </div>
                 <div>
                    <p className="font-semibold text-text-primary">Trust Logos:</p>
                    <ul className="list-disc list-inside ml-4">
                        {landingPageWireframe.section3.trustLogos.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </WireframeSection>
            
            <WireframeSection title={landingPageWireframe.section4.title}>
                 <div>
                    <p className="font-semibold text-text-primary">3-Step Process:</p>
                    <ul className="list-decimal list-inside ml-4 space-y-1">
                        {landingPageWireframe.section4.steps.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </WireframeSection>

             <WireframeSection title={landingPageWireframe.section5.title}>
                 <div>
                    <p className="font-semibold text-text-primary">Statistics:</p>
                    <ul className="list-disc list-inside ml-4">
                        {landingPageWireframe.section5.stats.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
                <p><span className="font-semibold text-text-primary">Visual Representation:</span> {landingPageWireframe.section5.visual}</p>
            </WireframeSection>

            <WireframeSection title={landingPageWireframe.section6.title}>
                <p><span className="font-semibold text-text-primary">Headline:</span> "{landingPageWireframe.section6.headline}"</p>
                 <div>
                    <p className="font-semibold text-text-primary">CTA:</p>
                    <ul className="list-disc list-inside ml-4">
                        {landingPageWireframe.section6.cta.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
                 <p><span className="font-semibold text-text-primary">Contact Information:</span> {landingPageWireframe.section6.contact}</p>
            </WireframeSection>
            
            <WireframeSection title="Footer Section">
                <div>
                    <p className="font-semibold text-text-primary">Quick Links:</p>
                    <p className="ml-4">{landingPageWireframe.footer.quickLinks.join(" | ")}</p>
                </div>
                 <div>
                    <p className="font-semibold text-text-primary">Social Media Icons:</p>
                    <p className="ml-4">{landingPageWireframe.footer.socials}</p>
                </div>
                 <div>
                    <p className="font-semibold text-text-primary">Trust Signals:</p>
                    <ul className="list-disc list-inside ml-4">
                        {landingPageWireframe.footer.trustSignals.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </WireframeSection>
            
            <WireframeSection title={landingPageWireframe.designConsiderations.title}>
                 <ul className="list-disc list-inside ml-4 space-y-1">
                    {landingPageWireframe.designConsiderations.points.map(item => <li key={item}>{item}</li>)}
                </ul>
            </WireframeSection>

        </div>
      </Card>
      
      <Card>
         <h3 className="text-xl font-bold text-brick-red mb-4">Landing Page Wireframe-</h3>
         <div className="w-full overflow-x-auto">
            <iframe src={iframeSrc} frameBorder="0" width="960" height="569" allowFullScreen={true} className="rounded-lg border-2 border-border mx-auto block"></iframe>
         </div>
      </Card>
    </div>
  );
};

export default Pillar3Infrastructure;
