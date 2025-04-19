'use client';

import Link from 'next/link';
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2 ">
          <span className="text-xl"></span>
          <Image src="/logo.png" alt="Logo" width={32} height={45}  />
          <span className="text-lg text-black font-bold text-[25px]">TradingStudio</span>
        </div>
        <div className="hidden md:flex items-center ml-auto space-x-6 text-sm text-gray-800 font-semibold">
          <Link href="/features">Features</Link>
          <Link href="#">Documentation</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#" >FAQ</Link>
        </div>
        <Link
          href="#"
          className="ml-6 mr-6 text-white bg-blue-600 hover:bg-blue-700 transition px-4 py-2 text-sm rounded-md"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
