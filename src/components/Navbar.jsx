// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll positioning to switch backdrop filters dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAV_LINKS = [
    { label: "Highlights", href: "#menu" },
    { label: "Experiences", href: "#events" },
    { label: "Bookings", href: "#reserve" },
    { label: "Find Us", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 py-4 shadow-xl' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        
        {/* Branding Identity */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-tight text-neutral-50 group-hover:text-amber-500 transition-colors">
            KYALAMI <span className="text-amber-500 group-hover:text-neutral-50 transition-colors">SHISANYAMA</span>
          </span>
        </a>

        {/* Desktop Screen Links View */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-sm font-medium text-neutral-400 hover:text-amber-500 transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#reserve" 
            className="bg-amber-500 hover:bg-amber-600 text-neutral-950 text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/5"
          >
            Reserve Table
          </a>
        </div>

        {/* Mobile Hamburger Layout Action Anchor */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-200 hover:text-amber-500 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L12 12M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Overlay Slider View */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-lg border-b border-neutral-900 absolute top-full left-0 w-full py-6 px-4 space-y-4 shadow-2xl animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-md font-semibold text-neutral-300 hover:text-amber-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#reserve"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold py-3 rounded-xl transition-all"
          >
            Reserve Table
          </a>
        </div>
      )}
    </nav>
  );
}
