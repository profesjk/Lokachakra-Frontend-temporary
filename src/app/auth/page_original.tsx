"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
        { name: "name", label: "Your Name*", type: "text", placeholder: "Enter your full name", required: true },
        { name: "role", label: "Your Role*", type: "text", placeholder: "e.g. Founder", required: true },
        { name: "startupName", label: "Startup Name*", type: "text", placeholder: "e.g. ChainMed Solutions", required: true },
        { name: "stage", label: "Startup Stage*", type: "select", options: ["Idea", "Prototype", "MVP", "Revenue-generating", "Scaling"], required: true },
        { name: "domains", label: "Domain(s)*", type: "text", placeholder: "e.g. HealthTech, Blockchain", required: true },
        { name: "challenge", label: "Biggest Challenge*", type: "text", placeholder: "e.g. Market Access", required: true },
        { name: "collaborators", label: "Collaborators Needed*", type: "text", placeholder: "e.g. Investors, Technical Experts", required: true },
        { name: "seeking", label: "Currently Seeking*", type: "text", placeholder: "e.g. Investments", required: true },
        { name: "goals", label: "12-Month Growth Goals*", type: "textarea", placeholder: "e.g. Enter 3 new regional markets and hire sales team.", required: true },
        { name: "accelerator", label: "Interested in Accelerator?", type: "select", options: ["Yes", "No"] },
        { name: "model", label: "Preferred Model*", type: "text", placeholder: "e.g. Revenue-share", required: true },
        { name: "techStack", label: "Tech Stack*", type: "text", placeholder: "e.g. Node.js, React", required: true },
        { name: "hiring", label: "Hiring Needs*", type: "text", placeholder: "e.g. Backend, Frontend", required: true },
        { name: "funding", label: "Funding Needed (USD)*", type: "number", placeholder: "e.g. 465244", required: true },
        { name: "location", label: "Location*", type: "text", placeholder: "e.g. New York", required: true },
        { name: "support", label: "Previous Support Used*", type: "text", placeholder: "e.g. Incubator", required: true },
        { name: "productType", label: "Product Type*", type: "text", placeholder: "e.g. Marketplace", required: true },
        { name: "cofounder", label: "Co-Founder Needed?", type: "select", options: ["Yes", "No"] },
        { name: "fundraisingStage", label: "Fundraising Stage*", type: "select", options: ["Pre-seed", "Seed", "Series A", "Series B+"], required: true },
        { name: "traction", label: "Traction Summary*", type: "textarea", placeholder: "e.g. Secured letters of intent from 5 enterprise clients.", required: true }
    ],
    investor: [
        { name: "name", label: "Full Name*", type: "text", placeholder: "e.g. John Smith", required: true },
        { name: "type", label: "Investor Type*", type: "text", placeholder: "e.g. Angel", required: true },
        { name: "focus", label: "Investment Focus*", type: "text", placeholder: "e.g. HealthTech", required: true },
        { name: "stage", label: "Investment Stage*", type: "text", placeholder: "e.g. Seed", required: true },
        { name: "range", label: "Investment Range (USD)*", type: "text", placeholder: "e.g. 50K - 500K", required: true },
        { name: "geography", label: "Geographic Focus*", type: "text", placeholder: "e.g. North America", required: true },
        { name: "criteria", label: "Investment Criteria*", type: "textarea", placeholder: "e.g. Strong team, proven traction", required: true },
        { name: "portfolio", label: "Portfolio Size", type: "number", placeholder: "e.g. 25" },
        { name: "experience", label: "Years of Experience*", type: "number", placeholder: "e.g. 10", required: true },
        { name: "involvement", label: "Preferred Involvement Level*", type: "select", options: ["Hands-on", "Advisory", "Passive"], required: true }
    ],
    freelancer: [
        { name: "name", label: "Full Name*", type: "text", placeholder: "e.g. Carol Curry", required: true },
        { name: "expertise", label: "Expertise Area*", type: "text", placeholder: "e.g. Writing", required: true },
        { name: "clients", label: "Preferred Client Types*", type: "text", placeholder: "e.g. Startups, Government", required: true },
        { name: "workMode", label: "Preferred Work Mode*", type: "text", placeholder: "e.g. Part-time", required: true },
        { name: "experience", label: "Experience Level*", type: "text", placeholder: "e.g. Junior", required: true },
        { name: "timeline", label: "Preferred Project Timeline*", type: "text", placeholder: "e.g. Ongoing", required: true },
        { name: "platforms", label: "Freelancing Platforms Used*", type: "text", placeholder: "e.g. Upwork, Lokachakra", required: true },
        { name: "communication", label: "Communication Style", type: "text", placeholder: "e.g. Regular Syncs" },
        { name: "teamWork", label: "Team Work Preference*", type: "text", placeholder: "e.g. Team", required: true },
        { name: "crypto", label: "Open to Crypto Gigs?", type: "select", options: ["Yes", "No"] },
        { name: "verification", label: "Verification Preference", type: "textarea", placeholder: "e.g. Strategy form." }
    ],
    legal: [
        { name: "name", label: "Full Name*", type: "text", placeholder: "e.g. John Knight", required: true },
        { name: "specialization", label: "Specialization Areas*", type: "text", placeholder: "e.g. IP Law, Corporate Law", required: true },
        { name: "experience", label: "Years of Experience*", type: "number", placeholder: "e.g. 10", required: true },
        { name: "clients", label: "Types of Clients Served", type: "text", placeholder: "e.g. Corporates, Startups" },
        { name: "engagement", label: "Preferred Engagement Mode*", type: "text", placeholder: "e.g. Retainer", required: true },
        { name: "advisory", label: "Startup Advisory Experience", type: "select", options: ["Yes", "No"] },
        { name: "mentorship", label: "Interested in Mentorship?", type: "select", options: ["Yes", "No"] },
        { name: "updates", label: "Preferred Update Channels", type: "text", placeholder: "e.g. Webinars, Newsletters" },
        { name: "challenges", label: "Common Legal Challenges You See", type: "textarea", placeholder: "e.g. Contract clarity, IP disputes" },
        { name: "privacy", label: "Privacy Concerns or Limitations", type: "textarea", placeholder: "e.g. Sensitive data handling policies" }
    ],
    cybersecurity: [
        { name: "name", label: "Full Name*", type: "text", placeholder: "e.g. John Knight", required: true },
        { name: "specialization", label: "Specialization Areas*", type: "text", placeholder: "e.g. DevOps, Security Audits", required: true },
        { name: "domain", label: "Domain*", type: "text", placeholder: "e.g. Cloud", required: true },
        { name: "gig", label: "Gig Preference*", type: "text", placeholder: "e.g. Long-term Strategy", required: true },
        { name: "objectives", label: "Objectives*", type: "text", placeholder: "e.g. Learn, Share Expertise", required: true },
        { name: "tools", label: "Tools/Frameworks*", type: "text", placeholder: "e.g. Nmap, Metasploit", required: true },
        { name: "updates", label: "Preferred Update Method*", type: "text", placeholder: "e.g. Conferences", required: true },
        { name: "logAccess", label: "Require Log Access?", type: "select", options: ["Yes", "No"] },
        { name: "mentorship", label: "Interested in Mentorship?", type: "select", options: ["Yes", "No"] },
        { name: "certifications", label: "Certifications*", type: "text", placeholder: "e.g. AWS Sec, OSCP", required: true },
        { name: "teamPreference", label: "Team Preference*", type: "text", placeholder: "e.g. Team-based", required: true },
        { name: "partnership", label: "Preferred Partnership Type*", type: "text", placeholder: "e.g. Informal", required: true },
        { name: "challenge", label: "Biggest Challenge", type: "textarea", placeholder: "e.g. Access control" }
    ],
    exitplanner: [
        { name: "name", label: "Full Name*", type: "text", placeholder: "e.g. Natasha Brewer", required: true },
        { name: "focus", label: "Focus Side*", type: "text", placeholder: "e.g. Buy-side", required: true },
        { name: "dealSize", label: "Deal Size Range (USD)*", type: "text", placeholder: "e.g. 233782 - 2370685", required: true },
        { name: "team", label: "Team Structure*", type: "text", placeholder: "e.g. Independent", required: true },
        { name: "support", label: "Support Needed*", type: "text", placeholder: "e.g. Business Dev, Valuation", required: true },
        { name: "transaction", label: "Transaction Type*", type: "text", placeholder: "e.g. Immediate, Pipeline", required: true },
        { name: "sectors", label: "Operating Sectors*", type: "text", placeholder: "e.g. Health, Manufacturing", required: true },
        { name: "redFlags", label: "Red Flags", type: "textarea", placeholder: "e.g. Leave six me short." },
        { name: "validation", label: "Readiness Validation", type: "textarea", placeholder: "e.g. Hope sign study customer onto." },
        { name: "discovery", label: "Deal Discovery Preference*", type: "text", placeholder: "e.g. Inbound", required: true },
        { name: "tools", label: "Tools You Use*", type: "text", placeholder: "e.g. CapIQ, Pitchbook", required: true },
        { name: "partnership", label: "Work in Partnership?", type: "select", options: ["Yes", "No"] },
        { name: "frequency", label: "Deal Frequency", type: "text", placeholder: "e.g. Quarterly" },
        { name: "lokachakraSupport", label: "Support Expected from Lokachakra", type: "textarea", placeholder: "e.g. Pattern difficult become music cup." }
    ],
    // Simplified configs for other types
    mentor: [
        { name: "name", label: "Full Name*", type: "text", placeholder: "Enter your full name", required: true },
        { name: "expertise", label: "Expertise Area*", type: "text", placeholder: "e.g. Marketing, Technology", required: true },
        { name: "experience", label: "Years of Experience*", type: "number", placeholder: "e.g. 15", required: true },
        { name: "industries", label: "Industries*", type: "text", placeholder: "e.g. SaaS, FinTech", required: true },
        { name: "availability", label: "Availability*", type: "text", placeholder: "e.g. 5 hours/week", required: true },
        { name: "approach", label: "Mentoring Approach", type: "textarea", placeholder: "Describe your mentoring style" }
    ],
    accelerator: [
        { name: "name", label: "Program Name*", type: "text", placeholder: "e.g. TechStars NYC", required: true },
        { name: "focus", label: "Focus Areas*", type: "text", placeholder: "e.g. B2B SaaS, AI", required: true },
        { name: "stage", label: "Target Stage*", type: "text", placeholder: "e.g. Pre-seed, Seed", required: true },
        { name: "duration", label: "Program Duration*", type: "text", placeholder: "e.g. 3 months", required: true },
        { name: "equity", label: "Equity Taken*", type: "text", placeholder: "e.g. 6%", required: true },
        { name: "cohortSize", label: "Cohort Size*", type: "number", placeholder: "e.g. 10", required: true },
        { name: "funding", label: "Funding Provided*", type: "text", placeholder: "e.g. $100K", required: true },
        { name: "location", label: "Location*", type: "text", placeholder: "e.g. San Francisco", required: true }
    ],
    executive: [
        { name: "name", label: "Full Name*", type: "text", placeholder: "Enter your full name", required: true },
        { name: "role", label: "Executive Role*", type: "text", placeholder: "e.g. CEO, CTO, CMO", required: true },
        { name: "experience", label: "Years of Experience*", type: "number", placeholder: "e.g. 20", required: true },
        { name: "industries", label: "Industry Experience*", type: "text", placeholder: "e.g. SaaS, Healthcare", required: true },
        { name: "companies", label: "Notable Companies*", type: "text", placeholder: "e.g. Google, Microsoft", required: true },
        { name: "expertise", label: "Key Expertise*", type: "text", placeholder: "e.g. Scaling, Product Strategy", required: true },
        { name: "availability", label: "Availability*", type: "select", options: ["Full-time", "Part-time", "Advisory"], required: true },
        { name: "location", label: "Location Preference*", type: "text", placeholder: "e.g. Remote, San Francisco", required: true }
    ],
    government: [
        { name: "name", label: "Full Name*", type: "text", placeholder: "Enter your full name", required: true },
        { name: "organization", label: "Organization*", type: "text", placeholder: "e.g. Department of Innovation", required: true },
        { name: "role", label: "Your Role*", type: "text", placeholder: "e.g. Director, Policy Advisor", required: true },
        { name: "focus", label: "Focus Areas*", type: "text", placeholder: "e.g. Innovation Policy, Funding", required: true },
        { name: "jurisdiction", label: "Jurisdiction*", type: "text", placeholder: "e.g. Federal, State, Local", required: true },
        { name: "programs", label: "Available Programs*", type: "text", placeholder: "e.g. Grants, Tax Incentives", required: true },
        { name: "priorities", label: "Policy Priorities*", type: "textarea", placeholder: "e.g. Support emerging technologies, job creation", required: true },
        { name: "collaboration", label: "Collaboration Interests", type: "textarea", placeholder: "How you'd like to work with startups" }
    ],
    default: [
        { name: "name", label: "Full Name*", type: "text", placeholder: "Enter your full name", required: true },
        { name: "experience", label: "Experience*", type: "text", placeholder: "Years of experience", required: true },
        { name: "specialization", label: "Specialization*", type: "text", placeholder: "Your area of expertise", required: true },
        { name: "objectives", label: "Objectives", type: "textarea", placeholder: "What are your main objectives?" }
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
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                />
            </div>
        );
    }
    
    if (field.type === 'select') {
        return (
            <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">{field.label}</label>
                <select className={baseClasses} value={value} onChange={(e) => onChange?.(e.target.value)}>
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
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </div>
    );
}

