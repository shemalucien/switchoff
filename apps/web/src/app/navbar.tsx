import Link from "next/link";
import React, { useState } from "react";
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

        // {
        //     id: 5,
        //     link: <Image src={flag} alt="Image 1" width={40} height={40} />,
        // }

    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-white fixed nav shadow-md z-50">
            <div>
                {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
                {/* <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a>
        </h1> */}
                <Image src={logo} alt="Image 1" width={50} height={40} onClick={() => setNav(false)} />
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline"
                    >
                        <Link href={link}>{link}</Link>
                    </li>
                ))}
                <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200">
                <Image src={flag} alt="Image 1" width={40} height={40} />
                </li>
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-800 text-black">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
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