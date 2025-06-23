// components/Navbar.jsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // All hrefs should start with "/" for absolute navigation
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/aboutus' },
    { label: 'Services', href: '/services' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'How it Works', href: '/howitworks' },
    { label: 'Road Map', href: '/roadmap' },
    { label: 'Testimonial', href: '/testimonial' },
    { label: 'Contact Us', href: '/contactus' },
  ];

  // Handler for auth navigation with step
  const handleAuth = (step: number) => {
    setIsOpen(false);
    router.push(`/auth?step=${step}`);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Image
              src="/lokachakra-logo.png"
              alt="Lokachakra Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-semibold text-gray-800">Lokachakra</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="text-gray-700 text-sm hover:text-black transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button
              type="button"
              className="bg-gray-700 text-white px-5 py-2 rounded-full text-sm"
              onClick={() => handleAuth(6)}
            >
              Sign In
            </button>
            <button
              type="button"
              className="bg-gray-700 text-white px-5 py-2 rounded-full text-sm"
              onClick={() => handleAuth(1)}
            >
              Sign Up
            </button>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-50 py-4 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="block text-gray-700 text-sm px-4"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-4">
              <button
                type="button"
                className="bg-gray-700 text-white px-5 py-2 rounded-full text-sm"
                onClick={() => handleAuth(6)}
              >
                Sign In
              </button>
              <button
                type="button"
                className="bg-gray-700 text-white px-5 py-2 rounded-full text-sm"
                onClick={() => handleAuth(1)}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
