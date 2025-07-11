"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import ChatBot from '../sections/ChatBot';
import Footer from '../components/Footer';

export default function ContactUs() {
    return (
        <>
            <Navbar />
            <section className="bg-gradient-to-b from-[#f0f6ff] to-white text-center py-20 px-4 mt-15">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1e3a8a] mb-6">
                        Contact Us
                    </h2>
                    <p className="text-[#374151] text-base md:text-lg leading-relaxed tracking-wide font-medium mb-10">
                        Have questions or ideas to share? The Lokachakra team is here to connect with you. Whether you’re exploring opportunities, seeking support, or simply curious about how we can collaborate, reach out to us anytime. We’re just a message away.
                    </p>

                    <button className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white text-lg px-6 py-2 rounded-full shadow-md hover:from-[#2563eb] hover:to-[#1d4ed8] transition">
                        Get Started
                    </button>
                </div>
            </section>

            <section className="bg-white px-4 md:px-16 py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1e40af] mb-2 tracking-wide">
                    Get in Touch With Us
                </h2>
                <p className="text-[#64748b] text-base mb-12">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <form className="max-w-6xl mx-auto space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-left text-sm font-semibold text-[#334155] mb-1">
                                Name*
                            </label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                            />
                        </div>
                        <div>
                            <label className="block text-left text-sm font-semibold text-[#334155] mb-1">
                                Email ID*
                            </label>
                            <input
                                type="email"
                                placeholder="Email ID"
                                className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                            />
                        </div>
                        <div>
                            <label className="block text-left text-sm font-semibold text-[#334155] mb-1">
                                Mobile*
                            </label>
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-left text-sm font-semibold text-[#334155] mb-1">
                            Message*
                        </label>
                        <textarea
                            placeholder="Type Message"
                            rows={5}
                            className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                        ></textarea>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="px-8 py-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-semibold shadow-md hover:from-[#2563eb] hover:to-[#1d4ed8] transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                <div className="max-w-6xl mx-auto mt-16 bg-white border rounded-md shadow-lg p-6 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-center">
                        {/* Location */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white rounded-full p-3 shadow">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div className="text-[#475569] text-sm">
                                <p className="font-semibold">31,32 Lorem Ipsum, Dummy Froms,</p>
                                <p>Suirang For -000002 Lorem Isum Asset</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white rounded-full p-3 shadow">
                                <FaPhoneAlt size={18} />
                            </div>
                            <p className="text-[#475569] text-sm font-medium">+91-9248922777</p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white rounded-full p-3 shadow">
                                <FaEnvelope size={18} />
                            </div>
                            <p className="text-[#475569] text-sm font-medium">info@lokchakra.com</p>
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