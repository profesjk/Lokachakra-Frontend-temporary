'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const testimonials = [
	{
		name: 'Clint Name',
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum.`,
		avatar: '/avatar.png',
	},
	{
		name: 'Jane Doe',
		text: `Amazing service! Lorem Ipsum has been the industry's standard dummy text since the 1500s.`,
		avatar: '/avatar.png',
	},
	{
		name: 'John Smith',
		text: `Best experience ever. Lorem Ipsum is dummy text used in printing and typesetting.`,
		avatar: '/avatar.png',
	},
];

export default function TestimonialSection() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % testimonials.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="bg-white text-center py-20 px-4">
			<h2 className="text-4xl font-bold tracking-widest text-gray-800 uppercase">
				Testimonial
			</h2>

			<div className="mt-10 flex flex-col items-center max-w-4xl mx-auto">
				<Image
					src={testimonials[current].avatar}
					alt="avatar"
					width={96}
					height={96}
					className="w-24 h-24 rounded-full bg-gray-300"
				/>
				<h3 className="mt-4 text-xl font-semibold tracking-wider text-gray-800 uppercase">
					{testimonials[current].name}
				</h3>
				<p className="mt-4 text-gray-600 max-w-3xl text-sm tracking-wide leading-relaxed">
					{testimonials[current].text}
				</p>

				{/* Dots */}
				<div className="mt-6 flex space-x-2">
					{testimonials.map((_, i) => (
						<span
							key={i}
							className={`w-3 h-3 rounded-full ${
								i === current ? 'bg-[#0066FF]' : 'bg-[#a0c5f7]'
							}`}
						></span>
					))}
				</div>
			</div>
		</section>
	);
}
