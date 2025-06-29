// pages/signup.js
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import ChatBot from '../sections/ChatBot';
import Footer from '../components/Footer';


const roles = [
    "founder",
    "investor",
    "mentor_research",
    "accelerators",
    "executives",
    "government",
    "legal",
    "cybersecurity",
    "freelancers",
    "exit_planners"
];

export default function Auth() {
    const [step, setStep] = useState(1);
    const [role, setRole] = useState('');
    const [roleType, setRoleType] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    // Add these two states for step 9 password visibility
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Common Left Side Component
    function AuthLeftSide() {
        return (
            <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen shadow-md">
                {/* Logo */}
                <div className="flex items-center w-full mb-8">
                    <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                    <span className="ml-2 text-lg font-semibold text-blue-700">Lokachakra</span>
                </div>

                {/* Image Placeholder */}
                <div className="flex-grow flex items-center justify-center my-8">
                    <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                        <Image
                            src="/founder.png" // Ensure the image is placed in the public folder
                            alt="Founder"
                            width={320}
                            height={320}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Description */}
                <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">LOREM IPSUM IS TEXT</h2>
                <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                </p>
            </div>


        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-gray-800">
                {step === 1 && (
                    <div className="w-full max-w-6xl p-6 flex flex-col items-center">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-12 text-center">CHOOSE YOUR CATEGORY</h1>

                        {/* Profile Selection */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-6 place-items-center mb-12">
                            {roles.map((r, index) => (
                                <div
                                    key={r}
                                    className={`flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 ${role === r ? 'text-black font-semibold' : 'text-gray-700'
                                        } ${index % 2 === 0 ? '-translate-y-7' : 'translate-y-7'}`}
                                    onClick={() => setRole(r)}
                                >
                                    {/* Profile image */}
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-28 h-28 rounded-full border-[6px] border-gray-200 flex items-center justify-center bg-gray-100">
                                            <Image src={`/${r}.png`} alt={r} width={104} height={104} className="rounded-full" />
                                        </div>

                                        {/* Vertical Line + Dot */}
                                        <div className="h-6 w-1 bg-gray-300 mt-1 mb-1"></div>
                                        <div className="w-3 h-3 rounded-full bg-gray-400 mb-2"></div>
                                    </div>

                                    {/* Label & Description */}
                                    <div className="text-center">
                                        <div className="text-base uppercase tracking-wide">{r}</div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Continue Button */}
                        <button
                            className="px-7 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition disabled:opacity-50"
                            disabled={!role}
                            onClick={() => {
                                switch (role) {
                                    case "founder":
                                        setStep(11);
                                        break;
                                    case "investor":
                                        setStep(12);
                                        break;
                                    case "mentor_research":
                                        setStep(14);
                                        break;
                                    case "accelerators":
                                        setStep(13);
                                        break;
                                    case "executives":
                                        setStep(15);
                                        break;
                                    case "government":
                                        setStep(16);
                                        break;
                                    case "legal":
                                        setStep(17);
                                        break;
                                    case "cybersecurity":
                                        setStep(18);
                                        break;
                                    case "freelancers":
                                        setStep(19);
                                        break;
                                    case "exit_planners":
                                        setStep(20);
                                        break;
                                    default:
                                        setStep(2);
                                }
                            }}
                        >
                            CONTINUE
                        </button>

                        <p className="text-sm text-gray-600 mt-4 text-center">
                            YOU AGREE TO OUR{' '}
                            <a href="/privacy-policy" className="underline cursor-pointer">PRIVACY POLICY</a>{' '}
                            &{' '}
                            <a href="/tnc">
                                <span className="underline cursor-pointer">TERMS & CONDITION</span>
                            </a>
                        </p>
                    </div>
                )}




                {step === 2 && (
                    <div className="w-full min-h-screen flex flex-col md:flex-row pt-0 pb-0 px-4">

                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen">
                            {/* Logo */}
                            <div className="flex items-center w-full mb-8">
                                <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                                <span className="ml-2 text-lg font-semibold text-gray-700">Lokachakra</span>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-gray-400 rounded-md flex items-center justify-center">
                                    <span className="text-gray-400 text-sm">Image Placeholder</span>
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-gray-700">LOREM IPSUM IS TEXT</h2>
                            <p className="text-sm sm:text-base text-center text-gray-600 max-w-md mt-3 px-4">
                                Lorem Ipsum is simply dummy text of the printing typesetting is Lorem Ipsum is simply dummy text of the printing typesetting is Lorem Ipsum is simply dummy text of the printing typesetting is
                            </p>
                        </div>


                        {/* RIGHT SIDE */}
                        <div className="md:w-1/2 flex flex-col items-center justify-center p-6">
                            <div className="text-center mb-4">
                                <h2 className="text-2xl sm:text-3xl font-semibold">SIGN UP</h2>
                                <p className="text-sm text-gray-600">You have already account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In</button>
                                </div>
                            </div>

                            <p className="text-center text-base font-semibold mb-2">Categorize founders based on startup knowledge.</p>
                            <hr className="w-2/3 border-t border-gray-300 mb-6" />

                            {/* Questions */}
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

                            <button
                                className="mt-8 px-8 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-900 text-sm"
                                disabled={!role}
                                onClick={() => setStep(3)}
                            >
                                NEXT
                            </button>

                            <label className="flex items-center gap-2 text-xs text-gray-700 mt-4 text-center">
                                <input type="checkbox" className="accent-gray-700" /> I agree to our <span className="underline">PRIVACY POLICY</span> & <span className="underline">TERMS & CONDITION</span>
                            </label>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="w-full min-h-screen flex flex-col md:flex-row">
                        {/* Left Section */}
                        <AuthLeftSide />

                        {/* Right Section */}
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8">
                            <div className="text-center mb-4 px-2">
                                <h2 className="text-2xl sm:text-3xl font-semibold">SIGN UP</h2>
                                <p className="text-sm text-gray-600">
                                    You have already account? Hit the sign in button
                                </p>
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
                                        className={`rounded-lg border p-4 text-center cursor-pointer transition-all duration-200 shadow-sm ${roleType === type
                                            ? "bg-blue-100 border-blue-500 text-gray-800"
                                            : "bg-gray-50 border-gray-300 text-gray-700"
                                            }`}
                                        onClick={() => setRoleType(type)}
                                    >
                                        <div className="w-12 h-12 mx-auto rounded-full border border-gray-400 mb-2 overflow-hidden">
                                            <Image src="/avatar.png" alt="avatar" width={48} height={48} className="w-full h-full object-cover" />
                                        </div>
                                        <p className="font-semibold text-sm mb-1">{type} {role}</p>
                                        <button
                                            className={`text-xs px-3 py-1 rounded-full border ${roleType === type
                                                ? "border-blue-500 text-blue-600 bg-white"
                                                : "border-gray-400 text-gray-600 bg-white"
                                                }`}
                                        >
                                            Select
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="mt-8 px-8 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-900 text-sm"
                                disabled={!roleType}
                                onClick={() => setStep(4)}
                            >
                                NEXT
                            </button>

                            <label className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 mt-4 px-2 text-center">
                                <input type="checkbox" className="accent-gray-700" /> I agree to our{" "}
                                <span className="underline">PRIVACY POLICY</span> &{" "}
                                <span className="underline">TERMS & CONDITION</span>
                            </label>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <AuthLeftSide />

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-3xl font-semibold">SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex flex-wrap gap-4 justify-center mt-3">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white">Sign Up</button>
                                    <button className="px-6 py-2 rounded-full border border-gray-400 text-gray-800" onClick={() => setStep(6)}>Sign In</button>
                                </div>
                            </div>

                            <p className="text-center text-lg font-semibold mb-2">Documentation and Basic Details</p>
                            <hr className="w-2/3 border-t border-gray-300 mb-6" />

                            <div className="space-y-10 w-full">
                                {/* BASIC DETAILS */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-6">BASIC DETAIL</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Full Name */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name*</label>
                                            <input type="text" placeholder="Full Name*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                        </div>

                                        {/* Email ID */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Email ID*</label>
                                            <input type="email" placeholder="Email*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number*</label>
                                            <input type="text" placeholder="Phone Number*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                        </div>

                                        {/* Profile Photo */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Upload Profile Photo*</label>
                                            <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm">
                                                <input type="file" className="hidden" id="profileUpload" />
                                                <label htmlFor="profileUpload" className="w-full text-gray-400 text-sm cursor-pointer">Upload Image*</label>
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3m0-6h-3V4h-2v5H9l3-3 3 3z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Password */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Password*</label>
                                            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    placeholder="Password*"
                                                    className="w-full border-none outline-none text-gray-700 placeholder-gray-400"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword((prev) => !prev)}
                                                    className="focus:outline-none ml-2"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-gray-500"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        {showPassword ? (
                                                            // Eye Off Icon
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12"
                                                            />
                                                        ) : (
                                                            // Eye Icon
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z"
                                                            />
                                                        )}
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Confirm Password */}
                                        <div className="mt-4">
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Confirm Password*</label>
                                            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
                                                <input
                                                    type={showConfirm ? 'text' : 'password'}
                                                    placeholder="Confirm Password*"
                                                    className="w-full border-none outline-none text-gray-700 placeholder-gray-400"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowConfirm((prev) => !prev)}
                                                    className="focus:outline-none ml-2"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-gray-500"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        {showConfirm ? (
                                                            // Eye Off Icon
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12"
                                                            />
                                                        ) : (
                                                            // Eye Icon
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z"
                                                            />
                                                        )}
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-xs text-gray-600">Use at least 8 character password including uppercase, lowercase and one special character.</p>
                                </div>

                                {/* ID VERIFICATION SECTION */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-6">ID VERIFICATION</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Aadhar */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Upload Aadhar Card*</label>
                                            <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm">
                                                <input type="file" className="hidden" id="aadharUpload" />
                                                <label htmlFor="aadharUpload" className="w-full text-gray-400 text-sm cursor-pointer">Upload Image*</label>
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3m0-6h-3V4h-2v5H9l3-3 3 3z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* PAN */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Upload PAN Card*</label>
                                            <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm">
                                                <input type="file" className="hidden" id="panUpload" />
                                                <label htmlFor="panUpload" className="w-full text-gray-400 text-sm cursor-pointer">Upload Image*</label>
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3m0-6h-3V4h-2v5H9l3-3 3 3z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-8 px-8 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-900"
                                disabled={!roleType}
                                onClick={() => setStep(5)}
                            >

                                NEXT
                            </button>

                            <label className="flex items-center gap-2 text-sm text-gray-700 mt-4">
                                <input type="checkbox" className="accent-gray-700" /> I agree to our <span className="underline">PRIVACY POLICY</span> & <span className="underline">TERMS & CONDITION</span>
                            </label>
                        </div>
                    </div>
                )}

                {step === 5 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <AuthLeftSide />

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-3xl font-semibold">SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex flex-wrap gap-4 justify-center mt-3">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white">Sign Up</button>
                                    <button className="px-6 py-2 rounded-full border border-gray-400 text-gray-800" onClick={() => setStep(6)}>Sign In</button>
                                </div>
                            </div>

                            <p className="text-center text-lg font-semibold mb-2">Documentation & Basic Details</p>
                            <hr className="w-2/3 border-t border-gray-300 mb-6" />

                            <div className="space-y-10 w-full">
                                {/* Business Detail & ID Verification */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-6">Business Detail & ID Verification</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Business Name */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Business Name*</label>
                                            <input type="text" placeholder="Business Name*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                        </div>

                                        {/* Business Email */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Business Email ID*</label>
                                            <input type="email" placeholder="Email*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                        </div>

                                        {/* Business Stage */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Business Stage*</label>
                                            <select className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                                                <option value="">Beginner</option>
                                                <option value="">Intermediate</option>
                                                <option value="">Advanced</option>
                                                {/* Add actual options here */}
                                            </select>
                                        </div>

                                        {/* Industries Stage */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Industries Stage*</label>
                                            <select className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                                                {/* Add actual options here */}
                                                <option value="">Beginner</option>
                                                <option value="">Intermediate</option>
                                                <option value="">Advanced</option>
                                            </select>
                                        </div>

                                        {/* Upload Gumasta */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Upload Gumasta*</label>
                                            <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm">
                                                <input type="file" className="hidden" id="gumastaUpload" />
                                                <label htmlFor="gumastaUpload" className="w-full text-gray-400 text-sm cursor-pointer">Upload Image*</label>
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3m0-6h-3V4h-2v5H9l3-3 3 3z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* GSTI Number */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">GSTI Number*</label>
                                            <input type="text" placeholder="GSTI Number*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media Links & Portfolio */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-6">Social Media Links & Portfolio</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* LinkedIn */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">LinkedIn Link* (Optional)</label>
                                            <input type="text" placeholder="LinkedIn Link*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                        </div>

                                        {/* Portfolio */}
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Portfolio Link* (Optional)</label>
                                            <input type="text" placeholder="Portfolio Link*" className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-8 px-8 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-900"
                                disabled={!roleType}
                                onClick={() => setStep(11)}
                            >
                                SIGN UP
                            </button>

                            <label className="flex items-center gap-2 text-sm text-gray-700 mt-4">
                                <input type="checkbox" className="accent-gray-700" /> I agree to our <span className="underline">PRIVACY POLICY</span> & <span className="underline">TERMS & CONDITION</span>
                            </label>
                        </div>
                    </div>
                )}

                {step === 6 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <AuthLeftSide />

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-3xl font-semibold">SIGN IN</h2>
                                <p className="text-sm text-gray-600">You Don’t have an account? Hit the Sign Up button</p>
                                <div className="flex flex-wrap gap-4 justify-center mt-3">
                                    <button
                                        className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 bg-gray-200 font-semibold"
                                        onClick={() => setStep(1)}
                                    >
                                        Sign Up
                                    </button>
                                    <button
                                        className="px-6 py-2 rounded-full bg-gray-700 text-white font-semibold"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t border-gray-300 my-6" />

                            <div className="space-y-8 w-full max-w-sm mx-auto">
                                {/* Email ID */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email ID*</label>
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                </div>

                                {/* Password */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Password*</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password*"
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center focus:outline-none"
                                        tabIndex={-1}
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                        >
                                            {showPassword ? (
                                                // Eye Off Icon
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12"
                                                />
                                            ) : (
                                                // Eye Icon
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z"
                                                />
                                            )}
                                        </svg>
                                    </button>

                                </div>

                                {/* Forgot Password */}
                                <div className="text-center" onClick={() => setStep(7)}>
                                    <a href="#" className="text-sm text-gray-700 font-semibold underline">Forgot Your Password?</a>
                                </div>

                                {/* Centered Sign In Button */}
                                <div className="flex justify-center">
                                    <button
                                        className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                        disabled={!roleType}
                                    >
                                        SIGN IN
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                )}

                {step === 7 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <AuthLeftSide />

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-3xl font-semibold">ENTER REGISTERD EMAIL</h2>
                                <p className="text-sm text-gray-600">We will send your OTP on your email address if we found
                                    your account.</p>
                            </div>

                            <hr className="w-2/3 border-t border-gray-300 my-6" />

                            <div className="space-y-8 w-full max-w-sm mx-auto">
                                {/* Email ID */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email ID*</label>
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                </div>

                                {/* Centered Sign In Button */}
                                <div className="flex justify-center">
                                    <button
                                        className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                        disabled={!roleType}
                                        onClick={() => setStep(8)}
                                    >
                                        SEND OTP
                                    </button>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="px-8 py-2 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-200"
                                        disabled={!roleType}
                                        onClick={() => setStep(6)}
                                    >
                                        CANCEL
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                )}

                {step === 8 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <AuthLeftSide />

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-3xl font-semibold">ENTER 6 DIGIT OTP</h2>
                                <p className="text-sm text-gray-600">We have sent you 6 Digit OTP  Code on your Register email Address
                                    Please Verify the OTP </p>
                            </div>

                            <hr className="w-2/3 border-t border-gray-300 my-6" />

                            <div className="space-y-8 w-full max-w-sm mx-auto">
                                {/* Email ID */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Enter OTP*</label>
                                    <input
                                        type="text"
                                        placeholder="6 Digit OTP*"
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                </div>
                                {/* RESEND OTP */}
                                <div className="text-center" onClick={() => setStep(7)}>
                                    <a href="#" className="text-sm text-gray-700 font-semibold underline">Did not Recived OTP. Resend It</a>
                                </div>

                                {/* Centered Sign In Button */}
                                <div className="flex justify-center">
                                    <button
                                        className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                        disabled={!roleType}
                                        onClick={() => setStep(9)}
                                    >
                                        GET OTP
                                    </button>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="px-8 py-2 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-200"
                                        disabled={!roleType}
                                        onClick={() => setStep(6)}
                                    >
                                        CANCEL
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                )}

                {step === 9 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <AuthLeftSide />

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">RESET PASSWORD</h2>
                                <p className="text-sm text-gray-600 mt-2">
                                    Set the new password for your account so you can <br />
                                    sign in and access all the features
                                </p>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-8 w-full max-w-sm mx-auto">
                                {/* New Password */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">New Password*</label>
                                    <input
                                        type={showNewPassword ? "text" : "password"}
                                        placeholder="New Password*"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword((prev) => !prev)}
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center focus:outline-none"
                                        tabIndex={-1}
                                    >
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            {showNewPassword ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z" />
                                            )}
                                        </svg>
                                    </button>
                                </div>

                                {/* Confirm Password */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Confirm Password*</label>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm Password*"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center focus:outline-none"
                                        tabIndex={-1}
                                    >
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            {showConfirmPassword ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4-4.5 7.5-9 7.5S3 16 3 12s4.5-7.5 9-7.5 9 3.5 9 7.5z" />
                                            )}
                                        </svg>
                                    </button>
                                </div>

                                {/* Password Instructions */}
                                <p className="text-xs text-gray-600 text-center">
                                    Use at least 8 character password included uppercase <br /> lowercase and one special character.
                                </p>

                                {/* Reset Password Button */}
                                <div className="flex justify-center">
                                    <button
                                        className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                        disabled={!roleType}
                                        onClick={() => setStep(10)}
                                    >
                                        RESET PASSWORD
                                    </button>
                                </div>

                                {/* Cancel Button */}
                                <div className="flex justify-center">
                                    <button
                                        className="px-8 py-2 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-200"
                                        disabled={!roleType}
                                        onClick={() => setStep(6)}
                                    >
                                        CANCEL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 10 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <AuthLeftSide />

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">CONGRATULATIONS</h2>
                                <p className="text-sm text-gray-600 mt-2">
                                    Your password is reset successfully. You can Sign In
                                    with your new password
                                </p>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-8 w-full max-w-sm mx-auto">




                                {/* BACK TO SIGN IN */}
                                <div className="flex justify-center">
                                    <button
                                        className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                        disabled={!roleType}
                                        onClick={() => setStep(6)}
                                    >
                                        BACK TO SIGN-IN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 11 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen shadow-md">
                            {/* Logo */}
                            <div className="flex items-center w-full mb-8">
                                <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                                <span className="ml-2 text-lg font-semibold text-blue-700">Lokachakra</span>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/founder.png" // Ensure the image is placed in the public folder
                                        alt="Founder"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">LOREM IPSUM IS TEXT</h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8 bg-white">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">Founders Sign-UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-8 w-full max-w-xl mx-auto">
                                {/* Startup Details Form Section */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Startup Details</h2>

                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Your Name*</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm" placeholder="Enter your full name" />
                                    </div>

                                    {/* Role */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Your Role*</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm" placeholder="e.g. Founder" />
                                    </div>

                                    {/* Startup Name */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Startup Name*</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm" placeholder="e.g. AIgenix" />
                                    </div>

                                    {/* Stage */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Startup Stage*</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm">
                                            <option>Idea</option>
                                            <option>Prototype</option>
                                            <option>MVP</option>
                                            <option>Revenue-generating</option>
                                            <option>Scaling</option>
                                        </select>
                                    </div>

                                    {/* Domain */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Domain(s)*</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm" placeholder="e.g. HealthTech, AI" />
                                    </div>

                                    {/* Biggest Challenge */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Biggest Challenge*</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm" placeholder="e.g. Market Access" />
                                    </div>

                                    {/* Collaborators Needed */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Collaborators Needed*</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm" placeholder="e.g. Investors, Mentors" />
                                    </div>

                                    {/* Seeking */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Currently Seeking*</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm" placeholder="e.g. Investments" />
                                    </div>

                                    {/* Growth Goals */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">12-Month Growth Goals*</label>
                                        <textarea rows={3} className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm" placeholder="e.g. Launch MVP and secure 10 pilot customers."></textarea>
                                    </div>

                                    {/* Preferred Funding Model */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Funding Model*</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm">
                                            <option>Equity</option>
                                            <option>Revenue-share</option>
                                            <option>Convertible Note</option>
                                        </select>
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Tech Stack*</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm" placeholder="e.g. Node.js, Solidity" />
                                    </div>

                                    {/* Funding Needed */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Funding Needed (USD)*</label>
                                        <input type="number" className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm" placeholder="e.g. 200000" />
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Location*</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm" placeholder="e.g. New York" />
                                    </div>

                                    {/* Fundraising Stage */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Fundraising Stage*</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 shadow-sm">
                                            <option>Pre-seed</option>
                                            <option>Seed</option>
                                            <option>Series A</option>
                                            <option>Series B+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* BACK TO SIGN IN */}
                            <div className="space-y-0 w-full max-w-sm mx-auto">


                                <div className="flex justify-center mt-8">
                                    <button
                                        className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                        disabled={!roleType}
                                    >
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>







                    </div>
                )}

                {step === 12 && (
                    <div className="w-full min-h-screen pt-0 pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen shadow-md">
                            {/* Logo */}
                            <div className="flex items-center w-full mb-8">
                                <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                                <span className="ml-2 text-lg font-semibold text-blue-700">Lokachakra</span>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/investor.png" // Ensure the image is placed in the public folder
                                        alt="Investor"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">LOREM IPSUM IS TEXT</h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">INVESTORS SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-8 w-full max-w-xl mx-auto">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Justin Wilson" />
                                </div>

                                {/* Organization */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Organization*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Robinson, Cooper and Nelson" />
                                </div>

                                {/* Investor Type */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Investor Type*</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option>VC</option>
                                        <option>Angel</option>
                                        <option>PE</option>
                                        <option>Family Office</option>
                                    </select>
                                </div>

                                {/* Ticket Size (USD) */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Ticket Size (USD)*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. 50000 - 100000" />
                                </div>

                                {/* Stage Focus */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Stage Focus*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Pre-seed, Seed" />
                                </div>

                                {/* Sector Focus */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Sector Focus*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Fintech, AI" />
                                </div>

                                {/* Geography */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Geography*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. USA, India" />
                                </div>

                                {/* Co-Investment Open */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Open to Co-Investment?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="false">No</option>
                                        <option value="true">Yes</option>
                                    </select>
                                </div>

                                {/* Co-Investment Type */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Co-Investment Type</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Syndicate, Direct" />
                                </div>

                                {/* Involvement Level */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Involvement Level</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Board Seat, Passive" />
                                </div>

                                {/* Evaluation Criteria */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Evaluation Criteria</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. CAC, Traction, TAM" />
                                </div>

                                {/* Mentoring & Advisory Interest */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Open to Mentoring?</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                            <option value="false">No</option>
                                            <option value="true">Yes</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Open to Advisory?</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                            <option value="false">No</option>
                                            <option value="true">Yes</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Metrics Tracked */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Metrics You Track</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. LTV, NPS, CAC" />
                                </div>

                                {/* Impact Alignment */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Impact Alignment?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="false">No</option>
                                        <option value="true">Yes</option>
                                    </select>
                                </div>

                                {/* Open to Impact Matches */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Open to Impact-Aligned Matches?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="false">No</option>
                                        <option value="true">Yes</option>
                                    </select>
                                </div>

                                {/* Red Flags */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Red Flags in Startups</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Unrealistic projections, No founder-market fit" />
                                </div>

                                {/* Exit Readiness Signals */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Exit Readiness Signals</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Steady revenue, High growth rate" />
                                </div>

                                {/* Deal Discovery */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Deal Discovery Preference</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option>Inbound</option>
                                        <option>Outbound</option>
                                        <option>Both</option>
                                    </select>
                                </div>

                                {/* Tools Used */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Tools You Use</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Crunchbase, Docsend" />
                                </div>

                                {/* Legal Partner Model */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Legal Partner Model</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option>In-house Legal</option>
                                        <option>External Legal</option>
                                        <option>Hybrid</option>
                                    </select>
                                </div>

                                {/* Deal Frequency */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Deal Frequency</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. 1-2 per quarter" />
                                </div>

                                {/* Portfolio */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Portfolio Companies</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Davis and Sons, Robinson-Garcia" />
                                </div>

                                {/* Support Needed */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Support Needed on Platform</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Better startup discovery, Legal sync tools" />
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-2">
                                    <button
                                        className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                        disabled={!roleType}
                                    >
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 13 && (
                    <div className="w-full min-h-screen pt-0 pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen shadow-md">
                            {/* Logo */}
                            <div className="flex items-center w-full mb-8">
                                <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                                <span className="ml-2 text-lg font-semibold text-blue-700">Lokachakra</span>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/accelerator.png" // Ensure the image is placed in the public folder
                                        alt="Accelerator"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">LOREM IPSUM IS TEXT</h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">ACCELERATOR SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-8 w-full max-w-xl mx-auto">
                                {/* Accelerator Name */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Accelerator Name*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Bryan and Sons" />
                                </div>

                                {/* Startup Types */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Types of Startups You Support*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. AI, FinTech" />
                                </div>

                                {/* Services Offered */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Services Offered*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Office Space, Legal, Funding" />
                                </div>

                                {/* Intake Size */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Intake Size*</label>
                                    <input type="number" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. 36" />
                                </div>

                                {/* Batch Frequency */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Batch Frequency*</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option>Monthly</option>
                                        <option>Quarterly</option>
                                        <option>Bi-Annually</option>
                                        <option>Annually</option>
                                    </select>
                                </div>

                                {/* Program Duration */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Program Duration*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. 6 months" />
                                </div>

                                {/* Stage Focus */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Stage Focus*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Idea, MVP" />
                                </div>

                                {/* Equity Taken */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Do You Take Equity?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Selection Criteria */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Selection Criteria*</label>
                                    <textarea className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Institution use act own politics." rows={2}></textarea>
                                </div>

                                {/* Rejection Criteria */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Rejection Criteria</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Outside approach ok." />
                                </div>

                                {/* Funding or Mentorship */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Primary Offering*</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option>Funding</option>
                                        <option>Mentorship</option>
                                        <option>Both</option>
                                    </select>
                                </div>

                                {/* Affiliations */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Affiliations</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Govt Body, University" />
                                </div>

                                {/* Delivery Mode */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Program Delivery Mode</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option>Online</option>
                                        <option>Offline</option>
                                        <option>Hybrid</option>
                                    </select>
                                </div>

                                {/* Cross Border Support */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Do You Support Cross-Border Startups?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Onboarding & Match Support */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Onboarding / Matching Support</label>
                                    <textarea className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Particularly respond cup pretty since." rows={2}></textarea>
                                </div>

                                {/* Open to Partnerships */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Open to Partnerships With</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Government, Experts" />
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-2">
                                    <button
                                        className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                    >
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {step === 14 && (
                    <div className="w-full min-h-screen pt-0 pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen shadow-md">
                            {/* Logo */}
                            <div className="flex items-center w-full mb-8">
                                <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                                <span className="ml-2 text-lg font-semibold text-blue-700">Lokachakra</span>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/mentor_research.png" // Ensure the image is placed in the public folder
                                        alt="Mentor Research"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">LOREM IPSUM IS TEXT</h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">MENTOR RESEARCHER SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-8 w-full max-w-xl mx-auto">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Kelsey Thomas" />
                                </div>

                                {/* Primary Field */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Primary Field of Research*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Policy" />
                                </div>

                                {/* Mentorship Open To */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Open to Mentorship For*</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option>Individuals</option>
                                        <option>Teams</option>
                                        <option>Both</option>
                                    </select>
                                </div>

                                {/* Mentorship Style Options */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Mentorship Style*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. 1:1, Group" />
                                </div>

                                {/* Research Outputs */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Research Outputs*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Policy Recs, Papers" />
                                </div>

                                {/* Desired Impact */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Desired Impact</label>
                                    <textarea className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Year field little federal." rows={2}></textarea>
                                </div>

                                {/* Current Research Stage */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Current Research Stage*</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option>Idea</option>
                                        <option>Proposal</option>
                                        <option>Data Collection</option>
                                        <option>Analysis</option>
                                        <option>Publication</option>
                                    </select>
                                </div>

                                {/* Collaborators Wanted */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Looking to Collaborate With</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Students, Peers" />
                                </div>

                                {/* Joint Project Interests */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in Joint Projects for*</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Feedback, Pilots" />
                                </div>

                                {/* Tools / Datasets Used */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Tools / Datasets You Use</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. GitHub, TensorFlow" />
                                </div>

                                {/* Availability */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Availability</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option>Weekly</option>
                                        <option>Bi-Weekly</option>
                                        <option>Monthly</option>
                                    </select>
                                </div>

                                {/* Preferred Communication */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Communication with Mentees</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option>Chat</option>
                                        <option>Email</option>
                                        <option>Video Call</option>
                                    </select>
                                </div>

                                {/* Paid or Voluntary */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Mentorship Type*</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option>Paid</option>
                                        <option>Voluntary</option>
                                        <option>Both</option>
                                    </select>
                                </div>

                                {/* Tracking Mentee Growth */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">How Do You Track Mentee Growth?</label>
                                    <textarea className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Early choice unit." rows={2}></textarea>
                                </div>

                                {/* Network Memberships */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Networks You Are Part Of</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. MentorNet" />
                                </div>

                                {/* Challenges as Mentor */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Challenges You&apos;ve Faced as a Mentor</label>
                                    <textarea className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800" placeholder="e.g. Own people total within situation thousand." rows={2}></textarea>
                                </div>

                                {/* Interest in Value-Aligned Matches */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in Value-Aligned Matches?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-2">
                                    <button
                                        className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                    >
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {step === 15 && (
                    <div className="w-full min-h-screen pt-0 pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen shadow-md">
                            {/* Logo */}
                            <div className="flex items-center w-full mb-8">
                                <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                                <span className="ml-2 text-lg font-semibold text-blue-700">Lokachakra</span>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/executive.png" // Ensure the image is placed in the public folder
                                        alt="Executive"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">LOREM IPSUM IS TEXT</h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">EXECUTIVE SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-8 w-full max-w-xl mx-auto">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Paul Willis"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Current Role */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Current Role*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. COO"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Organization Type */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Organization Type*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. NGO, Corporation"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Key Performance Indicators (KPIs) */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Key KPIs You Track</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Retention, User Acquisition"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Finding Partners */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">What Are You Looking for in a Partner?</label>
                                    <textarea
                                        placeholder="e.g. Meet down term."
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Strategic Priorities */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Your Strategic Priorities*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Efficiency, Innovation"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Exploring Areas */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Areas You Are Exploring</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Partnerships"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Technology Interests */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Technology Interests</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Blockchain, Cloud"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Roles You Are Seeking */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Seeking Roles / Support</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Talent, Advisors"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Investment / Mentorship Interest */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Investing, Mentorship"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Type of Firms You Prefer */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Type of Firms You Prefer</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Startups, Enterprises"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Industry Challenges */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Industry Challenges You’re Facing</label>
                                    <textarea
                                        placeholder="e.g. Direction every dream."
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Delegatable Areas */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Areas You Want to Delegate</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Tech, Marketing"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Budget Mandate */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Budget Mandate*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. $231981"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-2">
                                    <button
                                        className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900"
                                    >
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {step === 16 && (
                    <div className="w-full min-h-screen pt-0 pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen shadow-md">
                            {/* Logo */}
                            <div className="flex items-center w-full mb-8">
                                <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                                <span className="ml-2 text-lg font-semibold text-blue-700">Lokachakra</span>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/government.png" // Ensure the image is placed in the public folder
                                        alt="Government"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">LOREM IPSUM IS TEXT</h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">GOVERNMENT AUTHORITY SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-8 w-full max-w-xl mx-auto">
                                {/* Department */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Department*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Grant Body"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Domains Regulated */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Domains Regulated*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Healthcare, Cybersecurity"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Organization Type */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Organization Type*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Agency, Commission"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Position Held */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Position Held*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Head"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Years Active */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Years Active in Role*</label>
                                    <input
                                        type="number"
                                        placeholder="e.g. 1"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        min="0"
                                    />
                                </div>

                                {/* Past Challenges */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Challenges You&apos;ve Faced</label>
                                    <textarea
                                        placeholder="e.g. Kitchen later lot eye billion sort."
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Interest in Innovation */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in Innovation Projects?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Collaboration With */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in Collaborating With</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Startups, NGOs"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Dashboards or Tools Used */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Dashboards or Tools Used</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Govt Portal"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Match with Policy/Research */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in Policy/Research Matching?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Focus Area */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Primary Focus Area*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Policy-making"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Collaboration Style */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Collaboration Style</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Open Network"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Expected Start Timeline */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Expected Start Timeline</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. 1-3 months"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Impact Evaluation Preference */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Impact Evaluation Preference</label>
                                    <textarea
                                        placeholder="e.g. Like him child series room."
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Partnership Constraints */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Partnership Constraints</label>
                                    <textarea
                                        placeholder="e.g. Fast technology follow."
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-2">
                                    <button className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900">
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {step === 17 && (
                    <div className="w-full min-h-screen pt-0 pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen shadow-md">
                            {/* Logo */}
                            <div className="flex items-center w-full mb-8">
                                <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                                <span className="ml-2 text-lg font-semibold text-blue-700">Lokachakra</span>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/legal.png" // Ensure the image is placed in the public folder
                                        alt="Legal"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">LOREM IPSUM IS TEXT</h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">LEGAL SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-8 w-full max-w-xl mx-auto">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Cheryl Herrera"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Current Role */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Current Role*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Auditor"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Specialization */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Specializations*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Crypto Compliance, IP"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Tools Used */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Tools You Use</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Custom ERP, LexisNexis"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Looking to Offer */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Looking to Offer*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Collaboration"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Startup Advisory Experience */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Have Startup Advisory Experience?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Industry Sectors */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Industry Sectors*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Tech, Health"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Engagement Mode */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Engagement Mode*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Retainer"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Mentorship Availability */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Available for Mentorship?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Common Legal Challenges */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Common Legal Challenges You See</label>
                                    <textarea
                                        placeholder="e.g. Happen range feel baby yes."
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Update Channels */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Update Channels</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Webinars, Newsletters"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Client Types */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Types of Clients Served</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Corporates, Startups"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Privacy Concerns */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Privacy Concerns or Limitations</label>
                                    <textarea
                                        placeholder="e.g. Manager popular candidate because peace."
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-2">
                                    <button className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900">
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {step === 18 && (
                    <div className="w-full min-h-screen pt-0 pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen shadow-md">
                            {/* Logo */}
                            <div className="flex items-center w-full mb-8">
                                <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                                <span className="ml-2 text-lg font-semibold text-blue-700">Lokachakra</span>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/cybersecurity.png" // Ensure the image is placed in the public folder
                                        alt="Cybersecurity"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">LOREM IPSUM IS TEXT</h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">CYBERSECURITY SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-8 w-full max-w-xl mx-auto">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. John Knight"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Specialization Areas */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Specialization Areas*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. DevOps, Security Audits"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Domain */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Domain*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Cloud"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Gig Preference */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Gig Preference*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Long-term Strategy"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Objectives */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Objectives*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Learn, Share Expertise"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Tools/Frameworks */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Tools / Frameworks*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Nmap, Metasploit"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Preferred Update Method */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Update Method</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Conferences"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Need Access to Logs */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Require Log Access?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Interested in Mentorship */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in Mentorship?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Certifications */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Certifications</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. AWS Sec, OSCP"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Team Preference */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Team Preference*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Team-based"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Partnership Type */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Partnership Type</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Informal"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Biggest Challenge */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Biggest Challenge</label>
                                    <textarea
                                        placeholder="e.g. Access control"
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-2">
                                    <button className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900">
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {step === 19 && (
                    <div className="w-full min-h-screen pt-0 pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen shadow-md">
                            {/* Logo */}
                            <div className="flex items-center w-full mb-8">
                                <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                                <span className="ml-2 text-lg font-semibold text-blue-700">Lokachakra</span>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/freelancers.png" // Ensure the image is placed in the public folder
                                        alt="Freelancer"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">LOREM IPSUM IS TEXT</h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">FREELANCER SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-2 w-full max-w-xl mx-auto">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Carol Curry"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Expertise Area */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Expertise Area*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Writing"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Preferred Clients */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Client Types*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Startups, Government"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Work Mode */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Work Mode*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Part-time"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Experience Level */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Experience Level*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Junior"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Project Timeline */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Project Timeline*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Ongoing"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Finding Platforms */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Freelancing Platforms Used*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Upwork, Lokachakra"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Communication Style */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Communication Style</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Regular Syncs"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Team Work Preference */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Team Work Preference*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Team"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Open to Crypto Gigs */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Open to Crypto Gigs?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="false">No</option>
                                        <option value="true">Yes</option>
                                    </select>
                                </div>

                                {/* Verification Preference */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Verification Preference</label>
                                    <textarea
                                        placeholder="e.g. Strategy from."
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-2">
                                    <button className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900">
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {step === 20 && (
                    <div className="w-full min-h-screen pt-0 pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen shadow-md">
                            {/* Logo */}
                            <div className="flex items-center w-full mb-8">
                                <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                                <span className="ml-2 text-lg font-semibold text-blue-700">Lokachakra</span>
                            </div>

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/exit_planner.png" // Ensure the image is placed in the public folder
                                        alt="Exit Planner"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">LOREM IPSUM IS TEXT</h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold">EXIT PLANNER SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-gray-700 text-white text-sm">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-gray-400 text-gray-800 text-sm"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            <div className="space-y-8 w-full max-w-xl mx-auto">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Natasha Brewer"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Focus Side */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Focus Side*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Buy-side"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Deal Size Range */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Deal Size Range (USD)*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. 233782 - 2370685"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Team Structure */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Team Structure*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Independent"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Support Needed */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Support Needed*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Business Dev, Valuation"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Transaction Type */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Transaction Type*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Immediate, Pipeline"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Operating Sectors */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Operating Sectors*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Health, Manufacturing"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Red Flags */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Red Flags</label>
                                    <textarea
                                        placeholder="e.g. Leave six me short."
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Readiness Validation */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Readiness Validation</label>
                                    <textarea
                                        placeholder="e.g. Hope sign study customer onto."
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Discovery Preference */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Deal Discovery Preference*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Inbound"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Tools Used */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Tools You Use*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. CapIQ, Pitchbook"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Partnered Work */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Work in Partnership?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Deal Frequency */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Deal Frequency</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Quarterly"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    />
                                </div>

                                {/* Lokachakra Support */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Support Expected from Lokachakra</label>
                                    <textarea
                                        placeholder="e.g. Pattern difficult become music cup."
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-2">
                                    <button className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-900">
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}



            </div>
            <ChatBot />
            <Footer />
        </>
    );
}
