import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image';
import flag from './flag.jpg';
import logo from './logo1.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-white fixed nav shadow-md z-50">
                <div>
                    <button onClick={() => { setNav(false); return undefined; }} aria-label="Logo">
                        <Image src={logo} alt="Logo" width={50} height={40} />
                    </button>
                </div>

                <ul className="hidden md:flex">
                    <li className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200 link-underline">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200">
                        <Link href="/about">About Us</Link>
                    </li>
                    <li className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200 relative">
                        <button onClick={() => { setDropdownOpen(!dropdownOpen); return undefined; }} className="focus:outline-none">
                            Brands
                        </button>
                        {dropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                                <li className="px-4 py-2">
                                    <Link href="/brands">Brand 1</Link>
                                </li>
                                <li className="px-4 py-2">
                                    <Link href="/brands">Brand 2</Link>
                                </li>
                                <li className="px-4 py-2">
                                    <Link href="/brands">Brand 3</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200">
                        <Link href="/contact">Get in touch</Link>
                    </li>
                    <li className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-black duration-200">
                        <Image src={flag} alt="Flag" width={40} height={40} />
                    </li>
                </ul>

                <button
                    onClick={() => { setNav(!nav); return undefined; }}
                    className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                    aria-label="Toggle navigation"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>

                {nav && (
                    <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full bg-gradient-to-b from-cyan-500 to-blue-500 text-white">
                        <li className="px-4 cursor-pointer capitalize py-4 text-xl">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="px-4 cursor-pointer capitalize py-4 text-xl">
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className="px-4 cursor-pointer capitalize py-4 text-xl relative">
                            <button onClick={() => { setDropdownOpen(!dropdownOpen); return undefined; }} className="focus:outline-none">
                                Brands
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-48 text-black bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                                    <li className="px-4 py-2">
                                        <Link href="/brands">Brand 1</Link>
                                    </li>
                                    <li className="px-4 py-2">
                                        <Link href="/brands">Brand 2</Link>
                                    </li>
                                    <li className="px-4 py-2">
                                        <Link href="/brands">Brand 3</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="px-4 cursor-pointer capitalize py-4 text-xl">
                            <Link href="/contact">Get in touch</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
