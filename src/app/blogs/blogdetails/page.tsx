'use client';

import Image from 'next/image';
import { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '@/app/components/Navbar';
import ChatBot from '@/app/sections/ChatBot';
import Footer from '@/app/components/Footer';

export default function BlogDetails() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    saveInfo: false,
  });
  const [submitted, setSubmitted] = useState(false);

  // Add types for event handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' && e.target instanceof HTMLInputElement ? e.target.checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
    <Navbar />
      <section className="bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <p className="text-lg text-gray-700 font-semibold uppercase tracking-wider">
            Blogs // Blogs Detail
          </p>

          {/* Blog Image */}
          <div className="w-full border rounded-md overflow-hidden">
            <Image
              src="/about-image.png"
              alt="Blog Image"
              width={1000}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-[#333] leading-snug">
            LOREM IPSUM IS SIMPLY DUMMY TEXT SURE WAIT FOR THE AND
          </h1>

          {/* Author Info and Stats */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/avatar.png"
                alt="Author"
                width={30}
                height={30}
                className="rounded-full border"
              />
              <span className="text-sm text-gray-800">Author Name</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#444]">
              <div className="flex items-center gap-1">
                <span>👍</span>
                <span>Like : 123</span>
              </div>
              <div className="flex items-center gap-1">
                <span>💬</span>
                <span>Comment : 123</span>
              </div>
              <span className="text-sm font-semibold">22/05/2025</span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">
            {[1, 2, 3].map((para) => (
              <p key={para}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry&apos;s standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa est eveniet enim, asperiores sapiente ipsam nemo animi a eligendi modi ipsum voluptatem aliquid odit neque voluptate. A libero alias fugiat?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eius tenetur aspernatur architecto corporis fuga deserunt impedit magni illum, expedita suscipit. Quod placeat recusandae fugit quae adipisci molestias! Reprehenderit, nulla.
                Non repellat perspiciatis, quos perferendis saepe soluta quaerat pariatur omnis tenetur deleniti dicta vero quidem autem voluptates eaque laboriosam. Sunt ab est pariatur perspiciatis eligendi voluptatibus odio dolore molestias quae.
                Quas atque dignissimos distinctio alias quae veritatis? Laborum ad maiores voluptatum molestias! Fugit dignissimos quod odio, possimus amet consequuntur quisquam officiis iure sit ab. Cumque expedita aperiam magnam dolorem maxime!
                Nemo voluptatum perspiciatis ipsam commodi sit quia, sunt, eius beatae reiciendis, ex dignissimos. Veritatis doloribus quos, perferendis doloremque nostrum quas odio quisquam magni dignissimos porro nihil alias voluptates fugiat odit!
                Eligendi enim consectetur eos magnam sunt ipsum dignissimos consequuntur, natus aut. Deleniti magni, laudantium neque quisquam laboriosam quibusdam dignissimos officiis, est ullam, sed necessitatibus consequuntur corrupti dolore architecto adipisci iste?
                Voluptatem molestias optio numquam, aut sequi expedita aliquid autem sed nemo quasi. Dolor rem illum nostrum, sit ratione tempora! Magni laboriosam obcaecati omnis odit dolorem illo dicta incidunt nisi voluptatum!
                Expedita eum asperiores reprehenderit saepe ipsa mollitia officia eligendi rerum perspiciatis doloribus dignissimos perferendis placeat, quia necessitatibus earum minima corrupti non corporis impedit. Corrupti sequi quibusdam, eligendi voluptatem necessitatibus consequatur?
                Harum tempora quo, illo corrupti aspernatur nam quos sint aperiam dicta nemo magnam ex. Iste ratione in exercitationem quo nisi! Quas labore adipisci accusamus tenetur iure, voluptas asperiores voluptatum illo!
                Enim temporibus perferendis doloribus. Voluptas, odit consequatur? Odio at quis fugiat, quae autem ea iusto tenetur. Est provident rem magni, ratione tenetur ex repellendus ipsum, culpa repellat, ullam laborum praesentium?
                Tenetur harum vel labore temporibus? Voluptatum voluptatibus modi iste. Officia id unde ipsam, quis sit incidunt, sed laboriosam enim iusto, quae earum! Earum ex id magnam perspiciatis iure error itaque.
                Consectetur ipsum, odio id expedita animi deserunt unde amet, atque cum velit maxime doloremque tenetur? Corrupti nam enim iste, quae et deserunt consequuntur assumenda a labore ex necessitatibus asperiores obcaecati?
                Vero libero cum sit asperiores itaque provident exercitationem obcaecati adipisci, ducimus officia voluptatum culpa possimus, incidunt quae ut voluptatibus, inventore sequi. Similique reprehenderit ad ratione minus corporis repellendus sequi assumenda.
                Eligendi enim impedit pariatur esse veritatis. Nesciunt vitae placeat ex recusandae molestiae, est quaerat iusto accusamus sapiente officiis vero tempore consequatur quam illo nisi facere dolore, esse voluptatem, fugit cum.
                Aspernatur aut at est sequi ipsa. Quod atque, nisi nulla, iusto voluptas libero dolorum in eos qui labore, sunt pariatur eum at et suscipit molestias molestiae repellendus cupiditate! Nesciunt, quis.
                Repellat nostrum repellendus accusantium non nemo vero. Unde blanditiis maxime obcaecati doloribus quam velit adipisci eligendi? Repellendus placeat perferendis cupiditate inventore aperiam reprehenderit praesentium molestiae rerum dicta. Accusantium, quia ex?
                Rerum perspiciatis cupiditate magnam? Perspiciatis eos obcaecati iste repudiandae blanditiis aut nisi hic minus cumque veniam voluptas, esse voluptates explicabo deserunt asperiores corporis temporibus iure amet unde animi possimus? Qui!
                Temporibus, in? Incidunt tempora voluptate rem est neque quod similique quos unde quidem. Voluptatem, culpa magni et beatae dignissimos modi alias quibusdam, quisquam aperiam, quia eligendi laboriosam magnam dolores sed!
                Aspernatur, ratione. Ipsa rem optio delectus eligendi sed laudantium dicta consequatur vero debitis fuga dolore, pariatur magni id, minus unde quaerat eveniet. Dicta, quo nobis cumque neque deleniti eum earum.
                Architecto dolorum voluptatibus hic fugiat accusamus voluptas perspiciatis at deserunt iste neque assumenda illo sit ipsum ipsam fuga ut possimus, tenetur qui amet, debitis esse modi! Odio eaque saepe officiis.
                Eius fuga tenetur mollitia tempore quas officia molestiae, deserunt harum maiores nulla porro amet voluptates quod ex eveniet sint esse ipsa similique sit. Temporibus quaerat deserunt minima, doloremque laudantium eum?
              </p>
            ))}
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
      <section className="bg-white px-4 py-10 md:px-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Leave a Reply</h2>
      <p className="text-sm text-gray-600 mt-2 mb-6">
        Your email address will not be published. Required fields are marked
        <span className="text-red-500">*</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
        </div>

        {/* Comment Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Comment<span className="text-red-500">*</span>
          </label>
          <textarea
            name="comment"
            rows={5}
            placeholder="Comment*"
            value={formData.comment}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleChange}
            className="mt-1 mr-2 border-gray-300 focus:ring-gray-400"
          />
          <label className="text-sm text-gray-600">
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-2 font-semibold text-sm uppercase transition"
          >
            Post Your Comment
          </button>
        </div>

        {/* Success Message */}
        {submitted && (
          <p className="text-green-600 text-center font-medium mt-4">
            Your comment added successfully.
          </p>
        )}
      </form>
    </section>
    <ChatBot />
    <Footer />
    </>
  );
}
