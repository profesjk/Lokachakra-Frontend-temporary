"use client";
import Navbar from '../components/Navbar';
import ChatBot from '../sections/ChatBot';
import Footer from '../components/Footer';


export default function Services(){
    return(
        <>
        <Navbar />
        <section className="bg-gray-100 text-center py-20 px-4 mt-15">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-800 mb-6">
                        Services
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
            <ChatBot />
            <Footer />
        </>
    )
}