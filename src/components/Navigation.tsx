'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/', icon: '🏠' },
    { label: 'About', href: '#about', icon: '👤' },
    { label: 'Skills', href: '#skills', icon: '💡' },
    { label: 'Contact', href: '#contact', icon: '💬' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-2xl'
          : 'bg-white/80 backdrop-blur-md'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            aria-label="Harmanjeet Singh - Home"
          >
            HS
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white border-b-2 border-blue-100 md:hidden animate-fade-in-up">
              <div className="container-custom py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
