// components/Footer.jsx
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/lokachakra-logo.png"
              alt="Lokachakra Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-gray-800">Lokachakra</span>
          </div>
          <p className="text-sm leading-relaxed">
            Lokachakra is a pioneering decentralized ecosystem built to promote open innovation, 
            trustless collaboration, and distributed rewards. We break down silos between academia, 
            entrepreneurs, and industries—empowering every stakeholder to co-create and thrive 
            in a transparent, inclusive, and interoperable environment.
          </p>
          <div className="flex space-x-3 mt-6">
            <a href="#" className="bg-gray-600 text-white p-2 rounded-full">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-gray-600 text-white p-2 rounded-full">
              <Twitter size={18} />
            </a>
            <a href="#" className="bg-gray-600 text-white p-2 rounded-full">
              <Instagram size={18} />
            </a>
            <a href="#" className="bg-gray-600 text-white p-2 rounded-full">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/aboutus" className="hover:text-black">About Us</a></li>
            <li><a href="/services" className="hover:text-black">Services</a></li>
            <li><a href="/faq" className="hover:text-black">FAQ</a></li>
            <li><a href="/privacy-policy" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="/tnc" className="hover:text-black">Terms & Condition</a></li>
            <li><a href="/contactus" className="hover:text-black">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+91-1234567890</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin size={16} className="mt-1" />
              <span>
                465, Lokachakra Lane, Decentralized District, Innovation City
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-700 text-white text-center py-4 text-sm">
        Copyright © 2025 Lokachakra | Empowering Decentralized Innovation
      </div>
    </footer>
  );
};

export default Footer;
