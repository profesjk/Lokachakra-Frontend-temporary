"use client";
import Image from 'next/image';
import { FaRegThumbsUp, FaRegComment } from 'react-icons/fa';
import ChatBot from '../sections/ChatBot';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const blogData = Array(6).fill({
    title: 'Lorem Ipsum is simply dummy text Sure wait for the and',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry&apos;s standard dummy text ever since the...',
    author: 'Author Name',
    date: '22/05/2025',
    image: '/about-image.png',
    avatar: '/avatar.png',
    likes: 123,
    comments: 123,
});

const latestBlogs = Array(7).fill({
    title: 'Lorem Ipsum is simply text is',
    description: 'Lorem Ipsum is simply dummy text simply industry.',
    author: 'Author Name',
    date: '22/05/2025',
    image: '/about-image.png',
    avatar: '/avatar.png',
});


export default function Blogs() {
    return (
        <>
        <Navbar />
            <section className="bg-gray-100 text-center py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-800 mb-6">
                        Blogs
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed tracking-wide font-medium mb-10">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                    </p>
                    <button className="bg-gray-700 text-white text-lg px-6 py-2 rounded-full hover:bg-gray-800 transition">
                        Get Started
                    </button>
                </div>
            </section>
            <section className="bg-[#f9f9f9] py-16 px-6 md:px-20 text-gray-800 font-serif">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left - Popular Blogs */}
                    <div className="w-full lg:w-3/4">
                        <h2 className="text-2xl font-bold mb-6">POPULAR BLOGS</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {blogData.map((blog, i) => (
                                <Link href="/blogs/blogdetails" key={i} className="block hover:shadow-lg transition rounded-lg bg-white p-2">
                                    <div className="w-full h-60 relative overflow-hidden border rounded">
                                        <Image
                                            src={blog.image}
                                            alt="Blog Image"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-lg font-bold leading-snug">
                                        {blog.title.toUpperCase()}
                                    </h3>
                                    <p className="text-sm mt-2 leading-relaxed text-gray-600">
                                        {blog.description}
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src={blog.avatar}
                                                alt="Author"
                                                width={32}
                                                height={32}
                                                className="rounded-full border"
                                            />
                                            <span className="text-sm">{blog.author.toUpperCase()}</span>
                                        </div>
                                        <span className="text-sm font-semibold">{blog.date}</span>
                                    </div>

                                    {/* Reactions */}
                                    <div className="flex gap-6 text-sm text-gray-500 mt-2">
                                        <span className="flex items-center gap-1">
                                            <FaRegThumbsUp /> Like : {blog.likes}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaRegComment /> Comment : {blog.comments}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>


                    {/* Right - Latest Blogs */}
                    <div className="w-full lg:w-1/4">
                        <h2 className="text-2xl font-bold mb-6">LATEST BLOGS</h2>
                        <div className="space-y-6">
                            {latestBlogs.map((blog, i) => (
                                <Link href="/blogs/blogdetails" key={i} className="flex items-start gap-4 hover:bg-gray-100 p-2 rounded transition">
                                    <div className="relative w-20 h-20 border rounded">
                                        <Image
                                            src={blog.image}
                                            alt="Blog"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-sm font-bold leading-tight">
                                            {blog.title.toUpperCase()}
                                        </h4>
                                        <p className="text-xs text-gray-600">{blog.description}</p>
                                        <div className="flex items-center justify-between mt-1 text-xs text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Image
                                                    src={blog.avatar}
                                                    alt="Author"
                                                    width={20}
                                                    height={20}
                                                    className="rounded-full border"
                                                />
                                                <span>{blog.author}</span>
                                            </div>
                                            <span>{blog.date}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-1s">
                <div className="flex justify-center">
                    <button className="bg-[#444] text-white px-6 py-2 rounded-full font-semibold text-sm uppercase hover:bg-[#333] transition">
                        View More
                    </button>
                </div>
            </section>
            <section className="bg-white py-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <Link href="/blogs/blogdetails" key={item} className="flex flex-col hover:shadow-lg transition rounded-lg bg-white p-2">
                            <div className="rounded-md overflow-hidden border">
                                <Image
                                    src="/about-image.png"
                                    alt="Blog"
                                    width={600}
                                    height={400}
                                    className="w-full object-cover"
                                />
                            </div>

                            <h3 className="text-lg md:text-xl font-semibold text-[#333] mt-3">
                                LOREM IPSUM IS SIMPLY DUMMY
                            </h3>
                            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                Lorem Ipsum is simply dummy text of the like to printing and typesetting industry.
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center justify-between mt-3 text-sm text-gray-700">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src="/avatar.png"
                                        alt="Author"
                                        width={24}
                                        height={24}
                                        className="rounded-full border"
                                    />
                                    <span className="text-xs">Author Name</span>
                                </div>
                                <span className="font-semibold text-xs">22/05/2025</span>
                            </div>

                            {/* Likes & Comments */}
                            <div className="flex items-center gap-6 text-sm mt-3 text-[#444]">
                                <div className="flex items-center gap-1">
                                    <span>👍</span>
                                    <span>Like : 123</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>💬</span>
                                    <span>Comment : 123</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <ChatBot />
            <Footer />
        </>
    )
}