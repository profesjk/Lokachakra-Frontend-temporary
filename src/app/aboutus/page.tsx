"use client";
import Image from "next/image";
import PricingSection from "../sections/PricingSection";
import TestimonialSection from "../sections/TestimonialSection";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import ChatBot from "../sections/ChatBot";
import Footer from "../components/Footer";



const teamData = Array(12).fill({
  name: 'Employee Name',
  designation: 'Designation',
  email: 'loremipsum@gmail.com',
  id: 'Employee ID',
  avatar: '/avatar.png',
});

export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 text-center py-20 px-4 mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            About Us
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed tracking-wide font-medium mb-10">
            We are building a vibrant ecosystem to connect founders, investors, mentors, and changemakers.
            Our mission is to empower innovation through meaningful collaboration and inclusive growth.
          </p>
          <button className="bg-[#0066FF] text-white text-lg px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <div className="w-full h-auto rounded-md border border-gray-300 bg-gray-100 overflow-hidden">
            <Image
              src="/about-image.png"
              alt="About"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 leading-snug">
            LOREM IPSUM IS SIMPLY DUMMY TEXT <br />
            <span className="block mt-2">SURE WAIT FOR THE AND</span>
          </h2>
          <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed tracking-wide">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the Lorem Ipsum is simply dummy
            text of the printing.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 px-6 md:px-20 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left Side - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 leading-snug">
              LOREM IPSUM IS SIMPLY DUMMY TEXT <br />
              <span className="block mt-2">SURE WAIT FOR THE AND</span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed tracking-wide">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Ipsum has been the industry&apos;s standard dummy text ever since the Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              has been the industry&apos;s standard dummy text ever since the 1500s. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
              Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the Lorem Ipsum is simply dummy
              text of the printing.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto rounded-md border border-gray-300 bg-gray-100 overflow-hidden">
              <Image
                src="/about-image.png"
                alt="About"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <div className="w-full h-auto rounded-md border border-gray-300 bg-gray-100 overflow-hidden">
            <Image
              src="/about-image.png"
              alt="About"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 leading-snug">
            LOREM IPSUM IS SIMPLY DUMMY TEXT <br />
            <span className="block mt-2">SURE WAIT FOR THE AND</span>
          </h2>
          <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed tracking-wide">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the Lorem Ipsum is simply dummy
            text of the printing.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 px-6 md:px-20 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left Side - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 leading-snug">
              LOREM IPSUM IS SIMPLY DUMMY TEXT <br />
              <span className="block mt-2">SURE WAIT FOR THE AND</span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed tracking-wide">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Ipsum has been the industry&apos;s standard dummy text ever since the Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              has been the industry&apos;s standard dummy text ever since the 1500s. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
              Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the Lorem Ipsum is simply dummy
              text of the printing.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto rounded-md border border-gray-300 bg-gray-100 overflow-hidden">
              <Image
                src="/about-image.png"
                alt="About"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Teams */}
      <section className="bg-[#f9f9f9] py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 font-serif tracking-wide">
          TEAMS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-sm border border-gray-200 p-6 flex flex-col items-center"
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300 mb-4">
                <Image
                  src={member.avatar}
                  alt="Avatar"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-sm font-semibold text-gray-700">{member.name.toUpperCase()}</h3>
              <p className="text-sm text-gray-600">{member.designation}</p>
              <p className="text-sm text-gray-500">{member.email}</p>
              <p className="text-sm font-semibold text-gray-700 mt-1">{member.id.toUpperCase()}</p>

              <hr className="w-3/4 my-3 border-gray-300" />

              {/* Social Icons */}
              <div className="flex justify-center gap-4 text-gray-500">
                <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Princing Section */}
      <PricingSection />
      {/* Testimonials Section */}
      <TestimonialSection />
      <ChatBot />
      <Footer />
    </>
  );
}
