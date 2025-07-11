"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import ChatBot from '../sections/ChatBot';

// Role configuration data
const roleConfig = {
    founder: {
        step: 11,
        image: "/founder.png",
        title: "Join as a Founder",
        description: "Be part of an exclusive network of visionaries building the future. Sign up to share your startup, connect with investors, and access powerful tools to accelerate your journey.",
        signUpTitle: "Founders Sign-Up",
        formType: "startup"
    },
    investor: {
        step: 12,
        image: "/investor.png",
        title: "Join as an Investor",
        description: "Discover promising startups and make strategic investments. Sign up to access exclusive deal flow, connect with vetted founders, and build your portfolio with innovative ventures.",
        signUpTitle: "INVESTOR SIGN UP",
        formType: "investor"
    },
    mentor_research: {
        step: 14,
        image: "/mentor_research.png",
        title: "Join as a Mentor & Research",
        description: "Share your expertise and guide the next generation of entrepreneurs. Sign up to mentor startups, conduct research, and contribute to the innovation ecosystem.",
        signUpTitle: "MENTOR SIGN UP",
        formType: "mentor"
    },
    accelerators: {
        step: 13,
        image: "/accelerators.png",
        title: "Join as an Accelerator",
        description: "Connect with high-potential startups seeking acceleration. Sign up to offer your programs, resources, and expertise to help ventures scale rapidly.",
        signUpTitle: "ACCELERATOR SIGN UP",
        formType: "accelerator"
    },
    executives: {
        step: 15,
        image: "/executives.png",
        title: "Join as an Executive",
        description: "Connect with high-growth startups seeking experienced leadership. Sign up to explore strategic roles, contribute to impactful ventures, and drive meaningful change.",
        signUpTitle: "EXECUTIVE SIGN UP",
        formType: "executive"
    },
    government: {
        step: 16,
        image: "/government.png",
        title: "Join as a Government Authority",
        description: "Collaborate with startups and innovation ecosystems to drive policy, funding, and national development. Sign up to support emerging ventures and enable impactful public-private partnerships.",
        signUpTitle: "GOVERNMENT AUTHORITY SIGN UP",
        formType: "government"
    },
    legal: {
        step: 17,
        image: "/legal.png",
        title: "Join as a Legal Expert",
        description: "Support startups with legal guidance, compliance, and intellectual property protection. Sign up to offer your legal expertise and help ventures build on a strong foundation.",
        signUpTitle: "LEGAL SIGN UP",
        formType: "legal"
    },
    cybersecurity: {
        step: 18,
        image: "/cybersecurity.png",
        title: "Join as a Cybersecurity Expert",
        description: "Protect startups from digital threats by offering security assessments, risk management, and compliance solutions. Sign up to help founders build safe and resilient digital products.",
        signUpTitle: "CYBERSECURITY SIGN UP",
        formType: "cybersecurity"
    },
    freelancers: {
        step: 19,
        image: "/freelancers.png",
        title: "Join as a Freelancer",
        description: "Work with innovative startups on exciting projects across design, development, content, marketing, and more. Sign up to find meaningful freelance opportunities and grow your portfolio.",
        signUpTitle: "FREELANCER SIGN UP",
        formType: "freelancer"
    },
    exit_planners: {
        step: 20,
        image: "/exit_planners.png",
        title: "Join as an Exit Planner",
        description: "Help founders prepare for successful exits through strategic planning, M&A support, and valuation insights. Sign up to guide startups through smooth and rewarding transitions.",
        signUpTitle: "EXIT PLANNER SIGN UP",
        formType: "exitplanner"
    }
};

const roles = Object.keys(roleConfig);

