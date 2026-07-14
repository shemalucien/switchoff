'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes, FaShoppingCart, FaHeart } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import logo from "../../../public/images/icon.png";
import { useStoredIds } from "../../lib/use-stored-ids";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
   { href: "/brands", label: "Our Brands" },
  { href: "/products", label: "Our Products" },
  { href: "/catalog", label: "Catalog" },
  // { href: "/contact", label: "Contact" },
];

function Navbar() {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const wishlist = useStoredIds("switchoff:wishlist");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setNav(false);
  }, [pathname]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 shadow-lg backdrop-blur-sm dark:bg-gray-900/95" 
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link aria-label="Switchoff home" className="shrink-0 group" href="/">
          <div className="relative flex items-center gap-2">
            <Image alt="Switchoff logo" className="group-hover:opacity-80 transition-opacity" height={38} priority src={logo} width={48} />
            <span className="hidden sm:inline font-bold text-lg text-gray-900 dark:text-white">Switchoff</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center md:flex gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className={`relative px-4 py-2 text-sm font-semibold capitalize transition-all duration-200 rounded-lg ${
                  isActive(link.href)
                    ? "text-brand-600 bg-brand-50 dark:text-brand-400 dark:bg-brand-900/20"
                    : "text-gray-700 hover:text-brand-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-brand-400 dark:hover:bg-gray-800"
                }`}
                href={link.href}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                    layoutId="nav-underline"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right-side actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Link aria-label="Wishlist" className="btn-ghost-icon relative" href="/products">
            <FaHeart className="text-lg" />
            {wishlist.ids.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[10px] font-bold text-white">
                {wishlist.ids.length}
              </span>
            )}
          </Link>

          <Link className="btn-primary hidden sm:inline-flex text-sm px-4 py-2" href="/order">
            <FaShoppingCart /> Order
          </Link>

          <Link className="btn-secondary hidden lg:inline-flex text-sm px-4 py-2" href="/appointment">
            Appointment
          </Link>

          <button aria-label="Toggle dark mode" className="btn-ghost-icon" onClick={toggleDarkMode}>
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>

          <button
            aria-expanded={nav}
            aria-label="Toggle navigation menu"
            className="btn-ghost-icon md:hidden"
            onClick={() => setNav((v) => !v)}
          >
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {nav ? <motion.ul
            animate={{ opacity: 1, height: "auto" }}
            className="flex flex-col overflow-hidden bg-white shadow-lg dark:bg-gray-900 md:hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            {links.map((link) => (
              <li className="border-t border-gray-100 dark:border-gray-800" key={link.href}>
                <Link
                  className={`block px-6 py-4 text-base font-semibold capitalize ${
                    isActive(link.href) ? "text-brand-600" : "text-gray-700 dark:text-gray-200"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-gray-100 px-6 py-4 dark:border-gray-800">
              <Link className="btn-secondary w-full" href="/appointment">
                Book an Appointment
              </Link>
            </li>
            <li className="border-t border-gray-100 px-6 py-4 pb-6 dark:border-gray-800">
              <Link className="btn-primary w-full" href="/order">
                <FaShoppingCart /> Order Now
              </Link>
            </li>
          </motion.ul> : null}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
