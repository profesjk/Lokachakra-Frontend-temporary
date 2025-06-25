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
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
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
            <span className="text-2xl font-bold text-[#0066FF]">Lokachakra</span>
          </div>
          <p className="text-sm leading-relaxed">
            Lokachakra is a pioneering decentralized ecosystem built to promote open innovation,
            trustless collaboration, and distributed rewards. We break down silos between academia,
            entrepreneurs, and industries—empowering every stakeholder to co-create and thrive
            in a transparent, inclusive, and interoperable environment.
          </p>
          <div className="flex space-x-3 mt-6">
            <a href="#" className="bg-[#0066FF] text-white p-2 rounded-full hover:bg-white hover:text-[#0066FF] border-2 border-[#0066FF] transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-[#0066FF] text-white p-2 rounded-full hover:bg-white hover:text-[#0066FF] border-2 border-[#0066FF] transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="bg-[#0066FF] text-white p-2 rounded-full hover:bg-white hover:text-[#0066FF] border-2 border-[#0066FF] transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="bg-[#0066FF] text-white p-2 rounded-full hover:bg-white hover:text-[#0066FF] border-2 border-[#0066FF] transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#0066FF]">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#0066FF] transition">Home</Link></li>
            <li><Link href="/aboutus" className="hover:text-[#0066FF] transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#0066FF] transition">Services</Link></li>
            <li><Link href="/faq" className="hover:text-[#0066FF] transition">FAQ</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-[#0066FF] transition">Privacy Policy</Link></li>
            <li><Link href="/tnc" className="hover:text-[#0066FF] transition">Terms & Condition</Link></li>
            <li><Link href="/contactus" className="hover:text-[#0066FF] transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#0066FF]">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2 text-gray-700">
              <Mail size={16} className="text-[#0066FF]" />
              <span>info@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700">
              <Phone size={16} className="text-[#0066FF]" />
              <span>+91-1234567890</span>
            </li>
            <li className="flex items-start space-x-2 text-gray-700">
              <MapPin size={16} className="mt-1 text-[#0066FF]" />
              <span>
                465, Lokachakra Lane, Decentralized District, Innovation City
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0066FF] text-white text-center py-4 text-sm">
        © 2025 Lokachakra | Empowering Decentralized Innovation
      </div>
    </footer>

  );
};

export default Footer;
