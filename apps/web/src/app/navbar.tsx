import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image';
import flag from './flag.jpg';
import logo from './logo1.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About Us",
        },
        {
            id: 3,
            link: "Brands",
        },
        {
            id: 4,
            link: "Get in touch",
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-white fixed nav shadow-md z-50">
            <div>
                <button onClick={() => { setNav(false); }} aria-label="Logo">
                    <Image src={logo} alt="Logo" width={50} height={40} />
                </button>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200 link-underline"
                    >
                        <Link href={link}>{link}</Link>
                    </li>
                ))}
                <li className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-black duration-200">
                    <Image src={flag} alt="Flag" width={40} height={40} />
                </li>
            </ul>

            <button
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                aria-label="Toggle navigation"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-500 to-blue-500 text-white">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link href={link}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
