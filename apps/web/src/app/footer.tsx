import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './logo1.png';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
 return (
    <footer className="bg-blue-950 text-white py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            {/* Logo */}
            <Image src={logo} alt="Logo" width={40} height={40} />
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-4 md:mb-0">All rights reserved. Terms & Conditions | Privacy and Policy Copyright © 2023</h2>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            {/* Social Media Icons */}
            <Link href="#">
              <FaFacebook className="mx-2" />
            </Link>
            <Link href="#">
              <FaFacebook className="mx-2" />
            </Link>
            <Link href="#">
              <FaFacebook className="mx-2" />
            </Link>
            <Link href="#">
              <FaFacebook className="mx-2" />
            </Link>
            <h2 className="mx-2">@switch@gmail.com</h2>
          </div>
        </div>
      </div>
    </footer>
 );
};

export default Footer;
