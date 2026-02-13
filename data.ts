
import { Objective, Competitor, AdCompetitor, ICP, SEOKeyword, SEOStrategy, ContentCalendarItem } from './types';

export const businessUnderstanding = {
  overview: "EduvantX offers educational and professional courses in partnership with international universities. These courses are designed to help individuals advance in their careers by acquiring valuable skills and certifications. The business operates in multiple geographies, including India, UAE, Saudi Arabia, the UK, and the US, targeting professionals who wish to further their education.",
  offerings: [
    {
      title: "Educational Courses",
      description: "These are specialized courses offered in collaboration with international universities. The courses cater to a wide range of industries and disciplines, primarily targeting working professionals who want to enhance their qualifications."
    },
    {
      title: "Professional Courses",
      description: "Courses aimed at career development, skill enhancement, and qualification upgrades. Includes both certifications and diplomas that can contribute to professional growth."
    }
  ],
  usps: [
    "International University Affiliation: Courses are provided in association with accredited international universities, which adds credibility and prestige to the certifications.",
    "Affordable Pricing: EduvantX offers competitive pricing, with course fees typically ranging between INR 1.5 lakh and INR 2 lakh. This is significantly lower than competitors, who charge around INR 3 lakh or more for similar programs.",
    "Scholarships and Financial Aid: EduvantX provides scholarship opportunities, which further make the courses affordable for a wider audience.",
    "Easy Completion Path: The courses are designed to be accessible and easy to complete, offering flexibility for working professionals.",
    "Accreditation from NAAC (National Assessment and Accreditation Council): EduvantX collaborates with Indian universities that are NAAC accredited, ensuring high-quality education and recognition for students."
  ],
  challenges: [
    "Lead Cost and Conversion Ratio: A major concern for EduvantX is the cost per lead (CPL) and the lead-to-conversion ratio. They aim to reduce the CPL while improving conversion rates for the courses."
  ],
  digitalNeeds: {
    focus: "Lead Generation: EduvantX is focusing on generating high-quality leads through digital marketing channels.",
    budget: "Monthly Budget: INR 1,50,000 to INR 2,00,000"
  }
};

export const keyObjectives: Objective[] = [
  {
    title: "Improve Lead Generation",
    objective: "Increase quality leads by 15-20% month-over-month, while reducing the CPL by 10% within the first 3 months.",
    tactics: ["Implement highly targeted ad campaigns on Google, Meta, and LinkedIn.", "Focus on retargeting users who have interacted with EduvantX content or visited the website but have not converted."]
  },
  {
    title: "Improve Lead Conversion",
    objective: "Improve the lead-to-conversion ratio by 10-15% by implementing better lead nurturing strategies.",
    tactics: ["Use email automation and CRM integrations to nurture leads with personalized content, offer scholarships, and emphasize EduvantX’s USP of affordability and flexibility."]
  },
  {
    title: "Brand Awareness",
    objective: "Increase EduvantX’s online brand awareness and visibility by focusing on content marketing (blogs, webinars, success stories) and SEO.",
    tactics: ["Focus on SEO optimization for EduvantX’s website to increase organic traffic, and run awareness campaigns on social platforms."]
  },
  {
    title: "Data-Driven Insights",
    objective: "Use data from campaigns to identify high-performing lead segments and optimize ad spends.",
    tactics: ["Implement tracking through Google Analytics and other tools to monitor CPL, conversion rates, and customer behavior."]
  }
];

