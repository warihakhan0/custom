// components/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-gray-100 py-4 shadow-md sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto px-8 flex justify-between items-center">
        <h1 className=" text-xl md:text-2xl font-bold text-pink-500">
          <Link href="/" >My Portfolio</Link>
        </h1>

        <nav className="flex flex-row gap-4 md:gap-8">
          <Link href="/" className=" text-gray-100 no-underline font-medium transition-colors duration-300 ease-in hover:text-pink-500">Home</Link>
          <Link href="/About" className="text-gray-100 no-underline font-medium transition-colors duration-300 ease-in hover:text-pink-500">About</Link>
          <Link href="/contact" className="text-gray-100 no-underline font-medium transition-colors duration-300 ease-in hover:text-pink-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;