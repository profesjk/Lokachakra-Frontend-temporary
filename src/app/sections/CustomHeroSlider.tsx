import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    heading: 'Decentralized Innovation for All',
    description:
      'Lokachakra empowers students, entrepreneurs, and organizations to collaborate across boundaries and drive inclusive innovation.',
    image: '/people.png',
  },
  {
    heading: 'Trustless Collaboration at Scale',
    description:
      'We eliminate trust barriers by using decentralized frameworks that ensure transparency, reward fairness, and promote co-creation.',
    image: '/people.png',
  },
  {
    heading: 'Open, Inclusive & Interoperable',
    description:
      'Lokachakra is a manifesto for equitable access to resources, knowledge, and incentives – building bridges between silos.',
    image: '/people.png',
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
    <section
      className="py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
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
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                      {slide.heading}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-100 mb-6 leading-relaxed drop-shadow-sm">
                      {slide.description}
                    </p>
                    <button className="px-6 py-3 bg-[#0066FF] text-white rounded-full font-semibold border-2 border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-200">
                      Get Started
                    </button>
                  </div>

                  {/* Image Block */}
                  {/* Image Block */}
                  <div className="md:w-1/2 w-full flex justify-center">
                    <div className="w-full max-w-[450px] h-[220px] md:h-[280px] rounded-xl overflow-hidden relative shadow-lg flex items-center justify-center">
                      <Image
                        src={slide.image}
                        alt={`Illustration ${index + 1}`}
                        width={450}
                        height={280}
                        className="rounded-xl object-contain w-full h-full"
                      />
                    </div>
                  </div>


                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-blue-300'
                  } transition duration-300`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>


  );
};

export default CustomHeroSlider;