export const competitors: Competitor[] = [
    { name: 'Aimlay', model: 'Global education/mentorship platform focused on doctorate guidance, admission support, academic mentoring, writing support, bachelor & master courses, thesis/dissertation services.', audience: 'Working professionals, researchers seeking higher degrees (PhD, Masters) and academic writing support.', usp: 'Personalized mentorship with experienced PhD mentors; accredited alliances; end‑to‑end academic support.', presence: 'Active social presence (LinkedIn, Facebook, Instagram). Likely runs lead gen ads due to services.', notes: 'Very research/degree completion‑oriented; global registrations & offices in India, USA and UAE.' },
    { name: 'EduMine', model: 'Online learning platform connecting professionals with Indian universities for degree programs (MBA, BBA/MCA/BCA etc.) across 70+ specializations.', audience: 'Working professionals in India (not strictly global but increasingly positioning for working learner upskilling).', usp: 'Strong alumni base (8,000+), partnerships with top‑ranked Indian universities.', presence: 'Active LinkedIn & social channels; SEO‑driven content & blogs.', notes: 'Focused on flexible degree programs within the Indian online market.' },
    { name: 'NextSkillEdge', model: 'Global admissions support + international program access; counseling, scholarships, admissions support, mentoring for degree and certification programs.', audience: 'Professionals/graduates aiming for international degrees & funding support; also offers data science, analytics certifications.', usp: 'End‑to‑end admission services + scholarship funding assistance; global network access.', presence: 'Likely runs paid campaigns for admissions/consultations; active online presence.', notes: 'Blends admissions consulting with course learning outcomes.' },
    { name: 'Simplilearn', model: 'Global online course provider offering certification programs, boot camps, and professional training across tech, business, analytics, AI/ML, digital marketing.', audience: 'Working professionals and enterprises; courses in high‑demand career skills.', usp: '400+ courses, university & institutional collaborations, blended learning model with hands‑on projects.', presence: 'Massive digital presence; likely high‑budget Google & LinkedIn ads globally and partnerships.', notes: 'Global scale with millions of learners (~2M+ learners across 150+ countries).' },
    { name: 'OpenClassrooms', model: 'European online education platform offering vocational training, mentoring, long‑term career paths, and some internationally recognized diploma programs.', audience: 'Learners seeking practical skills, real‑world projects, mentorship; also degree‑like learning paths.', usp: 'Mentored project‑based learning with real portfolios; freemium + premium learning paths.', presence: 'Digital ads likely present to drive enrolments (global operations, multilingual offerings).', notes: '~2.5M users worldwide; degrees and portfolio‑driven projects.' }
];

export const industryFacts = [
  "Online learning and professional upskilling demand continues to grow globally as companies invest in workforce reskilling. According to industry reports, the online education market is rapidly expanding with millions of learners engaging with MOOCs and professional certificates (e.g., platforms like Coursera, edX, etc.).",
  "University‑affiliated programs and certificates are gaining preference among working professionals seeking career impact over generic MOOCs.",
  "Many competitors (e.g., Simplilearn, Coursera) are publicly listed or venture‑backed with global ad budgets, unlike smaller boutique platforms."
];

export const adCompetitors: AdCompetitor[] = [
    { name: 'Simplilearn', content: ['Data careers now demand AI skills...', 'PMP Certification training', 'Generative AI courses', 'Transform Your Career with a Globally Recognized Certificate (AI and Data Analytics)', 'PMP Certification - Become certified in 5 weeks'], platform: 'LinkedIn, Google & Meta', highlights: ['Promoting exclusive masterclasses and certification programs like Data Analytics, AI, PMP.', 'Mentorship-focused ad messaging.', 'Focus on real-world projects and high industry demand for skills.', 'Certification from globally recognized institutions (IIT Kanpur).'], strategy: ['Targeting: Working professionals and businesses looking for industry‑recognized certifications.', 'Ad Type: Carousel Ads, Sponsored Content.', 'Focus on industry recognition (IIT, PMI) and real‑world projects.', 'Targeting: Data analytics and project management professionals looking for advanced certifications.', 'Ad Type: Sponsored Posts and Carousel Ads, offering a 100% money-back guarantee, mentorship. Emphasizing quick certification timelines.'] },
    { name: 'OpenClassrooms', content: ['Formation Product Manager', 'Formation Business Developer', 'Reconversion Gestion de projet'], platform: 'LinkedIn & Google', highlights: ['Focus on specific courses in product management and business development.', 'Certifications tied to career development.'], strategy: ['Targeting: Early to mid‑career professionals looking for certifications in specialized fields like project management and business development.', 'Ad Type: Sponsored posts promoting course offerings with calls-to-action (CTA) for sign-ups.'] },
    { name: 'Aimlay', content: ['Upgrade your Degree with MBA and MA courses', 'PhD Admissions Open', 'Honorary Doctorate Award', 'Fast-Track Your Research Publication with Aimlay'], platform: 'LinkedIn & Meta', highlights: ['Strong focus on degree programs (MBA, MA, PhD) and honorary doctorate.', 'Ad Type: Banner and sponsored posts.', 'Focus on fast-tracking PhD and research publications.', 'Assistance with applying to UGC-approved universities for PhD degrees.'], strategy: ['Targeting: Working professionals seeking to upgrade their qualifications.', 'Ad Messaging: Accessible certifications and PhD admissions without the need for relocation.', 'Ads highlight benefits of flexible study options.', 'Targeting: Individuals looking for advanced degrees or research support.', 'Ad Type: Banner and video ads highlighting ease of admission to PhD programs, research publication assistance, and flexible options for working professionals.'] },
    { name: 'Edumine', content: ['Mining Career Advancement Courses', 'Free Courses Available'], platform: 'Google', highlights: ['Focus on mining training programs, career growth through education.'], strategy: ['Targeting: Primarily industry professionals in the mining sector.', 'Ad Type: Display and download ads for free mining training courses, lead generation through course samples.'] }
];

