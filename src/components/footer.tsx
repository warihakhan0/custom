// components/Footer.tsx
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8 text-center">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        
        {/* Logo Section */}
        <div className="text-xl font-bold text-pink-500">
          <Link href="/">My Portfolio</Link>
        </div>

        {/* Footer Links */}
        <div className="flex gap-6">
          <Link href="/" className="text-gray-100 no-underline font-medium transition-colors duration-300 ease-in hover:text-pink-500">
            Home
          </Link>
          <Link href="/about" className="text-gray-100 no-underline font-medium transition-colors duration-300 ease-in hover:text-pink-500">
            About
          </Link>
          <Link href="/contact" className="text-gray-100 no-underline font-medium transition-colors duration-300 ease-in hover:text-pink-500">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Link href="https://vercel.com/WarihaKhan2" className="text-gray-100 transition-colors duration-300 ease-in hover:text-pink-500">
            Vercel
          </Link>
          <Link href="https://www.linkedin.com/in/wariha-ayoob-khan-5467b5279/" className="text-gray-100 transition-colors duration-300 ease-in hover:text-pink-500">
            LinkedIn
          </Link>
          <Link href="https://github.com/warihakhan2" className="text-gray-100 transition-colors duration-300 ease-in hover:text-pink-500">
            GitHub
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="mt-8 text-sm text-gray-400">© 2024 My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;