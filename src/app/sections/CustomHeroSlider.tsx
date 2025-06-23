import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    heading: 'Decentralized Innovation for All',
    description:
      'Lokachakra empowers students, entrepreneurs, and organizations to collaborate across boundaries and drive inclusive innovation.',
    image: '/illustration1.png',
  },
  {
    heading: 'Trustless Collaboration at Scale',
    description:
      'We eliminate trust barriers by using decentralized frameworks that ensure transparency, reward fairness, and promote co-creation.',
    image: '/illustration2.png',
  },
  {
    heading: 'Open, Inclusive & Interoperable',
    description:
      'Lokachakra is a manifesto for equitable access to resources, knowledge, and incentives – building bridges between silos.',
    image: '/illustration3.jpg',
  },
];

const CustomHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Slide Wrapper */}
        <div className="overflow-hidden relative">
          {/* Slide Content */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
                  
                  {/* Text Block */}
                  <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                      {slide.heading}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                      {slide.description}
                    </p>
                    <button className="px-6 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition">
                      Get Started
                    </button>
                  </div>

                  {/* Image Block */}
                  <div className="md:w-1/2 w-full flex justify-center">
                    <div className="w-full max-w-[450px] h-[220px] md:h-[280px] border border-gray-300 rounded-xl overflow-hidden relative">
                      <Image
                        src={slide.image}
                        alt={`Illustration ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full ${
                  index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
                } transition`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomHeroSlider;