export const adInsights = [
  "Focus on Industry-Relevant Skills: Competitors like Simplilearn and OpenClassrooms highlight their real-world project experience and industry-recognized credentials. EduvantX can emphasize its affordable, flexible certifications aligned with global industry demands.",
  "Use of Carousel and Sponsored Ads: Simplilearn uses carousel ads to showcase multiple certifications. EduvantX can adopt similar strategies to highlight its broad range of affordable courses and scholarships.",
  "Targeting Working Professionals & Businesses: Ads from Simplilearn and Aimlay target both individual professionals and corporate clients. EduvantX can tailor its ads to emphasize both individual career development and team-wide training solutions.",
  "Niche vs Broad Focus: Edumine specializes in mining training, using free courses as a lead magnet. EduvantX could consider offering introductory free webinars or sample courses in its key areas to drive engagement.",
  "Promoting Fast, Flexible Learning: Aimlay and Simplilearn emphasize quick certifications. EduvantX could focus on quick, flexible courses for busy professionals.",
  "Strong Calls to Action (CTA): Competitors use clear CTAs like 'Enroll Now'. EduvantX should ensure its ads feature strong CTAs with offers like scholarships or limited-time discounts.",
  "Highlighting Mentorship and Support: Simplilearn and Aimlay incorporate mentorship into their ads. EduvantX can leverage its personalized support to differentiate itself."
];

export const iframeSrc1 = "https://docs.google.com/presentation/d/e/2PACX-1vSkFfuVuRGofdzVch4MWxhcWZHUfPtJmty3V1cKUbLysXIi7eseJVlRN3Bi4EPtVxZUabSHytJapHLp/pubembed?start=true&loop=true&delayms=3000";


export const icps: ICP[] = [
    { title: '1. Working Professionals (27-45 years)', demographics: ['Age: 27-45 years', 'Job Title: Mid-level to senior professionals, business owners, and managers', "Education: Bachelor's degree or higher, with industry-specific specialization", 'Geography: India, UAE, Saudi Arabia, UK, US', 'Income: INR 5L to 20L annually'], triggers: ['Career Advancement: Desire to unlock higher-paying, leadership roles.', 'International Certification: Value for globally recognized credentials.', 'Flexible Learning: Preference for online learning that fits schedules.', 'Cost-Effective Solutions: Seeking affordable certification options.', 'Professional Development & Networking: Programs that provide industry connections and career benefits.'], painPoints: ['Time Constraints: Limited availability due to busy schedules.', 'High Course Fees: Expensive certifications are a barrier.', 'Uncertainty About ROI: Concerns over real-world career benefits.', 'Lack of Personalized Guidance: Generic, non-tailored support.'] },
    { title: '2. Business Owners & Entrepreneurs', demographics: ['Age: 35-50 years', 'Job Title: Founders, CEOs, SME Owners', 'Education: Business-related or technical background', 'Geography: India, UAE, Saudi Arabia, UK, US', 'Income: Higher income bracket, depending on business size'], triggers: ['Employee Skill Development: Focused on enhancing team performance.', 'ROI: Seeking cost-effective programs with clear business benefits.', 'Leadership & Management Skills: Interested in business management and strategy.', 'Global Recognition: Attracted to accredited programs.'], painPoints: ['Budget Constraints: Limited budget for training programs.', 'Scalability of Training: Difficulty finding programs that scale across teams.', 'Limited Time: Need flexible learning options.', 'Low Trust in Online Programs: Hesitation about quality and effectiveness.'] },
    { title: '3. Young Professionals (22-27 years)', demographics: ['Age: 22-27 years', 'Job Title: Entry-level professionals, job switchers', 'Education: College graduates, early career', 'Geography: India, UAE, Saudi Arabia, UK, US', 'Income: INR 3L - 7L annually'], triggers: ['Career Growth & Job Placement: Motivated by career opportunities.', 'CV Building: Seeking certifications to make their resume stand out.', 'Affordability: Price-sensitive, seeking cost-effective learning options.', 'Learning Flexibility: Desire for programs that fit into their busy, evolving career.'], painPoints: ['High Course Fees: Financial barriers to accessing quality education.', 'Lack of Awareness: Uncertainty about the best online education providers.', 'Limited Practical Experience: Desire for hands-on skills, not just theory.', 'Certification Value: Concerns about whether certifications will be recognized.'] },
    { title: '4. Corporate HRs & Decision Makers (B2B)', demographics: ['Age: 35-55 years', 'Job Title: HR Managers, Corporate Training Managers', "Education: Bachelor's or Master's in HR, Management", 'Geography: India, UAE, Saudi Arabia, UK, US'], triggers: ['Employee Development: Focus on improving employee performance through continuous learning.', 'Cost-Effective Solutions: Looking for bulk training programs that fit within budget.', 'Scalability: Need training solutions that scale to accommodate large teams.', 'Accredited Programs: Prefer internationally recognized certifications.', 'Improved Productivity & Retention: Aiming for increased efficiency and job satisfaction.'], painPoints: ['Finding Scalable Solutions: Difficulty scaling training across a large organization.', 'Unclear ROI from Training: Hard to measure training effectiveness and business outcomes.', 'Limited Resources: Limited internal capacity to manage training programs.', 'Lack of Flexibility: Programs that are not adaptable to modern hybrid workforces.'] }
];

