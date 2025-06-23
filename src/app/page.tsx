"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomHeroSlider from "./sections/CustomHeroSlider";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import BlogsSection from "./sections/BlogsSection";
import FAQSection from "./sections/FAQSection";
import PricingSection from "./sections/PricingSection";
import TestimonialSection from "./sections/TestimonialSection";
import Navbar from "./components/Navbar";
import ChatBot from "./sections/ChatBot";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <Navbar />
    <CustomHeroSlider />
    <AboutSection />
    <ServicesSection />
    <BlogsSection />
    <FAQSection />
    <PricingSection />
    <TestimonialSection />
    <ChatBot />
    <Footer />
    </>
  );
}