interface SignUpFormProps {
    role: string;
    onSignIn: () => void;
}

function SignUpForm({ role, onSignIn }: SignUpFormProps) {
    const config = roleConfig[role as keyof typeof roleConfig];
    const fields = formConfigs[config?.formType as keyof typeof formConfigs] || formConfigs.default;
    
    return (
        <div className="md:w-1/2 md:ml-auto flex flex-col items-center justify-start p-6 sm:p-8 h-screen overflow-y-auto">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-blue-800">{config?.signUpTitle}</h2>
                <p className="text-sm text-gray-500 mt-2">Already have an account? Sign in below</p>
                <div className="flex gap-3 justify-center mt-4 flex-wrap">
                    <button className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition">
                        Sign Up
                    </button>
                    <button
                        className="px-6 py-2 rounded-full border border-blue-400 text-blue-600 text-sm font-semibold hover:bg-blue-100 transition"
                        onClick={onSignIn}
                    >
                        Sign In
                    </button>
                </div>
            </div>

            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

            <div className="space-y-4 w-full max-w-3xl mx-auto">
                {fields.map((field, index) => {
                    if (index % 2 === 0 && index < fields.length - 1 && !['textarea'].includes(field.type) && !['textarea'].includes(fields[index + 1]?.type)) {
                        // Render two fields in a row
                        return (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField field={field} />
                                {fields[index + 1] && <FormField field={fields[index + 1]} />}
                            </div>
                        );
                    } else if (index % 2 === 1 && !['textarea'].includes(field.type)) {
                        // Skip odd index fields as they're already rendered
                        return null;
                    } else {
                        // Render single field (textarea or single field)
                        return <FormField key={index} field={field} />;
                    }
                })}

                <div className="flex justify-center pt-4">
                    <button className="px-8 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                        SIGN-UP
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Auth() {
    const [step, setStep] = useState(1);
    const [role, setRole] = useState('');
    const [roleType, setRoleType] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Common Left Side Component for basic auth steps
    function AuthLeftSide() {
        return <LeftSection />;
    }

    const handleRoleSelection = () => {
        const config = roleConfig[role as keyof typeof roleConfig];
        if (config) {
            setStep(config.step);
        } else {
            setStep(2);
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

                        <button
                            className="px-7 py-2 bg-[#0066FF] text-white rounded-full hover:bg-white hover:text-[#0066FF] border-2 border-[#0066FF] transition duration-300 font-semibold"
                            disabled={!role}
                            onClick={handleRoleSelection}
                        >
                            CONTINUE
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
                    <div className="w-full h-screen flex flex-col md:flex-row bg-white">
                        <LeftSection role={currentRole} />
                        <SignUpForm role={currentRole} onSignIn={() => setStep(6)} />
                    </div>
                )}

                {/* Basic Auth Steps (2-10) - Simplified for brevity */}
                {step === 2 && (
                    <div className="w-full min-h-screen flex flex-col md:flex-row pt-0 pb-0 px-4">
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen">
                            <div className="flex items-center w-full mb-8">
                                <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                                <span className="ml-2 text-lg font-semibold text-gray-700">Lokachakra</span>
                            </div>
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-gray-400 rounded-md flex items-center justify-center">
                                    <span className="text-gray-400 text-sm">Image Placeholder</span>
                                </div>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-gray-700">LOREM IPSUM IS TEXT</h2>
                            <p className="text-sm sm:text-base text-center text-gray-600 max-w-md mt-3 px-4">
                                Lorem Ipsum is simply dummy text of the printing typesetting...
                            </p>
                        </div>
                        <div className="md:w-1/2 flex flex-col items-center justify-center p-6">
                            <div className="text-center mb-4">
                                <h2 className="text-2xl sm:text-3xl font-semibold">SIGN UP</h2>
                                <p className="text-sm text-gray-600">You have already account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm" onClick={() => setStep(6)}>Sign In</button>
                                </div>
                            </div>
                            <p className="text-center text-base font-semibold mb-2">Categorize founders based on startup knowledge.</p>
                            <hr className="w-2/3 border-t border-gray-300 mb-6" />
                            <div className="w-full max-w-md space-y-6">
                                {[
                                    'Have you launched a startup before?',
                                    'Are you familiar with product-market fit, MVP, and fundraising?',
                                    'What stage is your current idea/startup in?'
                                ].map((question, idx) => (
                                    <div key={idx} className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm">
                                        <p className="text-center text-base font-semibold text-gray-800 mb-4">{question}</p>
                                        <div className="flex justify-center gap-6 flex-wrap">
                                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                                <input type="radio" name={`q${idx}`} className="accent-gray-800 w-4 h-4" /> Yes
                                            </label>
                                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                                <input type="radio" name={`q${idx}`} className="accent-gray-800 w-4 h-4" /> No
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-8 px-8 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-900 text-sm" onClick={() => setStep(3)}>NEXT</button>
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

                {step === 7 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        <AuthLeftSide />
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-3xl font-semibold">ENTER REGISTERD EMAIL</h2>
                                <p className="text-sm text-gray-600">We will send your OTP on your email address if we found your account.</p>
                            </div>
                            <hr className="w-2/3 border-t border-gray-300 my-6" />
                            <div className="space-y-8 w-full max-w-sm mx-auto">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email ID*</label>
                                    <input type="email" placeholder="Email*" className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                </div>
                                <div className="flex justify-center">
                                    <button className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900" onClick={() => setStep(8)}>SEND OTP</button>
                                </div>
                                <div className="flex justify-center">
                                    <button className="px-8 py-2 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-200" onClick={() => setStep(6)}>CANCEL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 8 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        <AuthLeftSide />
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-3xl font-semibold">ENTER 6 DIGIT OTP</h2>
                                <p className="text-sm text-gray-600">We have sent you 6 Digit OTP Code on your Register email Address. Please Verify the OTP</p>
                            </div>
                            <hr className="w-2/3 border-t border-gray-300 my-6" />
                            <div className="space-y-8 w-full max-w-sm mx-auto">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Enter OTP*</label>
                                    <input type="text" placeholder="6 Digit OTP*" className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                </div>
                                <div className="text-center" onClick={() => setStep(7)}>
                                    <a href="#" className="text-sm text-gray-700 font-semibold underline">Did not Received OTP. Resend It</a>
                                </div>
                                <div className="flex justify-center">
                                    <button className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900" onClick={() => setStep(9)}>VERIFY OTP</button>
                                </div>
                                <div className="flex justify-center">
                                    <button className="px-8 py-2 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-200" onClick={() => setStep(6)}>CANCEL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 9 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        <AuthLeftSide />
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">RESET PASSWORD</h2>
                                <p className="text-sm text-gray-600 mt-2">Set the new password for your account so you can sign in and access all the features</p>
                            </div>
                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />
                            <div className="space-y-8 w-full max-w-sm mx-auto">
                                <div className="relative">
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">New Password*</label>
                                    <input type={showNewPassword ? "text" : "password"} placeholder="New Password*" className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                    <button type="button" onClick={() => setShowNewPassword((prev) => !prev)} className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center focus:outline-none" tabIndex={-1}>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            {showNewPassword ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z" />
                                            )}
                                        </svg>
                                    </button>
                                </div>
                                <div className="relative">
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Confirm Password*</label>
                                    <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password*" className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                    <button type="button" onClick={() => setShowConfirmPassword((prev) => !prev)} className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center focus:outline-none" tabIndex={-1}>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            {showConfirmPassword ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z" />
                                            )}
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-xs text-gray-600 text-center">Use at least 8 character password included uppercase lowercase and one special character.</p>
                                <div className="flex justify-center">
                                    <button className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900" onClick={() => setStep(10)}>RESET PASSWORD</button>
                                </div>
                                <div className="flex justify-center">
                                    <button className="px-8 py-2 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-200" onClick={() => setStep(6)}>CANCEL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 10 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        <AuthLeftSide />
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">CONGRATULATIONS</h2>
                                <p className="text-sm text-gray-600 mt-2">Your password is reset successfully. You can Sign In with your new password</p>
                            </div>
                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />
                            <div className="space-y-8 w-full max-w-sm mx-auto">
                                <div className="flex justify-center">
                                    <button className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900" onClick={() => setStep(6)}>BACK TO SIGN-IN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 6 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        <AuthLeftSide />
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8 bg-white">
                            <div className="text-center mb-4">
                                <h2 className="text-3xl font-semibold text-blue-700">Sign In to Lokachakra</h2>
                                <p className="text-sm text-gray-600">Don&apos;t have an account? Hit the Sign Up button</p>
                                <div className="flex flex-wrap gap-4 justify-center mt-3">
                                    <button className="px-6 py-2 rounded-full border-2 border-[#0066FF] text-[#0066FF] bg-white hover:bg-[#0066FF] hover:text-white font-semibold transition" onClick={() => setStep(1)}>Sign Up</button>
                                    <button className="px-6 py-2 rounded-full bg-[#0066FF] text-white font-semibold hover:bg-blue-800 transition">Sign In</button>
                                </div>
                            </div>
                            <hr className="w-2/3 border-t border-gray-200 my-6" />
                            <div className="space-y-8 w-full max-w-sm mx-auto">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email ID*</label>
                                    <input type="email" placeholder="Email*" className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]" />
                                </div>
                                <div className="relative">
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Password*</label>
                                    <input type={showPassword ? 'text' : 'password'} placeholder="Password*" className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]" />
                                    <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center focus:outline-none" tabIndex={-1}>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            {showPassword ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z" />
                                            )}
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-center" onClick={() => setStep(7)}>
                                    <a href="#" className="text-sm text-[#0066FF] font-semibold underline hover:text-blue-800">Forgot Your Password?</a>
                                </div>
                                <div className="flex justify-center">
                                    <button className="px-8 py-2 rounded-full bg-[#0066FF] text-white font-semibold hover:bg-blue-800 transition">SIGN IN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <ChatBot />
        </>
    );
}