export const iframeSrc2 = "https://docs.google.com/presentation/d/e/2PACX-1vTh7OVgmB6Ezd01_b0kTXc3LcuKMn6-6oHI7kxG6ZeWtgUGo46ta_qpU7K82Bec3l2ozobkYq4f24jZ/pubembed?start=true&loop=true&delayms=3000";

export const contentCalendar: ContentCalendarItem[] = [
    { type: 'Hero', description: 'Major thought-leadership articles or success stories like "How EduvantX Transformed My Career" or "How to Upskill and Lead in 2025"', frequency: 'Weekly', objective: 'Drive brand awareness and build trust with professionals.' },
    { type: 'Hub', description: 'Case studies, interviews with alumni, key achievements like scholarships or global university partnerships', frequency: '2-3 posts per week', objective: 'Establish authority and engagement around EduvantX’s core offerings.' },
    { type: 'Hygiene', description: 'FAQs, course descriptions, testimonials, tips, and educational facts', frequency: '1-2 posts daily', objective: 'Maintain consistent engagement and direct traffic to EduvantX’s website.' }
];

export const pillar1ReachData = {
  seo: {
    india: {
      title: "SEO Strategy for EduvantX in India",
      introduction: "Based on the keyword statistics and analysis from EduvantX’s target audience in India, here’s a tailored SEO strategy to enhance brand awareness and improve online visibility.",
      benchmark: {
        title: "Industry Benchmark and Keyword Insights",
        intro: "From the Keyword Stats EduvantX document, we identified critical information related to search volume, competition, and ad impressions for relevant keywords in the online education space in India.",
        highVolume: [
          { keyword: "Online MBA", searches: "18,100", competition: "high" },
          { keyword: "Online courses", searches: "22,200", competition: "medium" },
          { keyword: "Online professional course", searches: "210", competition: "high" },
          { keyword: "Career consultation", searches: "1,600", competition: "low" },
        ],
        growth: [
          { keyword: "Doctorate programs online", searches: "320", competition: "high" },
          { keyword: "Online management program", searches: "10", competition: "high" },
          { keyword: "MBA distance learning", searches: "4,400", competition: "high" },
        ]
      },
      focusAreas: {
        title: "Focus Areas",
        onPage: {
          title: "A. On-Page SEO Optimization",
          points: [
            "Meta Tags and Descriptions: Optimize the title tags and meta descriptions with target keywords such as \"affordable online MBA,\" \"online professional training,\" \"best online business programs,\" and \"internationally recognized online courses.\"",
            "Content Optimization: Use the identified high-volume and low-competition keywords throughout EduvantX’s website, focusing on landing pages, course descriptions, and FAQs.",
            "User Experience (UX): Improve site navigation and structure to ensure a better user experience, as Google values websites with good UX and navigation. Ensure all pages load quickly on both desktop and mobile devices."
          ]
        },
        keywordStrategy: {
          title: "B. Keyword Strategy",
          points: [
            "Long-Tail Keywords: Focus on long-tail keywords like \"best online MBA programs for working professionals\" or \"affordable online doctorate programs.\" This will help target a more specific audience with a higher intent to enroll.",
            "Geo-targeted Keywords: Include region-specific keywords for countries like India, UAE, and the US, such as “online MBA programs India,” “online business degree in India,” and “career consultation services in UAE.”",
            "Content Creation Around Keywords: Develop blog posts and resources that answer specific queries such as \"Why choose an online MBA from an accredited university\" and \"How to get a professional certificate online.\" Use these keywords in blog headers and body content."
          ]
        },
        offPage: {
          title: "C. Off-Page SEO & Backlink Strategy",
          points: [
            "Link Building: Focus on acquiring backlinks from high-authority education websites, government websites, and industry-related blogs. EduvantX can collaborate with universities or educational blogs to feature course offerings, increasing referral traffic and backlinks.",
            "Influencer Collaborations: Partner with educational influencers and bloggers in India and target countries to enhance brand credibility and link to EduvantX’s courses."
          ]
        }
      },
      localSeo: {
        title: "Local SEO Optimization",
        points: [
          "Google My Business (GMB): Set up or optimize the EduvantX GMB profile for localized search in India. This will help boost local visibility for geo-targeted search terms.",
          "Local Reviews & Testimonials: Encourage students to leave reviews and testimonials on EduvantX’s Google profile, social media, and education portals like Shiksha and CollegeDunia."
        ]
      },
      contentMarketing: {
        title: "Content Marketing for SEO",
        points: [
          "Blog & Resource Center: EduvantX should regularly publish blogs targeting educational upskilling, career guidance, and online learning advantages. The content should focus on the identified keyword opportunities like \"How an online MBA can transform your career\" or \"Affordable online doctorate programs.\"",
          "Video Content: Considering the growing popularity of video content in education, EduvantX should create educational videos showcasing course highlights, student testimonials, and faculty introductions. These can be shared on YouTube and embedded on the website to boost organic traffic."
        ]
      },
      technicalSeo: {
        title: "Technical SEO",
        points: [
          "Site Speed & Mobile Optimization: Ensure the website’s speed is optimized, especially for mobile users (since EduvantX targets regions with high mobile device usage). A mobile-friendly website boosts rankings and user engagement.",
          "Structured Data (Schema Markup): Implement structured data for course offerings to help search engines understand and display course details in search results."
        ]
      },
      kpis: {
        title: "KPI and Metrics to Measure SEO Success",
        points: [
          "Organic Traffic Growth: Aim to increase organic traffic by 30% over the next 6 months by targeting high-volume keywords.",
          "Keyword Rankings: Track rankings for target keywords like “online MBA India,” “online professional courses,” and “best online courses” across SERPs in India and international markets.",
          "Backlink Growth: Monitor the number of quality backlinks EduvantX gains monthly, aiming for a 10-15% increase in authoritative backlinks every quarter."
        ]
      }
    },
    uae: {
        title: "SEO Strategy for UAE",
        analysis: { title: "Keyword Analysis", points: ["High-Volume Keywords: Keywords like \"online MBA\" (480 searches/month), \"online courses\" (720 searches/month), and \"online management program\" have significant search volume and high competition.", "Opportunities for Niche Keywords: Terms like \"online doctoral programs\" (390 searches/month) and \"online IT program\" have steady search volume and could be optimized to reach a focused audience.", "Low-Competition Opportunities: Keywords such as \"online professional training\" (10 searches/month) and \"programs online\" (10 searches/month) present opportunities for targeted content with less competitive bids."] },
        competitor: { title: "Competitor Insights", points: ["Competition: Competitors like Aimlay, Edumine, and Nextskilledge use keywords with high competition. Targeting long-tail, niche keywords such as \"bachelor online programs\" and \"online masters education\" can help capture segments with less competition but still strong intent.", "Ad Bids: The bids for high-competition keywords (e.g., \"online MBA\") range from 360 to 1332 AED. Eduvantx could target less competitive terms to reduce cost-per-click (CPC) and improve ROI."] },
        onPage: { title: "On-Page SEO", points: ["Optimize for high-search, low-competition keywords, targeting UAE's audience with localized content (e.g., \"online MBA programs in UAE\" or \"accredited online MBA programs for UAE professionals\").", "Use schema markup to highlight course offerings, testimonials, and scholarships to improve visibility in search engines and enhance click-through rates (CTR)."] },
        content: { title: "Content Strategy", points: ["Develop content around professional qualifications, certifications, and career growth, which are key motivations for working professionals in the UAE.", "Focus on course affordability (compared to competitors) and the scholarship offerings to cater to UAE's cost-conscious audience."] },
        local: { title: "Local SEO", points: ["Ensure Eduvantx has a strong presence in local search by optimizing for location-based keywords and creating content in Arabic (in addition to English) to target a broader demographic."] }
    },
    uk: {
        title: "SEO Strategy for UK",
        analysis: { title: "Keyword Analysis", points: ["High-Volume Keywords: \"Online business degree\" (390 searches/month) and \"online MBA programs\" (260 searches/month) are important keywords for Eduvantx to target.", "Opportunities for Niche Keywords: Long-tail keywords such as \"top online MBA schools\" (170 searches/month) and \"online master's degree in business management\" (110 searches/month) can attract focused traffic.", "Seasonality: Keywords like \"online master's programs\" and \"online courses\" see consistent interest, while others like \"online PhD programs\" have periodic interest spikes, indicating seasonality."] },
        competitor: { title: "Competitor Insights", points: ["Competition: Competitors like Aimlay, Edumine, and Nextskilledge focus on high-competition keywords like \"online MBA programs\" and \"online business administration degrees.\" Eduvantx should optimize for both broad and long-tail keywords to carve a niche in the UK market.", "Ad Bids: Bid prices range between £1.75 and £4.99, which is competitive but manageable for targeting keywords with high intent but lower competition."] },
        onPage: { title: "On-Page SEO", points: ["Course-Specific Content: Use SEO to target terms such as \"UK online business degrees,\" \"accredited online MBA in the UK,\" and \"online MBA for professionals in the UK.\"", "Geographic Targeting: Optimize Eduvantx’s landing pages for specific UK cities or regions to attract search traffic from localized markets."] },
        content: { title: "Content Strategy", points: ["Develop guides, success stories, and case studies from students in the UK who have completed Eduvantx’s online courses. This will resonate with prospective students and increase trust.", "Emphasize \"cost-effective education\" and \"accelerated programs\" as the value proposition, compared to higher-priced options in the UK market."] },
        local: { title: "Local SEO", points: ["Utilize Google My Business (GMB) to enhance local visibility in the UK and ensure that Eduvantx’s course offerings are listed on local educational directories.", "Focus on UK-centric content that showcases the affordability and flexibility of Eduvantx’s online programs in comparison to local universities and competitors."] }
    }
  },
  socialMedia: {
    title: "2. Social Media & LinkedIn",
    intro: "LinkedIn will be the primary platform for EduvantX as it targets professionals, corporate HRs, and business owners.",
    points: [
        { title: "Engagement", text: "Publish relevant industry trends, success stories, certification case studies, and scholarship announcements to build credibility." },
        { title: "Lead Generation", text: "Create LinkedIn lead gen forms with specific course promotions or free consultations." },
        { title: "Personalized Outreach", text: "Sponsor posts offering career guidance, certification details, and career progression tools." },
        { title: "Retargeting Ads", text: "Use LinkedIn to retarget individuals who’ve interacted with EduvantX’s page or past ads." }
    ]
  },
  googleMetaAds: {
      title: "3. Google Ads & Meta Ads (Lead Generation)",
      intro: "Lead Generation Ads on Google & Meta:",
      points: [
          "Use targeted keywords such as “online certification for professionals”, “affordable online MBA”, and “internationally recognized certification programs”.",
          "Focus on high-conversion keywords and retargeting people who have visited the site but did not convert.",
          "Dynamic Ads: Target audience segments with dynamic creatives based on their past behavior (e.g., those who have shown interest in business management programs or online certifications)."
      ]
  },
  contentMarketing: {
      title: "4. Content Marketing (Inbound Tactic)",
      points: [
        { title: "Blog Posts", text: "Focus on SEO-optimized blog posts addressing: Career development, Industry-specific skills, Success stories of professionals, and Benefits of flexible learning." },
        { title: "Whitepapers/Case Studies", text: "Showcase EduvantX’s global partnerships with universities and scholarship opportunities to build authority in the field." }
      ]
  },
  brandBuilding: {
      title: "5. Brand Building (USPs & Achievements)",
      intro: "Highlight EduvantX’s Unique Selling Points (USPs) across platforms, including:",
      points: [
          "Affordability & Flexibility: Emphasize cost-effective certifications, lower than competitors like Aimlay and Simplilearn.",
          "Scholarships and Financial Aid: Showcase exclusive scholarships to attract working professionals who may be concerned about course fees.",
          "Internationally Recognized Certifications: Reinforce EduvantX’s partnerships with accredited institutions and global recognition."
      ]
  }
};
