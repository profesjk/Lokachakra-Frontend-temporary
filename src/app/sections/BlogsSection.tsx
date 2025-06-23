'use client';
import Image from 'next/image';
import { ThumbsUp, MessageCircle } from 'lucide-react';

const blogs = [
	{
		id: 1,
		title: 'Reclaiming Ancient Wisdom in the Modern World',
		excerpt:
			'Explore how Lokachakra brings ancient Indian philosophies like Ayurveda and Yoga into everyday modern practices for balanced living.',
		author: 'Rishi Dev',
		date: '22/05/2025',
		image: '/blog_small.png',
		likes: 235,
		comments: 18,
		featured: true,
	},
	{
		id: 2,
		title: 'The Four Pillars of Lokachakra: Mind, Body, Soul & Community',
		excerpt:
			'A deep dive into the foundational values of Lokachakra and how integrating them can lead to a more fulfilling life.',
		author: 'Anaya Sharma',
		date: '18/05/2025',
		image: '/blog_small.png',
	},
	{
		id: 3,
		title: 'Why Inner Peace is the New Currency',
		excerpt:
			'In today’s chaotic world, learn how mindfulness, meditation, and introspection are becoming essential tools for success.',
		author: 'Om Prakash',
		date: '15/05/2025',
		image: '/blog_small.png',
	},
	{
		id: 4,
		title: 'Healing Through Nature: The Lokachakra Approach',
		excerpt:
			'Discover the power of connecting with nature, Ayurvedic healing, and eco-conscious living for physical and mental wellness.',
		author: 'Meera Vyas',
		date: '12/05/2025',
		image: '/blog_small.png',
	},
];

const BlogsSection = () => {
	const featured = blogs.find((blog) => blog.featured) ?? blogs[0];
	const sideBlogs = blogs.filter(
		(blog) => !blog.featured || blog.id !== featured.id
	);

	return (
		<section id="blogs" className="py-16 bg-[#eae9e9]">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-center text-4xl font-semibold text-gray-800 mb-12">
					Blogs
				</h2>

				<div className="flex flex-col lg:flex-row gap-8">
					{/* Left - Featured Blog */}
					<div className="lg:w-2/3 space-y-6">
						<div className="w-full aspect-video relative border rounded overflow-hidden">
							<Image
								src="/blog_big.png"
								alt={featured.title}
								fill
								style={{ objectFit: 'cover' }}
								sizes="(max-width: 1024px) 100vw, 66vw"
								priority
							/>
						</div>
						<h3 className="text-2xl font-semibold text-gray-800 leading-snug">
							{featured.title}
						</h3>
						<p className="text-gray-600">{featured.excerpt}</p>
						<div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
							<div className="flex items-center gap-2">
								<div className="w-6 h-6 rounded-full border" />
								{featured.author}
							</div>
							{typeof featured.likes === 'number' && (
								<div className="flex items-center gap-1">
									<ThumbsUp size={16} />
									Like: {featured.likes}
								</div>
							)}
							{typeof featured.comments === 'number' && (
								<div className="flex items-center gap-1">
									<MessageCircle size={16} />
									Comment: {featured.comments}
								</div>
							)}
							<div>{featured.date}</div>
						</div>
					</div>

					{/* Right - Smaller Blogs */}
					<div className="lg:w-1/3 space-y-6">
						{sideBlogs.map((blog) => (
							<div key={blog.id} className="flex gap-4">
								<div className="w-28 h-20 relative border rounded overflow-hidden flex-shrink-0">
									<Image
										src={blog.image}
										alt={blog.title}
										fill
										style={{ objectFit: 'cover' }}
										sizes="112px"
									/>
								</div>
								<div className="flex-1 space-y-2">
									<h4 className="text-md font-semibold text-gray-800">
										{blog.title}
									</h4>
									<p className="text-sm text-gray-600">{blog.excerpt}</p>
									<div className="flex items-center justify-between text-sm text-gray-600">
										<div className="flex items-center gap-2">
											<div className="w-5 h-5 rounded-full border" />
											{blog.author}
										</div>
										<div>{blog.date}</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* View More */}
				<div className="mt-10 text-center">
					<button
						className="bg-[#0066FF] text-white px-6 py-2 rounded-full font-semibold text-sm uppercase border-2 border-[#0066FF] transition-all duration-200 hover:bg-white hover:text-[#0066FF] focus:bg-white focus:text-[#0066FF] active:bg-white active:text-[#0066FF]"
					>
						View More
					</button>
				</div>
			</div>
		</section>
	);
};

export default BlogsSection;