// Form field configurations for different role types
const formConfigs = {
    startup: [
        { name: "name", label: "Your Name*", type: "text", placeholder: "e.g. Johnathan Franco", required: true },
        { name: "startupName", label: "Startup Name*", type: "text", placeholder: "e.g. ChainMed Solutions", required: true },
        { name: "stage", label: "Startup Stage*", type: "select", options: ["Idea", "Prototype", "MVP", "Revenue-generating", "Scaling"], required: true },
        { name: "domain", label: "Domain(s)*", type: "text", placeholder: "e.g. HealthTech, Blockchain (comma-separated)", required: true },
        { name: "biggestChallenge", label: "Biggest Challenge*", type: "text", placeholder: "e.g. Market Access", required: true },
        { name: "collaboratorsNeeded", label: "Collaborators Needed*", type: "text", placeholder: "e.g. Investors, Technical Experts (comma-separated)", required: true },
        { name: "seeking", label: "Currently Seeking*", type: "text", placeholder: "e.g. Investments", required: true },
        { name: "growthGoals12m", label: "12-Month Growth Goals*", type: "textarea", placeholder: "e.g. Enter 3 new regional markets and hire sales team.", required: true },
        { name: "interestedInAccel", label: "Interested in Accelerator?", type: "select", options: ["Yes", "No"] },
        { name: "preferredModel", label: "Preferred Model*", type: "text", placeholder: "e.g. Revenue-share", required: true },
        { name: "techStack", label: "Tech Stack*", type: "text", placeholder: "e.g. Node.js, React (comma-separated)", required: true },
        { name: "fundingNeededUSD", label: "Funding Needed (USD)*", type: "number", placeholder: "e.g. 465244", required: true },
        { name: "hiringNeeds", label: "Hiring Needs*", type: "text", placeholder: "e.g. backend, frontend (comma-separated)", required: true },
        { name: "location", label: "Location*", type: "text", placeholder: "e.g. New York", required: true },
        { name: "previousSupportUsed", label: "Previous Support Used", type: "text", placeholder: "e.g. Incubator (comma-separated)" },
        { name: "productType", label: "Product Type*", type: "text", placeholder: "e.g. Marketplace", required: true },
        { name: "coFounderNeed", label: "Co-Founder Needed?", type: "select", options: ["Yes", "No"] },
        { name: "fundraisingStage", label: "Fundraising Stage*", type: "select", options: ["Pre-seed", "Seed", "Series A", "Series B+"], required: true },
        { name: "tractionSummary", label: "Traction Summary*", type: "textarea", placeholder: "e.g. Secured letters of intent from 5 enterprise clients.", required: true }
    ],
    investor: [
        { name: "name", label: "Full Name*", type: "text", placeholder: "e.g. Justin Wilson", required: true },
        { name: "organization", label: "Organization*", type: "text", placeholder: "e.g. Robinson, Cooper and Nelson", required: true },
        { name: "investorType", label: "Investor Type*", type: "select", options: ["Angel", "VC", "PE", "Corporate VC", "Family Office"], required: true },
        { name: "ticketSizeUSD", label: "Ticket Size Range (USD)*", type: "text", placeholder: "e.g. 50000 - 100000", required: true },
        { name: "stageFocus", label: "Stage Focus*", type: "text", placeholder: "e.g. Seed, Pre-seed (comma-separated)", required: true },
        { name: "sectorFocus", label: "Sector Focus*", type: "text", placeholder: "e.g. Fintech, AI (comma-separated)", required: true },
        { name: "geography", label: "Geographic Focus*", type: "text", placeholder: "e.g. USA, India (comma-separated)", required: true },
        { name: "openToCoInvestment", label: "Open to Co-Investment?", type: "select", options: ["Yes", "No"] },
        { name: "coInvestmentType", label: "Co-Investment Type", type: "text", placeholder: "e.g. Syndicate, Direct (comma-separated)" },
        { name: "involvementLevel", label: "Involvement Level*", type: "text", placeholder: "e.g. Board Seat, Passive (comma-separated)", required: true },
        { name: "evaluationCriteria", label: "Evaluation Criteria*", type: "text", placeholder: "e.g. CAC, Traction, TAM (comma-separated)", required: true },
        { name: "mentoringInterest", label: "Interested in Mentoring?", type: "select", options: ["Yes", "No"] },
        { name: "advisoryInterest", label: "Interested in Advisory Roles?", type: "select", options: ["Yes", "No"] },
        { name: "metricsTracked", label: "Metrics Tracked*", type: "text", placeholder: "e.g. LTV, NPS, CAC (comma-separated)", required: true },
        { name: "impactAlignment", label: "Impact Alignment Focus?", type: "select", options: ["Yes", "No"] },
        { name: "openToImpactMatches", label: "Open to Impact Matches?", type: "select", options: ["Yes", "No"] },
        { name: "redFlags", label: "Red Flags", type: "textarea", placeholder: "e.g. Unrealistic projections, No founder-market fit" },
        { name: "exitReadinessSignals", label: "Exit Readiness Signals", type: "textarea", placeholder: "e.g. Steady revenue, High growth rate" },
        { name: "dealDiscovery", label: "Deal Discovery Preference*", type: "select", options: ["Inbound", "Outbound", "Both"], required: true },
        { name: "toolsUsed", label: "Tools Used*", type: "text", placeholder: "e.g. Crunchbase, Docsend (comma-separated)", required: true },
        { name: "legalPartnerModel", label: "Legal Partner Model*", type: "select", options: ["In-house Legal", "External Legal", "Hybrid"], required: true },
        { name: "dealFrequency", label: "Deal Frequency*", type: "text", placeholder: "e.g. 1-2 per quarter", required: true },
        { name: "portfolio", label: "Portfolio Companies", type: "textarea", placeholder: "e.g. Davis and Sons, Robinson-Garcia" },
        { name: "supportNeededOnLokachakra", label: "Support Needed on Lokachakra", type: "textarea", placeholder: "e.g. Better startup discovery, Legal sync tools" }
    ],
    freelancer: [
        { name: "role", label: "Role*", type: "text", placeholder: "e.g. Freelancer", required: true },
        { name: "name", label: "Full Name*", type: "text", placeholder: "e.g. Carol Curry", required: true },
        { name: "expertiseArea", label: "Expertise Area*", type: "text", placeholder: "e.g. Writing", required: true },
        { name: "preferredClients", label: "Preferred Clients*", type: "text", placeholder: "e.g. Startups, Government (comma-separated)", required: true },
        { name: "workMode", label: "Work Mode*", type: "text", placeholder: "e.g. Part-time", required: true },
        { name: "experienceLevel", label: "Experience Level*", type: "text", placeholder: "e.g. Junior", required: true },
        { name: "projectTimeline", label: "Project Timeline*", type: "text", placeholder: "e.g. Ongoing", required: true },
        { name: "findingPlatforms", label: "Finding Platforms*", type: "text", placeholder: "e.g. Upwork, Lokachakra (comma-separated)", required: true },
        { name: "commStyle", label: "Communication Style", type: "text", placeholder: "e.g. Regular Syncs" },
        { name: "teamWork", label: "Team Work Preference*", type: "text", placeholder: "e.g. Team", required: true },
        { name: "cryptoGigs", label: "Open to Crypto Gigs?", type: "select", options: ["Yes", "No"] },
        { name: "verificationPref", label: "Verification Preference", type: "textarea", placeholder: "e.g. Strategy from." }
    ],
    legal: [
        { name: "name", label: "Full Name*", type: "text", placeholder: "e.g. Cheryl Herrera", required: true },
        { name: "currentRole", label: "Current Role*", type: "text", placeholder: "e.g. Auditor", required: true },
        { name: "specialization", label: "Specialization Areas*", type: "text", placeholder: "e.g. Crypto Compliance, IP (comma-separated)", required: true },
        { name: "toolsUsed", label: "Tools Used", type: "text", placeholder: "e.g. Custom ERP, LexisNexis (comma-separated)" },
        { name: "lookingToOffer", label: "Looking to Offer", type: "text", placeholder: "e.g. Collaboration (comma-separated)" },
        { name: "startupAdvisoryExp", label: "Startup Advisory Experience?", type: "select", options: ["Yes", "No"] },
        { name: "industrySectors", label: "Industry Sectors", type: "text", placeholder: "e.g. Tech, Health (comma-separated)" },
        { name: "engagementMode", label: "Engagement Mode*", type: "text", placeholder: "e.g. Retainer", required: true },
        { name: "mentorshipAvailability", label: "Available for Mentorship?", type: "select", options: ["Yes", "No"] },
        { name: "commonChallenges", label: "Common Challenges", type: "textarea", placeholder: "e.g. Happen range feel baby yes." },
        { name: "updateChannels", label: "Preferred Update Channels", type: "text", placeholder: "e.g. Webinars, Newsletters (comma-separated)" },
        { name: "clientTypes", label: "Client Types", type: "text", placeholder: "e.g. Corporates, Startups (comma-separated)" },
        { name: "privacyConcerns", label: "Privacy Concerns", type: "textarea", placeholder: "e.g. Manager popular candidate because peace." }
    ],
    cybersecurity: [
        { name: "role", label: "Role*", type: "text", placeholder: "e.g. Cybersecurity", required: true },
        { name: "name", label: "Full Name*", type: "text", placeholder: "e.g. John Knight", required: true },
        { name: "specializationAreas", label: "Specialization Areas*", type: "text", placeholder: "e.g. DevOps, Security Audits (comma-separated)", required: true },
        { name: "domain", label: "Domain(s)*", type: "text", placeholder: "e.g. Cloud (comma-separated)", required: true },
        { name: "gigPref", label: "Gig Preference*", type: "text", placeholder: "e.g. Long-term Strategy", required: true },
        { name: "objectives", label: "Objectives*", type: "text", placeholder: "e.g. Learn, Share Expertise (comma-separated)", required: true },
        { name: "toolsFrameworks", label: "Tools/Frameworks*", type: "text", placeholder: "e.g. Nmap, Metasploit (comma-separated)", required: true },
        { name: "updateMethod", label: "Preferred Update Method*", type: "text", placeholder: "e.g. Conferences", required: true },
        { name: "logAccessNeed", label: "Require Log Access?", type: "select", options: ["Yes", "No"] },
        { name: "mentorshipInterest", label: "Interested in Mentorship?", type: "select", options: ["Yes", "No"] },
        { name: "certifications", label: "Certifications*", type: "text", placeholder: "e.g. AWS Sec, OSCP (comma-separated)", required: true },
        { name: "teamPref", label: "Team Preference*", type: "text", placeholder: "e.g. Team-based", required: true },
        { name: "partnershipType", label: "Preferred Partnership Type*", type: "text", placeholder: "e.g. Informal", required: true },
        { name: "biggestChallenge", label: "Biggest Challenge", type: "textarea", placeholder: "e.g. Access control" }
    ],
    exitplanner: [
        { name: "role", label: "Role*", type: "text", placeholder: "e.g. Exit Planner", required: true },
        { name: "name", label: "Full Name*", type: "text", placeholder: "e.g. Natasha Brewer", required: true },
        { name: "focusSide", label: "Focus Side*", type: "text", placeholder: "e.g. Buy-side", required: true },
        { name: "dealSizeRange", label: "Deal Size Range (USD)*", type: "text", placeholder: "e.g. 233782 - 2370685", required: true },
        { name: "teamStructure", label: "Team Structure*", type: "text", placeholder: "e.g. Independent", required: true },
        { name: "supportNeeded", label: "Support Needed*", type: "text", placeholder: "e.g. Business Dev, Valuation (comma-separated)", required: true },
        { name: "transactionType", label: "Transaction Type*", type: "text", placeholder: "e.g. Immediate, Pipeline (comma-separated)", required: true },
        { name: "operatingSectors", label: "Operating Sectors*", type: "text", placeholder: "e.g. Health, Manufacturing (comma-separated)", required: true },
        { name: "redFlags", label: "Red Flags", type: "textarea", placeholder: "e.g. Leave six me short." },
        { name: "readinessValidation", label: "Readiness Validation", type: "textarea", placeholder: "e.g. Hope sign study customer onto." },
        { name: "discoveryPref", label: "Deal Discovery Preference*", type: "text", placeholder: "e.g. Inbound", required: true },
        { name: "toolsUsed", label: "Tools You Use*", type: "text", placeholder: "e.g. CapIQ, Pitchbook (comma-separated)", required: true },
        { name: "partneredWork", label: "Work in Partnership?", type: "select", options: ["Yes", "No"] },
        { name: "freqDeals", label: "Deal Frequency", type: "text", placeholder: "e.g. Quarterly" },
        { name: "lokachakraSupport", label: "Support Expected from Lokachakra", type: "textarea", placeholder: "e.g. Pattern difficult become music cup." }
    ],
    // Simplified configs for other types
    mentor: [
        { name: "role", label: "Role*", type: "text", placeholder: "e.g. Mentor Researcher", required: true },
        { name: "name", label: "Full Name*", type: "text", placeholder: "e.g. Kelsey Thomas", required: true },
        { name: "primaryField", label: "Primary Field*", type: "text", placeholder: "e.g. Policy", required: true },
        { name: "mentorshipOpen", label: "Mentorship Open To*", type: "text", placeholder: "e.g. Individuals, Teams", required: true },
        { name: "styleOptions", label: "Mentoring Style Options*", type: "text", placeholder: "e.g. 1:1, Group (comma-separated)", required: true },
        { name: "researchOutputs", label: "Research Outputs", type: "text", placeholder: "e.g. Policy Recs, Papers (comma-separated)" },
        { name: "desiredImpact", label: "Desired Impact", type: "textarea", placeholder: "e.g. Year field little federal." },
        { name: "researchStage", label: "Research Stage*", type: "text", placeholder: "e.g. Data Collection", required: true },
        { name: "collaboratorsWanted", label: "Collaborators Wanted", type: "text", placeholder: "e.g. Students, Peers (comma-separated)" },
        { name: "jointProjectsInterest", label: "Joint Projects Interest", type: "text", placeholder: "e.g. Feedback, Pilots (comma-separated)" },
        { name: "toolsDatasets", label: "Tools/Datasets Used", type: "text", placeholder: "e.g. GitHub, TensorFlow (comma-separated)" },
        { name: "availability", label: "Availability*", type: "text", placeholder: "e.g. Monthly", required: true },
        { name: "commWithMentees", label: "Communication with Mentees", type: "text", placeholder: "e.g. Chat" },
        { name: "paidOrVoluntary", label: "Paid or Voluntary*", type: "text", placeholder: "e.g. Voluntary", required: true },
        { name: "trackMenteeGrowth", label: "Track Mentee Growth", type: "textarea", placeholder: "e.g. Early choice unit." },
        { name: "networkMemberships", label: "Network Memberships", type: "text", placeholder: "e.g. MentorNet (comma-separated)" },
        { name: "mentorChallenges", label: "Mentor Challenges", type: "textarea", placeholder: "e.g. Own people total within situation thousand." },
        { name: "valuesMatchInterest", label: "Interested in Values Match?", type: "select", options: ["Yes", "No"] }
    ],
    accelerator: [
        { name: "name", label: "Program/Organization Name*", type: "text", placeholder: "e.g. Bryan and Sons", required: true },
        { name: "startupTypes", label: "Startup Types Focus*", type: "text", placeholder: "e.g. AI, FinTech (comma-separated)", required: true },
        { name: "servicesOffered", label: "Services Offered*", type: "text", placeholder: "e.g. Office Space, Legal, Funding (comma-separated)", required: true },
        { name: "intakeSize", label: "Intake Size*", type: "number", placeholder: "e.g. 36", required: true },
        { name: "batchFrequency", label: "Batch Frequency*", type: "select", options: ["Monthly", "Quarterly", "Bi-annually", "Annually"], required: true },
        { name: "rejectCriteria", label: "Rejection Criteria", type: "textarea", placeholder: "e.g. Outside approach ok." },
        { name: "programDuration", label: "Program Duration*", type: "text", placeholder: "e.g. 6 months", required: true },
        { name: "stageFocus", label: "Stage Focus*", type: "text", placeholder: "e.g. Idea, MVP (comma-separated)", required: true },
        { name: "equityTaken", label: "Equity Taken?", type: "select", options: ["Yes", "No"] },
        { name: "selectionCriteria", label: "Selection Criteria*", type: "textarea", placeholder: "e.g. Institution use act own politics.", required: true },
        { name: "fundingOrMentorship", label: "Primary Focus*", type: "select", options: ["Funding", "Mentorship", "Both"], required: true },
        { name: "affiliations", label: "Affiliations", type: "text", placeholder: "e.g. Govt Body, University (comma-separated)" },
        { name: "deliveryMode", label: "Delivery Mode*", type: "select", options: ["In-person", "Virtual", "Hybrid"], required: true },
        { name: "crossBorder", label: "Cross-Border Operations?", type: "select", options: ["Yes", "No"] },
        { name: "onboardingMatchHelp", label: "Onboarding/Match Help", type: "textarea", placeholder: "e.g. Particularly respond cup pretty since." },
        { name: "openToPartnerships", label: "Open to Partnerships", type: "text", placeholder: "e.g. Government, Experts (comma-separated)" }
    ],
    executive: [
        { name: "name", label: "Full Name*", type: "text", placeholder: "e.g. Paul Willis", required: true },
        { name: "currentRole", label: "Current Role*", type: "text", placeholder: "e.g. COO", required: true },
        { name: "organizationType", label: "Organization Type*", type: "select", options: ["Startup", "Corporation", "NGO", "Government", "Other"], required: true },
        { name: "KPIs", label: "Key KPIs*", type: "text", placeholder: "e.g. Retention, User Acquisition (comma-separated)", required: true },
        { name: "partnerFinding", label: "Partner Finding Approach", type: "textarea", placeholder: "e.g. Meet down term." },
        { name: "strategicPriorities", label: "Strategic Priorities*", type: "text", placeholder: "e.g. Efficiency, Innovation (comma-separated)", required: true },
        { name: "exploring", label: "Currently Exploring*", type: "text", placeholder: "e.g. Partnerships (comma-separated)", required: true },
        { name: "techInterests", label: "Tech Interests*", type: "text", placeholder: "e.g. Blockchain, Cloud (comma-separated)", required: true },
        { name: "seekingRoles", label: "Seeking Roles*", type: "text", placeholder: "e.g. Talent, Advisors (comma-separated)", required: true },
        { name: "investMentorInterest", label: "Interest in Investing/Mentoring*", type: "text", placeholder: "e.g. Investing, Mentoring (comma-separated)", required: true },
        { name: "firmPreference", label: "Firm Preference*", type: "select", options: ["Startups", "Corporations", "NGOs", "Any"], required: true },
        { name: "industryChallenges", label: "Industry Challenges", type: "textarea", placeholder: "e.g. Direction every dream." },
        { name: "delegateAreas", label: "Areas to Delegate*", type: "text", placeholder: "e.g. Tech, Marketing (comma-separated)", required: true },
        { name: "budgetMandate", label: "Budget Mandate*", type: "text", placeholder: "e.g. $231981", required: true }
    ],
    government: [
        { name: "role", label: "Role*", type: "text", placeholder: "e.g. Authority", required: true },
        { name: "department", label: "Department*", type: "text", placeholder: "e.g. Grant Body", required: true },
        { name: "domainRegulated", label: "Domains Regulated*", type: "text", placeholder: "e.g. Healthcare, Cybersecurity (comma-separated)", required: true },
        { name: "orgType", label: "Organization Type*", type: "text", placeholder: "e.g. Agency", required: true },
        { name: "position", label: "Position*", type: "text", placeholder: "e.g. Head", required: true },
        { name: "yearsActive", label: "Years Active*", type: "number", placeholder: "e.g. 1", required: true },
        { name: "pastChallenges", label: "Past Challenges", type: "textarea", placeholder: "e.g. Kitchen later lot eye billion sort." },
        { name: "innovationInterest", label: "Interest in Innovation?", type: "select", options: ["Yes", "No"] },
        { name: "collabOrgs", label: "Collaboration Organizations", type: "text", placeholder: "e.g. Startups, NGOs (comma-separated)" },
        { name: "dashboardsUsed", label: "Dashboards Used", type: "text", placeholder: "e.g. Govt Portal (comma-separated)" },
        { name: "policyResearchMatch", label: "Interested in Policy Research Match?", type: "select", options: ["Yes", "No"] },
        { name: "focusArea", label: "Focus Area*", type: "text", placeholder: "e.g. Policy-making", required: true },
        { name: "collabStyle", label: "Collaboration Style", type: "text", placeholder: "e.g. Open Network" },
        { name: "startTimeline", label: "Start Timeline", type: "text", placeholder: "e.g. 1-3 months" },
        { name: "impactEval", label: "Impact Evaluation Approach", type: "textarea", placeholder: "e.g. Like him child series room." },
        { name: "partnershipConstraints", label: "Partnership Constraints", type: "textarea", placeholder: "e.g. Fast technology follow." }
    ]
};

