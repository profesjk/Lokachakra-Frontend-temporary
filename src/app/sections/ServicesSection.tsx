'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const tabs = [
	{
		title: 'Ideation & Validation',
		key: 'ideation',
		content: `Lokachakra supports early-stage ideas by helping individuals and teams validate concepts, define value propositions, and assess real-world potential through a decentralized lens.`,
		image: '/services.png',
	},
	{
		title: 'Planning & Strategy',
		key: 'strategy',
		content: `We provide decentralized frameworks for strategic planning, empowering contributors with roadmaps, governance models, and value-driven collaboration systems.`,
		image: '/services.png',
	},
	{
		title: 'Product Development',
		key: 'development',
		content: `Collaborate to build MVPs, open protocols, and interoperable dApps using community-driven development and peer-based reviews.`,
		image: '/services.png',
	},
	{
		title: 'Team & Support Building',
		key: 'team',
		content: `Form agile teams, connect with talent across networks, and tap into mentorship and operational support within the Lokachakra ecosystem.`,
		image: '/services.png',
	},
];

const ServicesSection = () => {
	const [activeTab, setActiveTab] = useState('ideation');

	const current = tabs.find((tab) => tab.key === activeTab);

	return (
		<section id="services" className="py-16 bg-[#f8f8f8]">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-center text-4xl font-semibold text-gray-800 mb-10">
					Services
				</h2>

				{/* Tabs */}
				<div className="flex flex-wrap justify-center gap-4 mb-10">
					{tabs.map((tab) => (
						<button
							key={tab.key}
							onClick={() => setActiveTab(tab.key)}
							type="button"
							className={`px-6 py-2 rounded-full font-semibold text-sm md:text-base border-2 transition-all duration-200 ${activeTab === tab.key
									? 'bg-[#0066FF] text-white border-[#0066FF]'
									: 'bg-white text-[#0066FF] border-[#0066FF] hover:bg-[#0066FF] hover:text-white'
								}`}
						>
							{tab.title}
						</button>

					))}
				</div>

				{/* Content */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-10">
					{/* Text */}
					<div className="md:w-1/2">
						<h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
							{current?.title.split('&')[0].trim()}
						</h3>
						<p className="text-gray-600 text-base md:text-lg leading-relaxed">
							{current?.content}
						</p>
					</div>

					{/* Image */}
					<div className="md:w-1/2 w-full max-w-[450px] h-[260px] relative border rounded-lg border-gray-300 overflow-hidden">
						{current?.image && (
							<Image
								src={current.image}
								alt={current.title}
								fill
								style={{ objectFit: 'cover' }}
								className="rounded-lg"
								sizes="(max-width: 768px) 100vw, 450px"
								priority
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
