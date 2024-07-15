'use client';
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image';
// import flag from '../../../public/images/flag.jpg';
import logo from '../../../public/images/logo1.png';
import { FaShoppingCart } from "react-icons/fa"; // Importing the shopping cart icon
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    // const [dropdownOpen, setDropdownOpen] = useState(false);
    const navRef: MutableRefObject<HTMLUListElement | null> = useRef(null);
    const [darkMode, setDarkMode] = useState(false);

    const handleClickOutside = (event :MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setNav(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    return (
        <nav className="bg-white border-gray-200  dark:border-gray-700  dark:text-white ">
            <div className="bg-white flex justify-between items-center w-full h-20 px-4 text-black fixed nav shadow-md z-50 dark:bg-gray-900 dark:text-white">
                <div>
                    <Link href="/">
                        <button onClick={() => { setNav(false); return undefined; }} aria-label="Logo">
                            <Image src={logo} alt="Logo" width={50} height={40} />
                        </button>
                    </Link>
                </div>

                <ul className="hidden md:flex">
                    <li className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200 link-underline dark:text-white">
                        <Link href="/">Home</Link>
                    </li>
                    {/* <li className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200">
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
                            </ul>
                        )}
                    </li> */}
                    {/* <li className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200">
                        <Link href="/contact">Get in touch</Link>
                    </li> */}

                    <li className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200 dark:text-white dark:bg-gray-900">
                        <Link href="/appointment">Book an Appointment</Link>
                    </li>

                    <li className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200 flex items-center dark:text-white dark:bg-gray-900">
                        <Link href="/order">
                            <div className="flex items-center ">
                                <FaShoppingCart />
                                <span className="ml-2">Order Now </span>
                            </div>
                        </Link>
                    </li>

                    <li className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black dark:text-white dark:bg-gray-900 dark:hover:text-white duration-200 flex items-center">
                        <button onClick={toggleDarkMode} className="focus:outline-none">
                            {darkMode ? <BsSun /> : <BsMoon />}
                        </button>
                    </li>

                    {/* <li className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-black duration-200">
                        <Image src={flag} alt="Flag" width={40} height={40} />
                    </li> */}
                </ul>


                {nav && (
                    <ul ref={navRef} className="flex flex-col justify-center items-center fixed mt-20 top-0 left-1/2 transform -translate-x-1/2 w-2/3 bg-gradient-to-b from-cyan-500 to-blue-500 text-white">
                        <li className="px-4 cursor-pointer capitalize py-4 text-xl hover:bg-gradient-to-b from-cyan-500 to-blue-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                            <Link href="/">Home</Link>
                        </li>
                        {/* <li className="px-4 cursor-pointer capitalize py-4 text-xl hover:bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className="px-4 cursor-pointer capitalize py-4 text-xl relative hover:bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
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
                        <li className="px-4 cursor-pointer capitalize py-4 text-xl hover:bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                            <Link href="/contact">Get in touch</Link>
                        </li> */}

                        <li className="px-4 cursor-pointer capitalize py-4 text-xl hover:bg-gradient-to-b from-cyan-500 to-blue-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                            <Link href="/appointment">Book an Appointment</Link>
                        </li>

                        <li className="px-4 cursor-pointer capitalize py-4 text-xl hover:bg-gradient-to-b from-cyan-500 to-blue-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                            <Link href="/order">
                                <div className="flex items-center">
                                    <FaShoppingCart />
                                    <span className="ml-2">Order Now </span>
                                </div>
                            </Link>
                        </li>

                    </ul>

                )}

                <div className="flex items-center space-x-4 lg:hidden">

                    <button
                        onClick={toggleDarkMode}
                        className="focus:outline-none cursor-pointer text-gray-500 md:hidden"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <BsSun size={30} /> : <BsMoon size={30} />}
                    </button>

                    <button
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {nav ? (
                            <FaTimes size={30} />
                        ) : (
                            <FaBars size={30} />
                        )}
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
