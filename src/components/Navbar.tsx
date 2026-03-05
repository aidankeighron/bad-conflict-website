"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/**
 * Navbar component for the BadConflict website.
 * Features links to Home, Robots, and Members.
 * @returns {JSX.Element} The rendered navbar.
 */
export default function Navbar(): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Image 
                src="/images/logo.png" 
                alt="Bad Conflict Logo" 
                width={32} 
                height={32} 
                className="h-8 w-auto"
                style={{ width: "auto" }}
              />
              <span className="text-xl font-bold tracking-tighter text-white">BAD CONFLICT</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="/robots" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Robots</Link>
              <Link href="/members" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Members</Link>
              <Link href="/sponsorship" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Sponsorship</Link>
              <Link href="/media" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Media</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/robots" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Robots</Link>
            <Link href="/members" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Members</Link>
            <Link href="/sponsorship" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Sponsorship</Link>
            <Link href="/media" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Media</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