// Reusable components
interface LeftSectionProps {
    role?: string;
    defaultImage?: string;
    defaultTitle?: string;
    defaultDescription?: string;
}

function LeftSection({ role, defaultImage = "/workillustration.png", defaultTitle = "Welcome Back to Lokachakra", defaultDescription = "Continue your journey with the community that's shaping the future of innovation. Access powerful tools, connect with changemakers, and keep building what matters. We're glad to have you back." }: LeftSectionProps) {
    const config = role ? roleConfig[role as keyof typeof roleConfig] : null;

    return (
        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 h-screen fixed top-0 left-0 shadow-md">
            <Link href="/" className="flex items-center w-full mb-8 hover:opacity-90 transition">
                <Image
                    src="/lokachakra-logo.png"
                    alt="Lokachakra"
                    width={40}
                    height={40}
                    priority
                />
                <span className="ml-2 text-lg font-semibold text-blue-700">Lokachakra</span>
            </Link>

            <div className="flex-grow flex items-center justify-center my-8">
                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                    <Image
                        src={config?.image || defaultImage}
                        alt={config?.title || "Welcome"}
                        width={320}
                        height={320}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                {config?.title || defaultTitle}
            </h2>
            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                {config?.description || defaultDescription}
            </p>
        </div>
    );
}

