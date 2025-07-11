// components/Navbar.jsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';

// Dynamically import WalletMultiButton with SSR disabled
const WalletMultiButton = dynamic(
  () => import('@solana/wallet-adapter-react-ui').then((mod) => mod.WalletMultiButton),
  { ssr: false }
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { publicKey, connected, disconnect } = useWallet();

  // Ensure component is mounted before rendering wallet components
  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleAuth = async (step: number) => {
    if (!connected) {
      alert('Please connect your wallet first to get started!');
      return;
    }
    
    setIsOpen(false);
    
    // Check for existing account when user clicks Get Started
    if (step === 1 && publicKey) {
      try {
        console.log('🔍 Checking for existing account from navbar...');
        
        const response = await fetch('/api/check-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ walletAddress: publicKey.toBase58() }),
        });
        
        if (response.ok) {
          const result = await response.json();
          if (result.exists && result.userData) {
            console.log('✅ Existing user found, auto-logging in...');
            
            // Store user data in localStorage
            const userData = {
              ...result.userData,
              walletAddress: publicKey.toBase58(),
              autoLoginTimestamp: new Date().toISOString()
            };
            
            localStorage.setItem('lokachakra_user', JSON.stringify(userData));
            
            // Redirect directly to dashboard
            router.push('/userdashboard');
            return;
          }
        }
        
        console.log('ℹ️ No existing account found, proceeding to sign-up...');
      } catch (error) {
        console.error('❌ Error checking existing account:', error);
        // Continue to sign-up page on error
      }
    }
    
    // If no existing account found or error occurred, proceed to auth page
    router.push(`/auth?step=${step}`);
  };

  const getShortAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const handleDisconnect = () => {
    disconnect();
    setShowWalletModal(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
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
            <span className="text-xl font-bold text-[#0066FF]">Lokachakra</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="text-gray-700 text-sm font-medium hover:text-[#0066FF] transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            {/* Get Started Button */}
            <button
              type="button"
              className={`px-5 py-2 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
                connected 
                  ? 'bg-white text-[#0066FF] border-[#0066FF] hover:bg-[#0066FF] hover:text-white'
                  : 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed'
              }`}
              onClick={() => handleAuth(1)}
              disabled={!connected}
            >
              Get Started
            </button>

            {/* Wallet Button */}
            {mounted && (
              <>
                {connected && publicKey ? (
                  <button
                    type="button"
                    className="px-5 py-2 rounded-full text-sm font-medium border-2 border-[#00C6FF] text-[#0066FF] bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white hover:from-[#0072FF] hover:to-[#00C6FF] transition-all duration-200"
                    onClick={() => setShowWalletModal(!showWalletModal)}
                  >
                    {getShortAddress(publicKey.toBase58())}
                  </button>
                ) : (
                  <WalletMultiButton 
                    style={{
                      background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                      borderRadius: '9999px',
                      fontSize: '14px',
                      fontWeight: '500',
                      padding: '8px 20px',
                      height: '40px',
                      minHeight: '40px'
                    }}
                  />
                )}
              </>
            )}
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-[#0066FF]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white py-4 space-y-3 shadow-inner">
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="block text-gray-700 text-sm font-medium px-4 hover:text-[#0066FF] transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-4">
              {/* Wallet Button for Mobile */}
              {mounted && (
                <>
                  {connected && publicKey ? (
                    <button
                      type="button"
                      className="px-5 py-2 rounded-full text-sm font-medium border-2 border-[#00C6FF] text-[#0066FF] bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white hover:from-[#0072FF] hover:to-[#00C6FF] transition-all duration-200"
                      onClick={() => setShowWalletModal(!showWalletModal)}
                    >
                      {getShortAddress(publicKey.toBase58())}
                    </button>
                  ) : (
                    <WalletMultiButton 
                      style={{
                        background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                        borderRadius: '9999px',
                        fontSize: '14px',
                        fontWeight: '500',
                        padding: '8px 20px',
                        width: '100%',
                        height: '40px',
                        minHeight: '40px'
                      }}
                    />
                  )}
                </>
              )}

              {/* Get Started */}
              <button
                type="button"
                className={`px-5 py-2 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
                  connected 
                    ? 'bg-[#0066FF] text-white border-[#0066FF] hover:bg-white hover:text-[#0066FF]'
                    : 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed'
                }`}
                onClick={() => handleAuth(1)}
                disabled={!connected}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Wallet Popup */}
      {mounted && showWalletModal && connected && publicKey && (
        <div className="absolute top-24 right-8 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
          <div className="p-4 w-64 relative">
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowWalletModal(false)}
            >
              <X size={18} />
            </button>
            <h2 className="text-base font-bold text-gray-800 mb-2">Wallet Connected</h2>
            <p className="text-gray-600 text-sm mb-4 break-words">{publicKey.toBase58()}</p>
            <button
              type="button"
              className="w-full bg-[#FF3B30] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-red-600"
              onClick={handleDisconnect}
            >
              Disconnect Wallet
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
