"use client";
import Navbar from '../components/Navbar';
import ChatBot from '../sections/ChatBot';
import Footer from '../components/Footer';

const steps = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "It has survived not only five centuries, but also the leap into electronic typesetting.",
    "It was popularised in the 1960s with the release of Letraset sheets.",
    "More recently with desktop publishing software like Aldus PageMaker.",
    "It uses Lorem Ipsum as their default model text.",
    "And a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
];

export default function Roadmap() {
    return (
        <>
        <Navbar />
            <section className="bg-gray-100 text-center py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-800 mb-6">
                        Roadmap
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed tracking-wide font-medium mb-10">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <button className="bg-gray-700 text-white text-lg px-6 py-2 rounded-full hover:bg-gray-800 transition">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Roadmap Flow Section */}
            <section className="relative bg-white py-16 px-4">
                {/* Title */}
                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                    START PROCESS
                </h2>

                {/* Timeline */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Central dashed line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 border-l-4 border-dashed border-black z-0"></div>

                    {/* Steps */}
                    <div className="flex flex-col gap-17">
                        {steps.map((text, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row ${isLeft ? 'md:items-end' : 'md:items-start md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Fancy Card */}
                                    <div
                                        className={`relative md:w-1/2 z-10 mt-12 md:mt-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'
                                            }`}
                                    >
                                        <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-6 hover:scale-[1.02] transition-transform duration-300">

                                            <h3 className="font-bold text-gray-800 text-lg mb-2">
                                                Lorem Ipsum is simply dummy
                                            </h3>
                                            <p className="text-sm text-gray-700">{text}</p>
                                        </div>
                                    </div>

                                    {/* Circle Number with spacing */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 -top-6 z-20">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-300 border-4 border-white flex items-center justify-center font-bold text-gray-800 text-lg shadow-xl">
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* End Title */}
                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mt-20">
                    COMPLETE PROCESS
                </h2>
            </section>
            {/* Buffer Text */}
            <section className="bg-white px-4 md:px-16 py-16">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 mb-8">
                        LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
                    </h2>

                    <div className="space-y-8 text-gray-500 text-lg leading-relaxed tracking-wide">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>

                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>


                    </div>
                </div>
            </section>
            <ChatBot />
            <Footer />
        </>
    )
}