interface FormFieldProps {
    field: {
        name: string;
        label: string;
        type: string;
        placeholder?: string;
        required?: boolean;
        options?: string[];
        rows?: number;
    };
    value?: string;
    onChange?: (value: string) => void;
}

function FormField({ field, value, onChange }: FormFieldProps) {
    const baseClasses = "w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none";

    if (field.type === 'textarea') {
        return (
            <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">{field.label}</label>
                <textarea
                    placeholder={field.placeholder}
                    rows={field.rows || 3}
                    className={baseClasses}
                    value={value || ''}
                    onChange={(e) => onChange?.(e.target.value)}
                />
            </div>
        );
    }

    if (field.type === 'select') {
        return (
            <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">{field.label}</label>
                <select className={baseClasses} value={value || ''} onChange={(e) => onChange?.(e.target.value)}>
                    <option value="">Select...</option>
                    {field.options?.map((option: string) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">{field.label}</label>
            <input
                type={field.type}
                placeholder={field.placeholder}
                className={baseClasses}
                value={value || ''}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </div>
    );
}

export default function Auth() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [role, setRole] = useState('');
    const [roleType, setRoleType] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    // Wallet integration
    const { publicKey, connected } = useWallet();
    
    // Form data state
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);
    
    // Auto-login state
    const [isCheckingExistingAccount, setIsCheckingExistingAccount] = useState(false);
    const [existingUserData, setExistingUserData] = useState<any>(null);
    const [showAutoLoginPrompt, setShowAutoLoginPrompt] = useState(false);

    // Form data handlers
    const handleFieldChange = (fieldName: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }));
    };

    const validateForm = (fields: Array<{
        name: string;
        label: string;
        type: string;
        placeholder?: string;
        required?: boolean;
        options?: string[];
        rows?: number;
    }>) => {
        const requiredFields = fields.filter(field => field.required);
        const missingFields = requiredFields.filter(field => !formData[field.name] || formData[field.name].trim() === '');
        return missingFields;
    };

    // Function to check if user already exists on blockchain
    const checkExistingAccount = async (walletAddress: string) => {
        try {
            setIsCheckingExistingAccount(true);
            console.log('🔍 Checking for existing account:', walletAddress);
            
            const response = await fetch('/api/check-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ walletAddress }),
            });
            
            if (response.ok) {
                const result = await response.json();
                if (result.exists) {
                    console.log('✅ Existing user found:', result.userData);
                    setExistingUserData(result.userData);
                    setShowAutoLoginPrompt(true);
                    return result.userData;
                }
            }
            
            console.log('ℹ️ No existing account found for this wallet');
            return null;
        } catch (error) {
            console.error('❌ Error checking existing account:', error);
            return null;
        } finally {
            setIsCheckingExistingAccount(false);
        }
    };

    // Auto-login function
    const handleAutoLogin = async () => {
        if (!existingUserData || !publicKey) return;
        
        try {
            console.log('🚀 Auto-logging in user:', existingUserData);
            
            // Store user data in localStorage
            const userData = {
                ...existingUserData,
                walletAddress: publicKey.toBase58(),
                autoLoginTimestamp: new Date().toISOString()
            };
            
            localStorage.setItem('lokachakra_user', JSON.stringify(userData));
            
            // Redirect to dashboard
            router.push('/userdashboard');
        } catch (error) {
            console.error('❌ Auto-login error:', error);
            setSubmitError('Failed to auto-login. Please try manual sign-up.');
        }
    };

    // Effect to check for existing account when wallet connects
    useEffect(() => {
        if (connected && publicKey && step === 1 && !existingUserData && !isCheckingExistingAccount) {
            console.log('🔍 Wallet connected, checking for existing account...');
            checkExistingAccount(publicKey.toBase58());
        }
        
        // Reset states when wallet disconnects
        if (!connected) {
            setExistingUserData(null);
            setShowAutoLoginPrompt(false);
            setIsCheckingExistingAccount(false);
        }
    }, [connected, publicKey, step]);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setSubmitError('');
        
        try {
            // Check wallet connection
            if (!connected || !publicKey) {
                throw new Error('Please connect your wallet first to complete sign-up');
            }

            const config = roleConfig[role as keyof typeof roleConfig];
            const fields = config?.formType ? formConfigs[config.formType as keyof typeof formConfigs] : null;
            
            if (!fields) {
                throw new Error('Invalid form configuration');
            }

            // Validate required fields
            const missingFields = validateForm(fields);
            if (missingFields.length > 0) {
                throw new Error(`Please fill in required fields: ${missingFields.map(f => f.label).join(', ')}`);
            }

            // Prepare submission data for blockchain
            const submissionData = {
                user: {
                    role: role,
                    roleType: roleType,
                    timestamp: new Date().toISOString(),
                    walletAddress: publicKey.toBase58(),
                    formData: formData
                },
                role: role,
                walletAddress: publicKey.toBase58()
            };

            console.log('🚀 Submitting form data to blockchain:', submissionData);
            console.log('📋 Form fields filled:', Object.keys(formData).length);
            console.log('👤 Selected role:', role);
            console.log('🎯 Role type:', roleType);
            console.log('💳 Wallet address:', publicKey.toBase58());

            // Call our Solana signup API
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Server error: ${response.status}`);
            }

            const result = await response.json();
            console.log('✅ Blockchain signup successful:', result);
            
            setSubmitSuccess(true);
            
            // Store user data in localStorage for user dashboard
            const userData = {
                role: role,
                roleType: roleType,
                walletAddress: publicKey.toBase58(),
                profilePDA: result.data?.profilePDA,
                signature: result.data?.signature,
                cid: result.data?.cid,
                formData: formData,
                signupTimestamp: new Date().toISOString()
            };
            
            localStorage.setItem('lokachakra_user', JSON.stringify(userData));
            
            setTimeout(() => {
                setSubmitSuccess(false);
                // Redirect to user dashboard instead of sign in
                router.push('/userdashboard');
            }, 3000);

        } catch (error) {
            console.error('❌ Signup error:', error);
            setSubmitError(error instanceof Error ? error.message : 'An error occurred during signup');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Common Left Side Component for basic auth steps
    function AuthLeftSide() {
        return <LeftSection />;
    }

    const handleRoleSelection = async () => {
        // If there's an existing user and auto-login prompt is shown, don't proceed
        if (showAutoLoginPrompt && existingUserData) {
            console.log('⚠️ Auto-login prompt is active, please choose an option first');
            return;
        }
        
        // If connected and no existing user found, check again before proceeding
        if (connected && publicKey && !existingUserData && !isCheckingExistingAccount) {
            const userData = await checkExistingAccount(publicKey.toBase58());
            if (userData) {
                // If user found during role selection, show prompt
                return;
            }
        }
        
        const config = roleConfig[role as keyof typeof roleConfig];
        if (config) {
            setStep(config.step);
        } else {
            // This should never happen since roles are derived from roleConfig
            console.error('Invalid role selected:', role);
            setStep(1); // Go back to role selection
        }
    };

    // Generic role-based sign up step
    const isRoleSignUpStep = step >= 11 && step <= 20;
    const currentRole = Object.keys(roleConfig).find(r => roleConfig[r as keyof typeof roleConfig].step === step);

    return (
        <>
            <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-gray-800">
                {step === 1 && (
                    <div className="w-full max-w-6xl p-6 flex flex-col items-center bg-white rounded-xl shadow-sm">
                        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-800">
                            Choose Your Category
                        </h1>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-6 place-items-center mb-12">
                            {roles.map((r, index) => (
                                <div
                                    key={r}
                                    className={`flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 ${role === r ? 'text-blue-700 font-semibold' : 'text-gray-600'
                                        } ${index % 2 === 0 ? '-translate-y-7' : 'translate-y-7'}`}
                                    onClick={() => setRole(r)}
                                >
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-28 h-28 rounded-full border-[6px] border-blue-100 flex items-center justify-center bg-blue-50">
                                            <Image
                                                src={`/${r}.png`}
                                                alt={r}
                                                width={104}
                                                height={104}
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="h-6 w-1 bg-blue-200 mt-1 mb-1"></div>
                                        <div className="w-3 h-3 rounded-full bg-blue-400 mb-2"></div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-base uppercase tracking-wide">{r}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Auto-login prompt for existing users */}
                        {showAutoLoginPrompt && existingUserData && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg max-w-md mx-auto">
                                <div className="flex items-center mb-3">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-semibold text-green-800">Existing Account Found!</span>
                                </div>
                                <p className="text-sm text-green-700 mb-3">
                                    We found an existing account linked to your wallet. Would you like to sign in automatically?
                                </p>
                                <div className="flex gap-2 justify-center">
                                    <button
                                        onClick={handleAutoLogin}
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-semibold"
                                    >
                                        Sign In Automatically
                                    </button>
                                    <button
                                        onClick={() => setShowAutoLoginPrompt(false)}
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition text-sm font-semibold"
                                    >
                                        Create New Account
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Wallet connection status */}
                        {connected && publicKey && (
                            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg max-w-md mx-auto">
                                <div className="flex items-center text-sm">
                                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-blue-700">
                                        Wallet Connected: {publicKey.toBase58().slice(0, 8)}...{publicKey.toBase58().slice(-8)}
                                    </span>
                                </div>
                                {isCheckingExistingAccount && (
                                    <div className="mt-2 text-xs text-blue-600">
                                        <div className="flex items-center">
                                            <svg className="animate-spin h-3 w-3 mr-1" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Checking for existing account...
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {!connected && (
                            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg max-w-md mx-auto">
                                <div className="flex items-center text-sm text-yellow-700">
                                    <svg className="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    Please connect your wallet to continue
                                </div>
                            </div>
                        )}

                        {/* Manual check button for troubleshooting */}
                        {connected && publicKey && !showAutoLoginPrompt && !isCheckingExistingAccount && (
                            <div className="mb-4 text-center">
                                <button
                                    onClick={() => checkExistingAccount(publicKey.toBase58())}
                                    className="text-sm text-blue-600 hover:text-blue-800 underline"
                                >
                                    Check for existing account again
                                </button>
                            </div>
                        )}

                        <button
                            className={`px-7 py-2 rounded-full border-2 transition duration-300 font-semibold ${
                                connected && !showAutoLoginPrompt
                                    ? "bg-[#0066FF] text-white border-[#0066FF] hover:bg-white hover:text-[#0066FF]"
                                    : "bg-gray-400 text-gray-200 border-gray-400 cursor-not-allowed"
                            }`}
                            disabled={!role || !connected || showAutoLoginPrompt}
                            onClick={handleRoleSelection}
                        >
                            {showAutoLoginPrompt ? 'CHOOSE ABOVE OPTION' : 'CONTINUE'}
                        </button>

                        <p className="text-sm text-gray-600 mt-4 text-center">
                            YOU AGREE TO OUR{" "}
                            <a href="/privacy-policy" className="underline text-[#0066FF] hover:text-blue-800">
                                PRIVACY POLICY
                            </a>{" "}
                            &{" "}
                            <a href="/tnc" className="underline text-[#0066FF] hover:text-blue-800">
                                TERMS & CONDITION
                            </a>
                        </p>
                    </div>
                )}

                {/* Generic Role Sign-Up Steps */}
                {isRoleSignUpStep && currentRole && (
                    <div className="w-full h-screen flex bg-white">
                        <LeftSection role={currentRole} />
                        <div className="w-full md:w-1/2 md:ml-auto flex flex-col items-center justify-start p-6 sm:p-8 h-screen overflow-y-auto">
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-bold text-blue-800">{roleConfig[currentRole as keyof typeof roleConfig]?.signUpTitle}</h2>
                                <p className="text-sm text-gray-500 mt-2">Already have an account? Sign in below</p>
                                <div className="flex gap-3 justify-center mt-4 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition">
                                        Sign Up
                                    </button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-blue-400 text-blue-600 text-sm font-semibold hover:bg-blue-100 transition"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-4 w-full max-w-3xl mx-auto">
                                {(() => {
                                    const config = roleConfig[currentRole as keyof typeof roleConfig];
                                    const fields = config?.formType ? formConfigs[config.formType as keyof typeof formConfigs] : null;

                                    if (!fields) {
                                        return (
                                            <div className="text-center text-red-600">
                                                <p>Invalid role selected. Please choose from the available roles.</p>
                                            </div>
                                        );
                                    }

                                    return fields.map((field, index) => {
                                        if (index % 2 === 0 && index < fields.length - 1 && !['textarea'].includes(field.type) && !['textarea'].includes(fields[index + 1]?.type)) {
                                            return (
                                                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <FormField 
                                                        field={field} 
                                                        value={formData[field.name] || ''} 
                                                        onChange={(value) => handleFieldChange(field.name, value)}
                                                    />
                                                    {fields[index + 1] && (
                                                        <FormField 
                                                            field={fields[index + 1]} 
                                                            value={formData[fields[index + 1].name] || ''} 
                                                            onChange={(value) => handleFieldChange(fields[index + 1].name, value)}
                                                        />
                                                    )}
                                                </div>
                                            );
                                        } else if (index % 2 === 1 && !['textarea'].includes(field.type)) {
                                            return null;
                                        } else {
                                            return (
                                                <FormField 
                                                    key={index} 
                                                    field={field} 
                                                    value={formData[field.name] || ''} 
                                                    onChange={(value) => handleFieldChange(field.name, value)}
                                                />
                                            );
                                        }
                                    });
                                })()}

                                {/* Error Message */}
                                {submitError && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                        {submitError}
                                    </div>
                                )}

                                {/* Success Message */}
                                {submitSuccess && (
                                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm text-center">
                                        <div className="flex items-center justify-center mb-2">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Success!
                                        </div>
                                        <p>Your account has been created successfully and stored on the blockchain! Redirecting to your dashboard...</p>
                                    </div>
                                )}

                                {/* Wallet Status */}
                                <div className={`border rounded-lg px-4 py-3 text-sm ${
                                    connected ? 'bg-green-50 border-green-200 text-green-700' : 'bg-yellow-50 border-yellow-200 text-yellow-700'
                                }`}>
                                    <div className="flex items-center">
                                        <svg className={`w-5 h-5 mr-2 ${connected ? 'text-green-500' : 'text-yellow-500'}`} fill="currentColor" viewBox="0 0 20 20">
                                            {connected ? (
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            ) : (
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            )}
                                        </svg>
                                        <span className="font-medium">
                                            {connected ? 'Wallet Connected' : 'Wallet Required'}
                                        </span>
                                    </div>
                                    {connected && publicKey ? (
                                        <p className="mt-1 text-xs">
                                            Connected to: {publicKey.toBase58().slice(0, 8)}...{publicKey.toBase58().slice(-8)}
                                        </p>
                                    ) : (
                                        <p className="mt-1 text-xs">
                                            Please connect your Solana wallet to complete sign-up. Click the "Connect Wallet" button in the navigation bar.
                                        </p>
                                    )}
                                </div>

                                <div className="flex justify-center pt-4">
                                    <button 
                                        className={`px-8 py-2 rounded-full font-semibold transition ${
                                            isSubmitting || !connected
                                                ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                        onClick={handleSubmit}
                                        disabled={isSubmitting || submitSuccess || !connected}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                SIGNING UP TO BLOCKCHAIN...
                                            </div>
                                        ) : connected ? (
                                            'SIGN-UP TO BLOCKCHAIN'
                                        ) : (
                                            'CONNECT WALLET TO SIGN-UP'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Steps 3-10 - Basic Auth Flow */}
                {step === 3 && (
                    <div className="w-full min-h-screen flex flex-col md:flex-row">
                        <AuthLeftSide />
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8">
                            <div className="text-center mb-4 px-2">
                                <h2 className="text-2xl sm:text-3xl font-semibold">SIGN UP</h2>
                                <p className="text-sm text-gray-600">You have already account? Hit the sign in button</p>
                                <div className="flex flex-wrap gap-4 justify-center mt-3">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm" onClick={() => setStep(6)}>Sign In</button>
                                </div>
                            </div>
                            <p className="text-center text-base sm:text-lg font-semibold mb-2">Categorize by role type.</p>
                            <hr className="w-2/3 border-t border-gray-300 mb-6" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md px-2">
                                {["Zero Knowledge", "Knowledgeable"].map((type) => (
                                    <div
                                        key={type}
                                        className={`rounded-lg border p-4 text-center cursor-pointer transition-all duration-200 shadow-sm ${roleType === type ? "bg-blue-100 border-blue-500 text-gray-800" : "bg-gray-50 border-gray-300 text-gray-700"}`}
                                        onClick={() => setRoleType(type)}
                                    >
                                        <div className="w-12 h-12 mx-auto rounded-full border border-gray-400 mb-2 overflow-hidden">
                                            <Image src="/avatar.png" alt="avatar" width={48} height={48} className="w-full h-full object-cover" />
                                        </div>
                                        <p className="font-semibold text-sm mb-1">{type} {role}</p>
                                        <button className={`text-xs px-3 py-1 rounded-full border ${roleType === type ? "border-blue-500 text-blue-600 bg-white" : "border-gray-400 text-gray-600 bg-white"}`}>Select</button>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-8 px-8 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-900 text-sm" disabled={!roleType} onClick={() => setStep(4)}>NEXT</button>
                        </div>
                    </div>
                )}

                {/* Auth Steps 6-10: Sign In, Forgot Password, OTP, Reset Password, Success */}
                {[6, 7, 8, 9, 10].includes(step) && (
                    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white">
                        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
                            <AuthLeftSide />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8 bg-white">
                            {(() => {
                                // Dynamic Auth Component - Optimized for Reusability
                                const AuthField = ({ label, type = "text", placeholder, value, onChange, isPassword = false, showPassword: showPwd, onTogglePassword }: {
                                    label: string; type?: string; placeholder: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
                                    isPassword?: boolean; showPassword?: boolean; onTogglePassword?: () => void;
                                }) => (
                                    <div className={`${isPassword ? 'relative' : ''}`}>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">{label}</label>
                                        <input 
                                            type={isPassword ? (showPwd ? "text" : "password") : type} 
                                            placeholder={placeholder} 
                                            value={value} 
                                            onChange={onChange}
                                            className={`w-full ${step === 6 ? 'px-3 py-2' : 'px-4 py-3'} rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-${step === 6 ? '[#0066FF]' : 'blue-500'}`} 
                                        />
                                        {isPassword && onTogglePassword && (
                                            <button type="button" onClick={onTogglePassword} className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center focus:outline-none" tabIndex={-1}>
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                    {showPwd ? <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z" />}
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                );

                                const AuthButton = ({ children, onClick, variant = "primary", className = "" }: {
                                    children: React.ReactNode; onClick?: () => void; variant?: "primary" | "secondary" | "link"; className?: string;
                                }) => {
                                    const baseClass = "px-8 py-2 rounded-full font-semibold transition";
                                    const variants = {
                                        primary: `bg-${step === 6 ? '[#0066FF]' : 'blue-600'} text-white hover:bg-blue-800`,
                                        secondary: "bg-white text-blue-600 hover:bg-blue-100 border border-blue-500",
                                        link: "text-sm text-blue-600 font-semibold underline hover:text-blue-800"
                                    };
                                    return (
                                        <button type="button" onClick={onClick} className={`${baseClass} ${variants[variant]} ${className}`}>
                                            {children}
                                        </button>
                                    );
                                };

                                // Step Configuration with proper typing
                                const authConfig: Record<number, {
                                    title: string;
                                    subtitle: string;
                                    showButtons?: boolean;
                                    fields?: Array<{
                                        label: string;
                                        type: string;
                                        placeholder: string;
                                        isPassword?: boolean;
                                        showPassword?: boolean;
                                        onTogglePassword?: () => void;
                                    }>;
                                    links?: Array<{ text: string; action: () => void }>;
                                    note?: string;
                                    actions?: Array<{
                                        text: string;
                                        variant: "primary" | "secondary";
                                        action?: () => void;
                                    }>;
                                }> = {
                                    6: {
                                        title: "Sign In to Lokachakra",
                                        subtitle: "Don't have an account? Hit the Sign Up button",
                                        showButtons: true,
                                        fields: [
                                            { label: "Email ID*", type: "email", placeholder: "Email*" },
                                            { label: "Password*", type: "password", placeholder: "Password*", isPassword: true, showPassword: showPassword, onTogglePassword: () => setShowPassword(prev => !prev) }
                                        ],
                                        links: [{ text: "Forgot Your Password?", action: () => setStep(7) }],
                                        actions: [{ text: "SIGN IN", variant: "primary" }]
                                    },
                                    7: {
                                        title: "ENTER REGISTERED EMAIL",
                                        subtitle: "We will send an OTP to your registered email address if we find your account.",
                                        fields: [{ label: "Email ID*", type: "email", placeholder: "Email*" }],
                                        actions: [
                                            { text: "SEND OTP", variant: "primary", action: () => setStep(8) },
                                            { text: "CANCEL", variant: "secondary", action: () => setStep(6) }
                                        ]
                                    },
                                    8: {
                                        title: "ENTER 6 DIGIT OTP",
                                        subtitle: "We have sent you a 6-digit OTP code on your registered email address. Please verify the OTP.",
                                        fields: [{ label: "Enter OTP*", type: "text", placeholder: "6 Digit OTP*" }],
                                        links: [{ text: "Didn't receive the OTP? Resend it", action: () => setStep(7) }],
                                        actions: [
                                            { text: "VERIFY OTP", variant: "primary", action: () => setStep(9) },
                                            { text: "CANCEL", variant: "secondary", action: () => setStep(6) }
                                        ]
                                    },
                                    9: {
                                        title: "RESET PASSWORD",
                                        subtitle: "Set a new password for your account so you can sign in and access all the features.",
                                        fields: [
                                            { label: "New Password*", type: "password", placeholder: "New Password*", isPassword: true, showPassword: showNewPassword, onTogglePassword: () => setShowNewPassword(prev => !prev) },
                                            { label: "Confirm Password*", type: "password", placeholder: "Confirm Password*", isPassword: true, showPassword: showConfirmPassword, onTogglePassword: () => setShowConfirmPassword(prev => !prev) }
                                        ],
                                        note: "Use at least 8 characters including uppercase, lowercase, and one special character.",
                                        actions: [
                                            { text: "RESET PASSWORD", variant: "primary", action: () => setStep(10) },
                                            { text: "CANCEL", variant: "secondary", action: () => setStep(6) }
                                        ]
                                    },
                                    10: {
                                        title: "🎉 CONGRATULATIONS",
                                        subtitle: "Your password has been reset successfully. You can now sign in with your new password.",
                                        actions: [{ text: "BACK TO SIGN IN", variant: "primary", action: () => setStep(6) }]
                                    }
                                };

                                const config = authConfig[step as keyof typeof authConfig];
                                
                                return (
                                    <>
                                        {/* Header */}
                                        <div className="text-center mb-4">
                                            <h2 className={`${[9, 10].includes(step) ? 'text-4xl' : 'text-3xl'} font-bold text-blue-700`}>{config.title}</h2>
                                            <p className="text-sm text-gray-600 mt-2 max-w-md">{config.subtitle}</p>
                                            {config.showButtons && (
                                                <div className="flex flex-wrap gap-4 justify-center mt-3">
                                                    <button className="px-6 py-2 rounded-full border-2 border-[#0066FF] text-[#0066FF] bg-white hover:bg-[#0066FF] hover:text-white font-semibold transition" onClick={() => setStep(1)}>Sign Up</button>
                                                    <button className="px-6 py-2 rounded-full bg-[#0066FF] text-white font-semibold hover:bg-blue-800 transition">Sign In</button>
                                                </div>
                                            )}
                                        </div>
                                        <hr className={`w-2/3 border-t${step === 6 ? '' : '-2'} border-${step === 6 ? 'gray-200' : 'blue-500'} my-6`} />
                                        
                                        {/* Content */}
                                        <div className={`${step === 9 ? 'space-y-6' : 'space-y-8'} w-full max-w-sm mx-auto`}>
                                            {/* Fields */}
                                            {config.fields?.map((field, idx) => (
                                                <AuthField key={idx} {...field} />
                                            ))}
                                            
                                            {/* Links */}
                                            {config.links?.map((link, idx) => (
                                                <div key={idx} className="text-center">
                                                    <AuthButton variant="link" onClick={link.action}>{link.text}</AuthButton>
                                                </div>
                                            ))}
                                            
                                            {/* Note */}
                                            {config.note && <p className="text-xs text-center text-gray-600">{config.note}</p>}
                                            
                                            {/* Actions */}
                                            {config.actions?.map((action, idx) => (
                                                <div key={idx} className="flex justify-center">
                                                    <AuthButton variant={action.variant} onClick={action.action}>{action.text}</AuthButton>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    </div>
                )}

            </div>
            <ChatBot />
        </>
    );
}
