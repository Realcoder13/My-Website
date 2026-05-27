'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Harmanjeet Singh
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-gray-900"></span>
            <span className="w-6 h-0.5 bg-gray-900"></span>
            <span className="w-6 h-0.5 bg-gray-900"></span>
          </button>

          <div
            className={`${
              isOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row gap-8 absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0`}
          >
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-blue-600 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
