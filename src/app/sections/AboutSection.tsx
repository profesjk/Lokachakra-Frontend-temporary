// components/AboutUsSection.jsx
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-[#eae9e9]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#5a5252] mb-14">
          ABOUT US
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-xl overflow-hidden bg-[#f7f7f7] border border-gray-300 max-w-[550px] w-full aspect-video relative">
              <Image
                src="/aboutus.png"
                alt="About Lokachakra"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#5a5252] mb-6 leading-snug tracking-wide">
              Empowering Innovation Through<br />
              Decentralized Collaboration
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Lokachakra is a decentralized innovation platform that brings together students,
              developers, entrepreneurs, and organizations to co-create solutions for global
              challenges. By leveraging blockchain principles and collaborative tools, Lokachakra
              eliminates trust barriers and enables transparent, inclusive, and impactful
              innovation at scale. Whether you're launching a project, contributing to open-source,
              or building with purpose — Lokachakra is your ecosystem for meaningful change.
            </p>
            <button className="bg-[#0066FF] text-white px-6 py-2 rounded-full font-semibold text-sm uppercase hover:bg-[#FFFFF] transition">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
