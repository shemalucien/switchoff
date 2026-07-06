import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../../public/images/icon.png";
import NewsletterSignup from "../components/newsletter-signup";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
];

const support = [
  { href: "/contact", label: "Contact" },
  { href: "/appointment", label: "Book an Appointment" },
  { href: "/order", label: "Order Now" },
];

const socials = [
  { href: "https://www.facebook.com", icon: FaFacebook, label: "Facebook" },
  { href: "https://www.twitter.com", icon: FaTwitter, label: "Twitter" },
  { href: "https://www.instagram.com/switchoff_official/", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.youtube.com", icon: FaYoutube, label: "YouTube" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-white dark:bg-gray-900 dark:border-gray-800">
      <div className="container-page py-12 md:py-16">
        <NewsletterSignup variant="dark" />

        <div className="mt-12 md:mt-16 divider" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image alt="Switchoff logo" className="rounded bg-white p-1" height={36} src={logo} width={44} />
              <span className="text-lg font-bold">Switchoff</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">Excellence in every pour. Bringing refreshing innovation to beverage branding.</p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-all duration-200
                    hover:bg-brand-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
                  href={href}
                  key={label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link className="text-gray-300 transition-colors duration-200 hover:text-brand-400" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Support</h4>
            <ul className="space-y-2.5 text-sm">
              {support.map((l) => (
                <li key={l.href}>
                  <Link className="text-gray-300 transition-colors duration-200 hover:text-brand-400" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <div className="space-y-2.5 text-sm text-gray-300">
              <p>
                <a className="transition-colors duration-200 hover:text-brand-400" href="mailto:hello@switchoffdrinks.com">
                  switchoff@gmail.com
                </a>
              </p>
              <p>
                <a className="transition-colors duration-200 hover:text-brand-400" href="tel:+1234567890">
                 +250 (785) 135-816
                </a>
              </p>
              <p className="mt-4 text-xs text-gray-400">Monday - Saturday: 7:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 divider" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <p>&copy; {year} Switchoff Drinks. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="transition-colors duration-200 hover:text-brand-400" href="#">
              Privacy Policy
            </Link>
            <Link className="transition-colors duration-200 hover:text-brand-400" href="#">
              Terms of Service
            </Link>
            <Link className="transition-colors duration-200 hover:text-brand-400" href="#">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
