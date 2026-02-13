
export const communicationStrategyIntro = {
  title: "Comprehensive Communication Strategy for EduvantX",
  description: "In this final communication strategy for EduvantX, we will focus on ad messaging for Google and Meta (Facebook/Instagram) platforms, tailored to ideal customer personas (ICPs). We will incorporate industry facts with hyperlinks to support our approach and build a thorough plan. This strategy will address the pain points and motivations of each persona and ensure consistent brand messaging that aligns with EduvantX’s USPs (affordable, flexible, internationally recognized certifications).",
};

export const adMessagingStrategy = [
  {
    icp: "Working Professionals (27-45 years)",
    painPoints: [
      "Lack of time for traditional education.",
      "High course fees in traditional educational settings.",
      "Uncertainty about the return on investment (ROI) from certification courses."
    ],
    googleAds: {
      headline: "Advance Your Career with Flexible Online Certifications!",
      description: "Affordable online courses tailored for busy professionals. Get globally recognized certifications in business management, data analytics, and more!",
      cta: "\"Learn More\" or \"Start Your Journey Today\"",
      targeting: "Focus on keywords like \"affordable online certification,\" \"online MBA for professionals,\" and \"certified courses for career advancement.\""
    },
    metaAds: {
      adText: "Upgrade your career without quitting your job! Flexible, affordable online courses from accredited global universities. Scholarships available.",
      headline: "Flexible Online Certifications for Working Professionals.",
      cta: "\"Apply Now\" or \"Request a Free Consultation.\"",
      targeting: "Target working professionals in industries like business management, marketing, and data analytics using job titles and interests."
    }
  },
   {
    icp: "Business Owners & Entrepreneurs (35-50 years)",
    painPoints: [
        "Concern about ROI from employee development programs.",
        "Need for affordable, scalable training for teams.",
        "Difficulty finding relevant certifications with a tangible business impact."
    ],
    googleAds: {
      headline: "Invest in Your Team's Growth with Affordable Certifications.",
      description: "Provide your employees with globally recognized certifications in business management, leadership, and data science. Flexible learning at affordable prices.",
      cta: "\"Get Started Today\"",
      targeting: "Use keywords like \"employee training programs,\" \"business skills certification,\" and \"affordable employee development.\""
    },
    metaAds: {
      adText: "Empower your team with career-transforming certifications. Affordable, flexible courses designed for busy professionals. Increase your team's productivity!",
      headline: "Affordable Employee Training Solutions.",
      cta: "\"Learn More\" or \"Schedule a Free Demo.\"",
      targeting: "Business owners or HR professionals using job titles like Founder, CEO, HR Manager, Training Manager."
    }
  },
  {
    icp: "Young Professionals (22-27 years)",
    painPoints: [
        "High cost of traditional education.",
        "Uncertainty around which certifications hold real value.",
        "Desire for career advancement but limited budget."
    ],
    googleAds: {
      headline: "Launch Your Career with Affordable Online Certifications!",
      description: "Start building your future today with flexible, affordable online courses. Get recognized certifications in marketing, business, and more!",
      cta: "\"Explore Courses\"",
      targeting: "Use keywords such as \"affordable online courses,\" \"certifications for entry-level jobs,\" and \"online learning for young professionals.\""
    },
    metaAds: {
      adText: "Your career upgrade starts here! Flexible, affordable online certifications in business, data analytics, and more. Start your path to success!",
      headline: "Build a Strong CV with Affordable Online Certifications.",
      cta: "\"Sign Up Now\"",
      targeting: "Target early career professionals and graduates using job titles like Entry-level, Junior Analyst, Marketing Associate, and Business Development Representative."
    }
  },
  {
    icp: "HR Managers & Corporate Decision Makers (B2B)",
    painPoints: [
        "Difficulty in finding scalable, affordable corporate training solutions.",
        "Need to prove ROI from employee training programs.",
        "Limited resources for managing and scaling employee education."
    ],
    googleAds: {
      headline: "Scalable, Affordable Employee Training Solutions.",
      description: "Train your entire team with flexible, affordable online courses. Boost productivity and employee satisfaction with globally recognized certifications.",
      cta: "\"Learn More\"",
      targeting: "Keywords like \"corporate training programs,\" \"employee development solutions,\" \"bulk employee certification.\""
    },
    metaAds: {
      adText: "Provide your employees with globally recognized certifications. Affordable, scalable programs that fit your team's needs. Learn more today.",
      headline: "Employee Development Made Easy and Affordable.",
      cta: "\"Contact Us\"",
      targeting: "Target HR Managers, Training Managers, and Learning & Development Leaders using job titles and company size filters."
    }
  }
];

export const industryFactsData = [
    { fact: "The global online education market is expected to grow from $187.877 billion in 2021 to $585.48 billion by 2027, with a CAGR of 19.9%.", source: "https://www.researchandmarkets.com/reports/5317186/online-education-market-global-outlook-and" },
    { fact: "According to LinkedIn’s 2021 Workforce Report, 94% of professionals say that they would stay longer in their current job if they received opportunities to learn and grow. This highlights the importance of employee development and certifications.", source: "https://learning.linkedin.com/resources/workplace-learning-report" },
    { fact: "67% of professionals prefer online learning over traditional methods due to its flexibility and cost-effectiveness.", source: "https://www.statista.com/statistics/1130498/e-learning-advantages-for-professionals-worldwide/" }
];

export const customerJourneyPlan = [
    {
        stage: "Top of Funnel (ToF): Brand Awareness",
        contentStrategy: [
            "Blog posts and ads focusing on scholarships, affordable pricing, and global recognition of EduvantX's certifications.",
            "Highlight the flexibility of online courses to attract working professionals."
        ],
        adType: "Lead generation ads on Meta and Google, with informative landing pages showcasing course details and testimonials."
    },
    {
        stage: "Middle of Funnel (MoF): Lead Nurturing",
        contentStrategy: [
            "Case studies and success stories from professionals who advanced their careers after taking EduvantX courses.",
            "Comparison blog posts showing the cost-effectiveness of EduvantX compared to competitors like Simplilearn and OpenClassrooms."
        ],
        adType: "Retargeting ads on Meta and Google featuring scholarships, special offers, and personalized consultations."
    },
    {
        stage: "Bottom of Funnel (BoF): Conversion",
        contentStrategy: [
            "Highlight limited-time offers or discounts for course sign-ups.",
            "Provide strong CTAs like \"Enroll Now\" or \"Request a Free Consultation\" to push leads to conversion."
        ],
        adType: "Direct conversion ads on Google and Meta, with clear, persuasive messaging around immediate action and personalized benefits (e.g., scholarships, discounts)."
    }
];
