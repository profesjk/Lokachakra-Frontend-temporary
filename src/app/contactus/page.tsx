"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import ChatBot from '../sections/ChatBot';
import Footer from '../components/Footer';

export default function ContactUs() {
    return (
        <>
        <Navbar />
            <section className="bg-gray-100 text-center py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-800 mb-6">
                        Contact Us
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
            <section className="bg-white px-4 md:px-16 py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-2 tracking-wide">
                    Get in Touch With Us
                </h2>
                <p className="text-gray-500 text-base mb-12">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <form className="max-w-6xl mx-auto space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-left text-sm font-semibold text-gray-600 mb-1">
                                Name*
                            </label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-left text-sm font-semibold text-gray-600 mb-1">
                                Email ID*
                            </label>
                            <input
                                type="email"
                                placeholder="Email ID"
                                className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-left text-sm font-semibold text-gray-600 mb-1">
                                Mobile*
                            </label>
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-left text-sm font-semibold text-gray-600 mb-1">
                            Message*
                        </label>
                        <textarea
                            placeholder="Type Message"
                            rows={5}
                            className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none"
                        ></textarea>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="px-8 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-800 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                <div className="max-w-6xl mx-auto mt-16 bg-white border rounded-md shadow-sm p-6 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-center">
                        {/* Location */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-gray-700 text-white rounded-full p-3">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div className="text-gray-700 text-sm">
                                <p className="font-semibold">31,32 Lorem Ipsum, Dummy Froms,</p>
                                <p>Suirang For -000002 Lorem Isum Asset</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-700 text-white rounded-full p-3">
                                <FaPhoneAlt size={18} />
                            </div>
                            <p className="text-gray-700 text-sm font-medium">+91-9248922777</p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-700 text-white rounded-full p-3">
                                <FaEnvelope size={18} />
                            </div>
                            <p className="text-gray-700 text-sm font-medium">info@lokchakra.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full px-4 py-8 bg-gray-100 flex justify-center items-center">
                <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29204.32582491242!2d-73.91727452714645!3d40.79469539416756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f61db458888b%3A0x19a6fb3bfd71dad4!2sMuseum%20of%20the%20City%20of%20New%20York!5e1!3m2!1sen!2sin!4v1750009247896!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
            <ChatBot />
            <Footer />
        </>
    )
}