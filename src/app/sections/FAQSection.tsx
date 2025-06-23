'use client';
import { useState } from 'react';

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
                    <div className="w-full h-[320px] border rounded-md border-gray-400 flex items-center justify-center">
                        <span className="text-gray-400">[ Image / Illustration ]</span>
                    </div>
                </div>
            </div>
                    <div className="text-center">
                        <button
                            type="button"
                            className="mt-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-full"
                        >
                            View More
                        </button>
                    </div>
        </section>
    );
}
