import React from 'react';
import Image from 'next/image';
import * as images from '@/constants/images';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full h-1/8 bg-background  z-50'>
      <div className='h-full  mx-auto px-4 md:px-16 flex justify-between items-center'>
        {/* Logo/Name Section */}
        <div className="flex items-center gap-4 text-white">
          <Image
            src={images.avatarImage}
            alt="Marin Ivošević"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl font-semibold">Marin Ivošević</h1>
        </div>

        {/* Navigation Links */}
        <div className='hidden md:flex items-center gap-8 text-2xl text-white'>
          <Link href="#about" className="hover:text-gray-300 transition-colors hover:border-b-2 border-accent">About Me</Link>
          <Link href="#projects" className="hover:text-gray-300 transition-colors hover:border-b-2 border-accent">Projects</Link>
          <Link href="#contact" className="hover:text-gray-300 transition-colors hover:border-b-2 border-accent">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;