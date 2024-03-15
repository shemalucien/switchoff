// components/Footer.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './logo1.png';
import {FaFacebook} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-8 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <Image src={logo} alt="Logo" width={40} height={40} />
        </div>
        <div>
          <h2>All rights reserved. Terms & Conditions | Privacy and Policy Copyright © 2023</h2>
        </div>
        <div className="flex items-center">
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
    </footer>
  );
};

export default Footer;
