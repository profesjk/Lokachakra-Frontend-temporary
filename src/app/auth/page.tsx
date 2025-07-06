"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ChatBot from '../sections/ChatBot';


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

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/workillustration.png" // Ensure the image is placed in the public folder
                                        alt="Welcome Back"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                                Welcome Back to Lokachakra
                            </h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Continue your journey with the community that&apos;s shaping the future of innovation. Access powerful tools, connect with changemakers, and keep building what matters. We&apos;re glad to have you back.
                            </p>
                        </div>
        );
    }

    return (
        <>
            
            <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-gray-800">
                {step === 1 && (
                    <div className="w-full max-w-6xl p-6 flex flex-col items-center bg-white rounded-xl shadow-sm">
                        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-800">
                            Choose Your Category
                        </h1>

                        {/* Profile Selection */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-6 place-items-center mb-12">
                            {roles.map((r, index) => (
                                <div
                                    key={r}
                                    className={`flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 ${role === r ? 'text-blue-700 font-semibold' : 'text-gray-600'
                                        } ${index % 2 === 0 ? '-translate-y-7' : 'translate-y-7'}`}
                                    onClick={() => setRole(r)}
                                >
                                    {/* Profile image */}
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

                                        {/* Vertical Line + Dot */}
                                        <div className="h-6 w-1 bg-blue-200 mt-1 mb-1"></div>
                                        <div className="w-3 h-3 rounded-full bg-blue-400 mb-2"></div>
                                    </div>

                                    {/* Label */}
                                    <div className="text-center">
                                        <div className="text-base uppercase tracking-wide">{r}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Continue Button */}
                        <button
                            className="px-7 py-2 bg-[#0066FF] text-white rounded-full hover:bg-white hover:text-[#0066FF] border-2 border-[#0066FF] transition duration-300 font-semibold"
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

                        {/* Policy Links */}
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

                {step === 6 && (
                    <div className="w-full min-h-screen pt-[0px] pb-0 flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 min-h-screen shadow-md">
                            {/* Logo */}
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

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/workillustration.png" // Ensure the image is placed in the public folder
                                        alt="Welcome Back"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                                Welcome Back to Lokachakra
                            </h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Continue your journey with the community that&apos;s shaping the future of innovation. Access powerful tools, connect with changemakers, and keep building what matters. We&apos;re glad to have you back.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 flex flex-col items-center justify-start p-6 sm:p-8 bg-white">
                            <div className="text-center mb-4">
                                <h2 className="text-3xl font-semibold text-blue-700">Sign In to Lokachakra</h2>
                                <p className="text-sm text-gray-600">
                                    Don’t have an account? Hit the Sign Up button
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center mt-3">
                                    <button
                                        className="px-6 py-2 rounded-full border-2 border-[#0066FF] text-[#0066FF] bg-white hover:bg-[#0066FF] hover:text-white font-semibold transition"
                                        onClick={() => setStep(1)}
                                    >
                                        Sign Up
                                    </button>
                                    <button
                                        className="px-6 py-2 rounded-full bg-[#0066FF] text-white font-semibold hover:bg-blue-800 transition"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t border-gray-200 my-6" />

                            <div className="space-y-8 w-full max-w-sm mx-auto">
                                {/* Email ID */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email ID*</label>
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                                    />
                                </div>

                                {/* Password */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Password*</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password*"
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
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
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13.875 18.825A10.05 10.05 0 0112 19.5c-4.5 0-8.25-2.625-9.75-6.75a10.08 10.08 0 012.1-3.225m3.15-2.55A9.976 9.976 0 0112 4.5c4.5 0 8.25 2.625 9.75 6.75a9.978 9.978 0 01-4.5 5.325M15 12a3 3 0 11-6 0 3 3 0 016 0zm-7.5 7.5l12-12"
                                                />
                                            ) : (
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
                                    <a href="#" className="text-sm text-[#0066FF] font-semibold underline hover:text-blue-800">
                                        Forgot Your Password?
                                    </a>
                                </div>

                                {/* Centered Sign In Button */}
                                <div className="flex justify-center">
                                    <button
                                        className="px-8 py-2 rounded-full bg-[#0066FF] text-white font-semibold hover:bg-blue-800 transition disabled:opacity-90"
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
                    <div className="w-full h-screen flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 h-screen fixed top-0 left-0 shadow-md">
                            {/* Logo */}
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

                            {/* Image */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/founder.png" // Ensure this image is in /public folder
                                        alt="Founder"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                                Join as a Founder
                            </h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Be part of an exclusive network of visionaries building the future. Sign up to share your startup, connect with investors, and access powerful tools to accelerate your journey.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 md:ml-auto flex flex-col items-center justify-start p-6 sm:p-8 h-screen overflow-y-auto">
                            {/* Title & Actions */}
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-bold text-[#0066FF]">Founders Sign-Up</h2>
                                <p className="text-sm text-gray-600">Already have an account? Hit the Sign In button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-[#0066FF] text-white text-sm hover:bg-blue-700 transition">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 text-sm hover:bg-blue-50 transition"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            {/* Form */}
                            <div className="space-y-6 w-full max-w-3xl mx-auto">
                                <h2 className="text-lg font-semibold text-blue-800 mb-2">Startup Details</h2>

                                {/* Row 1: Name + Role */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name*</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Your Role*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Founder"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Startup Name + Stage */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Startup Name*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. ChainMed Solutions"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Startup Stage*</label>
                                        <select className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                            <option>Idea</option>
                                            <option>Prototype</option>
                                            <option>MVP</option>
                                            <option>Revenue-generating</option>
                                            <option>Scaling</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 3: Domain + Challenge */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Domain(s)*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. HealthTech, Blockchain"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Biggest Challenge*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Market Access"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                </div>

                                {/* Row 4: Collaborators Needed + Currently Seeking */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Collaborators Needed*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Investors, Technical Experts"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Currently Seeking*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Investments"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                </div>

                                {/* Growth Goals */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">12-Month Growth Goals*</label>
                                    <textarea
                                        rows={3}
                                        placeholder="e.g. Enter 3 new regional markets and hire sales team."
                                        className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Row 5: Interested in Accelerator + Preferred Model */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Interested in Accelerator?</label>
                                        <select className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Model*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Revenue-share"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                </div>

                                {/* Row 6: Tech Stack + Hiring Needs */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Tech Stack*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Node.js, React"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Hiring Needs*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Backend, Frontend"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                </div>

                                {/* Row 7: Funding Needed + Location */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Funding Needed (USD)*</label>
                                        <input
                                            type="number"
                                            placeholder="e.g. 465244"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Location*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. New York"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                </div>

                                {/* Row 8: Previous Support + Product Type */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Previous Support Used*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Incubator"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Product Type*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Marketplace"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                        />
                                    </div>
                                </div>

                                {/* Row 9: Co-Founder Need + Fundraising Stage */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Co-Founder Needed?</label>
                                        <select className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Fundraising Stage*</label>
                                        <select className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800">
                                            <option>Pre-seed</option>
                                            <option>Seed</option>
                                            <option>Series A</option>
                                            <option>Series B+</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Traction Summary */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Traction Summary*</label>
                                    <textarea
                                        rows={3}
                                        placeholder="e.g. Secured letters of intent from 5 enterprise clients."
                                        className="w-full border border-blue-200 rounded-xl px-4 py-2 shadow-sm text-gray-800"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center mt-8">
                                    <button
                                        className="px-8 py-2 rounded-full bg-[#0066FF] text-white font-semibold hover:bg-blue-700 transition"
                                    >
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}


                {step === 12 && (
                    <div className="w-full h-screen flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 h-screen fixed top-0 left-0 shadow-md">
                            {/* Logo */}
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

                            {/* Image */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/investor.png" // Make sure this image is in /public
                                        alt="Investor"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                                Join as an Investor
                            </h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Discover promising startups and connect directly with passionate founders. Sign up to explore investment opportunities and support the next wave of innovation.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 md:ml-auto flex flex-col items-center justify-start p-6 sm:p-8 h-screen overflow-y-auto">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold text-[#0066FF]">INVESTORS SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-[#0066FF] text-white text-sm">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-[#0066FF] text-[#0066FF] text-sm hover:bg-[#0066FF] hover:text-white"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            {/* Form */}
                            <div className="space-y-6 w-full max-w-4xl mx-auto">
                                <h2 className="text-lg font-semibold text-blue-800 mb-4">Investor Details</h2>

                                {/* Row 1: Name + Organization */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Justin Wilson"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Organization*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Robinson, Cooper and Nelson"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Investor Type + Ticket Size */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Investor Type*</label>
                                        <select className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm">
                                            <option>VC</option>
                                            <option>Angel</option>
                                            <option>PE</option>
                                            <option>Family Office</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Ticket Size (USD)*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. 50000 - 100000"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Stage Focus + Sector Focus */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Stage Focus*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Pre-seed, Seed"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Sector Focus*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Fintech, AI"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                </div>

                                {/* Row 4: Geography + Co-Investment */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Geography*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. USA, India"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Open to Co-Investment?</label>
                                        <select className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 5: Co-Investment Type + Involvement Level */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Co-Investment Type</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Syndicate, Direct"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Involvement Level</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Board Seat, Passive"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                </div>

                                {/* Row 6: Evaluation Criteria + Deal Discovery */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Evaluation Criteria</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. CAC, Traction, TAM"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Deal Discovery</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Inbound, Outbound, Both"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                </div>

                                {/* Row 7: Tools Used + Legal Partner Model */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Tools Used</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Crunchbase, Docsend"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Legal Partner Model</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. In-house Legal"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                </div>

                                {/* Row 8: Deal Frequency + Portfolio */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Deal Frequency</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. 1-2 per quarter"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Portfolio</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Davis and Sons, Robinson-Garcia"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                </div>

                                {/* Row 9: Mentoring + Advisory Interest */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Mentoring Interest?</label>
                                        <select className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Advisory Interest?</label>
                                        <select className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 10: Metrics Tracked + Impact Alignment */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Metrics You Track</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. LTV, NPS, CAC"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Impact Alignment?</label>
                                        <select className="w-full border border-blue-200 rounded-xl px-4 py-2 text-gray-800 shadow-sm">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center mt-8">
                                    <button
                                        className="px-8 py-2 rounded-full bg-[#0066FF] text-white font-semibold hover:bg-blue-700 transition"
                                    >
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}


                {step === 13 && (
                    <div className="w-full h-screen flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 h-screen fixed top-0 left-0 shadow-md">
                            {/* Logo */}
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

                            {/* Image */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/accelerators.png" // Make sure this image is in /public
                                        alt="Accelerator"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                                Join as an Accelerator
                            </h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Connect with high-potential startups and offer them the mentorship, resources, and support they need to grow. Sign up to discover founders ready to scale and make an impact.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 md:ml-auto flex flex-col items-center justify-start p-6 sm:p-8 h-screen overflow-y-auto">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold text-[#0066FF]">ACCELERATOR SIGN UP</h2>
                                <p className="text-sm text-gray-600">Already have an account? Hit the Sign In button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-[#0066FF] text-white text-sm hover:bg-blue-700 transition">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 text-sm hover:bg-blue-50 transition"
                                        onClick={() => setStep(6)}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <hr className="w-2/3 border-t-2 border-blue-500 my-6" />

                            {/* Form */}
                            <div className="space-y-4 w-full max-w-xl mx-auto">
                                {/* Accelerator Name */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Accelerator Name*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Bryan and Sons"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                {/* Startup Types */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Types of Startups You Support*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. AI, FinTech"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                {/* Services Offered */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Services Offered*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Office Space, Legal, Funding"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                {/* Intake Size */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Intake Size*</label>
                                    <input
                                        type="number"
                                        placeholder="e.g. 36"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                {/* Batch Frequency */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Batch Frequency*</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                        <option>Monthly</option>
                                        <option>Quarterly</option>
                                        <option>Bi-Annually</option>
                                        <option>Annually</option>
                                    </select>
                                </div>

                                {/* Program Duration */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Program Duration*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. 6 months"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                {/* Stage Focus */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Stage Focus*</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Idea, MVP"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                {/* Equity Taken */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Do You Take Equity?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Selection Criteria */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Selection Criteria*</label>
                                    <textarea
                                        placeholder="e.g. Innovative ideas, strong team"
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    ></textarea>
                                </div>

                                {/* Rejection Criteria */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Rejection Criteria</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Outside target geography"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                {/* Primary Offering */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Primary Offering*</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                        <option>Funding</option>
                                        <option>Mentorship</option>
                                        <option>Both</option>
                                    </select>
                                </div>

                                {/* Affiliations */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Affiliations</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Govt Body, University"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                {/* Delivery Mode */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Program Delivery Mode</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                        <option>Online</option>
                                        <option>Offline</option>
                                        <option>Hybrid</option>
                                    </select>
                                </div>

                                {/* Cross-Border Support */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Do You Support Cross-Border Startups?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Onboarding Support */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Onboarding / Matching Support</label>
                                    <textarea
                                        placeholder="e.g. Tailored onboarding plans for each startup"
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    ></textarea>
                                </div>

                                {/* Partnerships */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Open to Partnerships With</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Government, Experts"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-4">
                                    <button
                                        className="px-8 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                                    >
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}


                {step === 14 && (
                    <div className="w-full h-screen flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 h-screen fixed top-0 left-0 shadow-md">
                            {/* Logo */}
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
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                                Join as a Mentor / Research Expert
                            </h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Share your expertise to guide emerging startups or contribute valuable insights through research. Sign up to mentor passionate founders and help shape the future of innovation.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 md:ml-auto flex flex-col items-center justify-start p-6 sm:p-8 bg-white shadow-xl rounded-3xl h-screen overflow-y-auto">
                            <div className="text-center mb-6">
                                <h2 className="text-4xl font-bold text-blue-800">MENTOR RESEARCHER SIGN UP</h2>
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
                                {/* Row 1: Full Name + Primary Field */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                            placeholder="e.g. Kelsey Thomas"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Primary Field of Research*</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                            placeholder="e.g. Policy"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Mentorship Open To + Mentorship Style */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Open to Mentorship For*</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                            <option>Individuals</option>
                                            <option>Teams</option>
                                            <option>Both</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Mentorship Style*</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                            placeholder="e.g. 1:1, Group"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Research Outputs + Current Research Stage */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Research Outputs*</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                            placeholder="e.g. Policy Recs, Papers"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Current Research Stage*</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                            <option>Idea</option>
                                            <option>Proposal</option>
                                            <option>Data Collection</option>
                                            <option>Analysis</option>
                                            <option>Publication</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 4: Collaborators + Joint Project Interests */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Looking to Collaborate With</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                            placeholder="e.g. Students, Peers"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in Joint Projects for*</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                            placeholder="e.g. Feedback, Pilots"
                                        />
                                    </div>
                                </div>

                                {/* Row 5: Tools/Datasets + Availability */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Tools / Datasets You Use</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                            placeholder="e.g. GitHub, TensorFlow"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Availability</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                            <option>Weekly</option>
                                            <option>Bi-Weekly</option>
                                            <option>Monthly</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 6: Preferred Communication + Mentorship Type */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Communication with Mentees</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                            <option>Chat</option>
                                            <option>Email</option>
                                            <option>Video Call</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Mentorship Type*</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                            <option>Paid</option>
                                            <option>Voluntary</option>
                                            <option>Both</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Larger Textareas */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Desired Impact</label>
                                    <textarea
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        placeholder="e.g. Drive sustainable development"
                                        rows={2}
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">How Do You Track Mentee Growth?</label>
                                    <textarea
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        placeholder="e.g. Progress reports and feedback sessions"
                                        rows={2}
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Challenges You&apos;ve Faced as a Mentor</label>
                                    <textarea
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        placeholder="e.g. Balancing time between research and mentoring"
                                        rows={2}
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Networks You Are Part Of</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        placeholder="e.g. MentorNet"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in Value-Aligned Matches?</label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-4">
                                    <button
                                        className="px-8 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                                    >
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}


                {step === 15 && (
                    <div className="w-full h-screen flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 h-screen fixed top-0 left-0 shadow-md">
                            {/* Logo */}
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

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/executives.png" // Ensure the image is placed in the public folder
                                        alt="Executive"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                                Join as an Executive
                            </h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Connect with high-growth startups seeking experienced leadership. Sign up to explore strategic roles, contribute to impactful ventures, and drive meaningful change.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 md:ml-auto flex flex-col items-center justify-start p-6 sm:p-8 bg-white shadow-xl rounded-3xl h-screen overflow-y-auto">
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-bold text-blue-800">EXECUTIVE SIGN UP</h2>
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
                                {/* Row 1: Full Name + Current Role */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Paul Willis"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Current Role*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. COO"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Organization Type + Strategic Priorities */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Organization Type*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. NGO, Corporation"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Your Strategic Priorities*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Efficiency, Innovation"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: KPIs + Budget Mandate */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Key KPIs You Track</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Retention, User Acquisition"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Budget Mandate*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. $500,000"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 4: Technology Interests + Delegatable Areas */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Technology Interests</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Blockchain, Cloud"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Areas You Want to Delegate</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Tech, Marketing"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 5: Roles You Are Seeking + Type of Firms */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Seeking Roles / Support</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Talent, Advisors"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Type of Firms You Prefer</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Startups, Enterprises"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Large Textareas */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">What Are You Looking for in a Partner?</label>
                                    <textarea
                                        placeholder="e.g. Strategic alignment and innovation mindset"
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Industry Challenges You’re Facing</label>
                                    <textarea
                                        placeholder="e.g. Adapting to fast-paced innovation cycles"
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-4">
                                    <button className="px-8 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}


                {step === 16 && (
                    <div className="w-full h-screen flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 h-screen fixed top-0 left-0 shadow-md">
                            {/* Logo */}
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
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                                Join as a Government Authority
                            </h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Collaborate with startups and innovation ecosystems to drive policy, funding, and national development. Sign up to support emerging ventures and enable impactful public-private partnerships.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 md:ml-auto flex flex-col items-center justify-start p-6 sm:p-8 bg-white shadow-xl rounded-3xl h-screen overflow-y-auto">
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-bold text-blue-800">GOVERNMENT AUTHORITY SIGN UP</h2>
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
                                {/* Row 1: Department + Domains Regulated */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Department*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Grant Body"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Domains Regulated*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Healthcare, Cybersecurity"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Organization Type + Position Held */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Organization Type*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Agency, Commission"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Position Held*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Head"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Years Active + Primary Focus Area */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Years Active in Role*</label>
                                        <input
                                            type="number"
                                            placeholder="e.g. 1"
                                            min="0"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Primary Focus Area*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Policy-making"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 4: Collaboration With + Dashboards Used */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in Collaborating With</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Startups, NGOs"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Dashboards or Tools Used</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Govt Portal"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Dropdown Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in Innovation Projects?</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in Policy/Research Matching?</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Single Column Textareas */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Challenges You’ve Faced</label>
                                    <textarea
                                        placeholder="e.g. Resource allocation, technology adoption"
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Impact Evaluation Preference</label>
                                    <textarea
                                        placeholder="e.g. Quarterly reports and analytics"
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Partnership Constraints</label>
                                    <textarea
                                        placeholder="e.g. Budgetary limitations, policy restrictions"
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-4">
                                    <button className="px-8 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}


                {step === 17 && (
                    <div className="w-full h-screen flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 h-screen fixed top-0 left-0 shadow-md">
                            {/* Logo */}
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
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                                Join as a Legal Expert
                            </h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Support startups with legal guidance, compliance, and intellectual property protection. Sign up to offer your legal expertise and help ventures build on a strong foundation.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 md:ml-auto flex flex-col items-center justify-start p-6 sm:p-8 bg-white shadow-xl rounded-3xl h-screen overflow-y-auto">
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-bold text-blue-800">LEGAL SIGN UP</h2>
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
                                {/* Row 1: Full Name + Current Role */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Cheryl Herrera"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Current Role*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Auditor"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Specializations + Tools Used */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Specializations*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Crypto Compliance, IP"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Tools You Use</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Custom ERP, LexisNexis"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Looking to Offer + Industry Sectors */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Looking to Offer*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Collaboration"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Industry Sectors*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Tech, Health"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 4: Engagement Mode + Startup Advisory Experience */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Engagement Mode*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Retainer"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Startup Advisory Experience?</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 5: Mentorship Availability + Preferred Update Channels */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Available for Mentorship?</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Update Channels</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Webinars, Newsletters"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Single Column: Textareas */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Common Legal Challenges You See</label>
                                    <textarea
                                        placeholder="e.g. Contract clarity, IP disputes"
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Types of Clients Served</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Corporates, Startups"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Privacy Concerns or Limitations</label>
                                    <textarea
                                        placeholder="e.g. Sensitive data handling policies"
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-4">
                                    <button className="px-8 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}


                {step === 18 && (
                    <div className="w-full h-screen flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 h-screen fixed top-0 left-0 shadow-md">
                            {/* Logo */}
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
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                                Join as a Cybersecurity Expert
                            </h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Protect startups from digital threats by offering security assessments, risk management, and compliance solutions. Sign up to help founders build safe and resilient digital products.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 md:ml-auto flex flex-col items-center justify-start p-6 sm:p-8 bg-white shadow-xl rounded-3xl h-screen overflow-y-auto">
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-bold text-blue-800">CYBERSECURITY SIGN UP</h2>
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
                                {/* Row 1: Full Name + Specialization Areas */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. John Knight"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Specialization Areas*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. DevOps, Security Audits"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Domain + Gig Preference */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Domain*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Cloud"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Gig Preference*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Long-term Strategy"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Objectives + Tools/Frameworks */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Objectives*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Learn, Share Expertise"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Tools / Frameworks*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Nmap, Metasploit"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 4: Preferred Update Method + Require Log Access */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Update Method</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Conferences"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Require Log Access?</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 5: Interested in Mentorship + Certifications */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Interested in Mentorship?</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Certifications</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. AWS Sec, OSCP"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 6: Team Preference + Preferred Partnership Type */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Team Preference*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Team-based"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Partnership Type</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Informal"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Textarea: Biggest Challenge */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Biggest Challenge</label>
                                    <textarea
                                        placeholder="e.g. Access control"
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-4">
                                    <button className="px-8 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}


                {step === 19 && (
                    <div className="w-full h-screen flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 h-screen fixed top-0 left-0 shadow-md">
                            {/* Logo */}
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

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/freelancers.png" // Ensure the image is placed in the public folder
                                        alt="Freelancer"
                                        width={420}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                                Join as a Freelancer
                            </h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Work with innovative startups on exciting projects across design, development, content, marketing, and more. Sign up to find meaningful freelance opportunities and grow your portfolio.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 md:ml-auto flex flex-col items-center justify-start p-6 sm:p-8 bg-white shadow-xl rounded-3xl h-screen overflow-y-auto">
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-bold text-blue-800">FREELANCER SIGN UP</h2>
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
                                {/* Row 1: Full Name + Expertise Area */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Carol Curry"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Expertise Area*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Writing"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Preferred Clients + Work Mode */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Client Types*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Startups, Government"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Work Mode*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Part-time"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Experience Level + Project Timeline */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Experience Level*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Junior"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Preferred Project Timeline*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Ongoing"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 4: Platforms Used + Communication Style */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Freelancing Platforms Used*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Upwork, Lokachakra"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Communication Style</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Regular Syncs"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Row 5: Team Work Preference + Open to Crypto Gigs */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Team Work Preference*</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Team"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-gray-700">Open to Crypto Gigs?</label>
                                        <select className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                            <option value="false">No</option>
                                            <option value="true">Yes</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Verification Preference */}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Verification Preference</label>
                                    <textarea
                                        placeholder="e.g. Strategy form."
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-4">
                                    <button className="px-8 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                                        SIGN-UP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}


                {step === 20 && (
                    <div className="w-full h-screen flex flex-col md:flex-row bg-white">
                        {/* Left Section */}
                        <div className="md:w-1/2 bg-gray-100 flex flex-col items-center justify-start p-6 sm:p-10 h-screen fixed top-0 left-0 shadow-md">
                            {/* Logo */}
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

                            {/* Image Placeholder */}
                            <div className="flex-grow flex items-center justify-center my-8">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 border border-blue-300 flex items-center justify-center bg-white">
                                    <Image
                                        src="/exit_planners.png" // Ensure the image is placed in the public folder
                                        alt="Exit Planner"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-blue-800">
                                Join as an Exit Planner
                            </h2>
                            <p className="text-sm sm:text-base text-center text-gray-700 max-w-md mt-3 px-4">
                                Help founders prepare for successful exits through strategic planning, M&A support, and valuation insights. Sign up to guide startups through smooth and rewarding transitions.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-1/2 md:ml-auto flex flex-col items-center justify-start p-6 sm:p-8 h-screen overflow-y-auto">
                            <div className="text-center mb-4">
                                <h2 className="text-4xl font-semibold text-blue-700">EXIT PLANNER SIGN UP</h2>
                                <p className="text-sm text-gray-600">You already have an account? Hit the sign in button</p>
                                <div className="flex gap-4 justify-center mt-3 flex-wrap">
                                    <button className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 transition">Sign Up</button>
                                    <button
                                        className="px-6 py-2 rounded-full border border-blue-300 text-blue-600 text-sm hover:bg-blue-50 transition"
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
                                    <button className="px-8 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                                        SIGN-UP
                                    </button>
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
