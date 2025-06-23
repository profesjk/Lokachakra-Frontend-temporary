'use client';
import { useState } from 'react';
import Image from 'next/image';

const faqData = [
    {
        question: 'What is Lokachakra and how does it benefit my lifestyle?',
        answer:
            'Lokachakra is a holistic wellness philosophy rooted in ancient Indian wisdom. It aims to align mind, body, soul, and community for a more balanced, fulfilled life.',
    },
    {
        question: 'How does Lokachakra differ from traditional wellness systems?',
        answer:
            'Unlike many wellness systems focused on physical health, Lokachakra integrates spiritual growth, mental clarity, sustainable living, and social harmony.',
    },
    {
        question: 'Is Lokachakra based on religious practices?',
        answer:
            'No. Lokachakra draws from spiritual traditions but remains secular. It focuses on universal well-being, inner peace, and conscious living.',
    },
    {
        question: 'Can beginners practice Lokachakra principles easily?',
        answer:
            'Yes, the practices are beginner-friendly. From daily mindful routines to eco-living and gratitude journaling, it’s designed for ease and consistency.',
    },
    {
        question: 'Are there scientific studies supporting Lokachakra philosophy?',
        answer:
            'Yes, many principles align with modern scientific research on mindfulness, plant-based nutrition, and community well-being.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-4 md:px-16 py-16 bg-white">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                Frequently Asked Questions
            </h2>
            <div className="flex flex-col md:flex-row gap-12">
                {/* Left: FAQs */}
                <div className="flex-1 space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-md overflow-hidden transition-all"
                        >
                            <button
                                type="button"
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center px-6 py-4 font-semibold text-lg text-gray-700 bg-white hover:bg-gray-50"
                            >
                                <span>{item.question}</span>
                                <span>{openIndex === index ? '−' : '+'}</span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-600 text-sm">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right: Image/Illustration Placeholder */}
                <div className="flex-1 hidden md:flex justify-center items-center">
                    <div className="w-full h-[320px] rounded-md flex items-center justify-center overflow-hidden">
                        <Image
                            src="/faq.png"
                            alt="FAQ Illustration"
                            width={400}
                            height={320}
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>


            </div>
            <div className="text-center">
                <button
                    className="bg-[#0066FF] text-white px-6 py-2 rounded-full font-semibold text-sm uppercase border-2 border-[#0066FF] transition-all duration-200 hover:bg-white hover:text-[#0066FF] focus:bg-white focus:text-[#0066FF] active:bg-white active:text-[#0066FF]"
                >
                    View More
                </button>
            </div>
        </section>
    );
}
