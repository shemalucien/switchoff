// 'use client';
// import React, { useState, FormEvent, useEffect } from 'react';
// import Image, { StaticImageData } from 'next/image';
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// import underage from '../../public/images/18.png';
// import invalidYearImage from '../../public/images/invalidYearImage.jpg';
// import dontdrink from '../../public/images/dontdrink.png';
// import pregnancy from '../../public/images/pregnant.png';
// import logo from '../../public/images/icon.png';


// // Define the prop types for SplashPage
// interface SplashPageProps {
//     onAccessGranted: () => void; // This function will be called when access is granted
// }

// // Interface error
// interface Error {
//     message: string;
//     imageUrl: StaticImageData;
// }

// const SplashPage: React.FC<SplashPageProps> = ({ onAccessGranted }) => {
//     const [day, setDay] = useState<string>('');
//     const [month, setMonth] = useState<string>('');
//     const [year, setYear] = useState<string>('');
//     const [error, setError] = useState<Error | null>(null);
//     const [darkMode, setDarkMode] = useState<boolean>(false);

//     useEffect(() => {
//         const savedTheme = localStorage.getItem('theme');
//         if (savedTheme === 'dark') {
//             setDarkMode(true);
//             document.documentElement.classList.add('dark');
//         } else {
//             setDarkMode(false);
//             document.documentElement.classList.remove('dark');
//         }
//     }, []);


//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         const today = new Date();
//         const currentYear = today.getFullYear();
//         const birthYear = parseInt(year, 10);

//         // Check if the year is within the valid range
//         if (birthYear > currentYear || birthYear < currentYear - 75) {
//             setError({
//                 message: 'Please enter a valid year.',
//                 imageUrl: invalidYearImage, // Assuming you have an image for this error
//             });
//             return;
//         }

//         const birthDate = new Date(`${year}-${month}-${day}`);
//         let age = today.getFullYear() - birthDate.getFullYear();
//         const m = today.getMonth() - birthDate.getMonth();
//         if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//             age--;
//         }

//         if (age < 18) {
//             setError({
//                 message: 'You must be at least 18 years old to access this website.',
//                 imageUrl: underage,
//             });
//         } else {
//             setWithExpiry('accessGranted', 'true', 3600000); // 3600000 milliseconds = 1 hour
//             onAccessGranted();
//         }
//     };

//     // Function to set a key in localStorage with an expiry time
//     function setWithExpiry(key: string, value: string, ttl: number) {
//         const now = new Date();
//         const item = {
//             value: value,
//             expiry: now.getTime() + ttl,
//         };
//         localStorage.setItem(key, JSON.stringify(item));
//     }

//     return (
//         <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-cyan-500 to-blue-500'}`}>
//             <div className={`bg-white ${darkMode ? 'text-black' : 'text-gray-800'} flex flex-col items-center justify-center border-2 w-full sm:w-1/2 mx-auto p-8 rounded-lg shadow-lg`}>
//                 <div className="flex items-center justify-center mb-8">
//                     <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
//                         <FaFacebook className={darkMode ? 'text-white' : 'text-gray-800'} />
//                     </a>
//                     <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                         <FaTwitter className={darkMode ? 'text-white' : 'text-gray-800'} />
//                     </a>
//                     <a href="https://www.instagram.com/switchoff_official/" target="_blank" rel="noopener noreferrer">
//                         <FaInstagram className={darkMode ? 'text-white' : 'text-gray-800'} />
//                     </a>
//                     <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
//                         <FaYoutube className={darkMode ? 'text-white' : 'text-gray-800'} />
//                     </a>
//                 </div>
//                 <h1 className="text-3xl font-bold mb-8 text-center">Welcome</h1>
//                 <div className="text-center flex flex-col md:flex-row gap-8">
//                     <div className="flex flex-col items-center justify-center">
//                         <Image src={logo} alt="Logo" width={200} height={200} />
//                     </div>
//                     <div className="flex flex-col items-center justify-center">
//                         <p className="text-lg font-bold mb-4">Please enter your date of birth</p>
//                         <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
//                             <div className="flex space-x-2">
//                                 <input
//                                     type="number"
//                                     value={day}
//                                     onChange={(e) => setDay(e.target.value)}
//                                     className={`border-2 border-gray-300 p-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
//                                     placeholder="Day"
//                                     required
//                                     min="1"
//                                     max="31"
//                                 />
//                                 <input
//                                     type="number"
//                                     value={month}
//                                     onChange={(e) => setMonth(e.target.value)}
//                                     className={`border-2 border-gray-300 p-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
//                                     placeholder="Month"
//                                     required
//                                     min="1"
//                                     max="12"
//                                 />
//                                 <input
//                                     type="number"
//                                     value={year}
//                                     onChange={(e) => setYear(e.target.value)}
//                                     className={`border-2 border-gray-300 p-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
//                                     placeholder="Year"
//                                     required
//                                     min="1900"
//                                     max="2099"
//                                 />
//                             </div>
//                             {error && (
//                                 <div className="flex items-center justify-center flex-col">
//                                     {error.imageUrl && <Image src={error.imageUrl} alt="Restricted Image" width={100} height={100} />}
//                                     <p className="text-red-500">{error.message}</p>
//                                 </div>
//                             )}
//                             <button type="submit" className="btn-primary text-white px-4 py-2 rounded-md">
//                                 Submit Age
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-center mt-8">
//                     <Image src={underage} alt="Underage Warning" width={30} height={30} className="mr-4" />
//                     <Image src={pregnancy} alt="Pregnancy Warning" width={30} height={30} className="mr-4" />
//                     <Image src={dontdrink} alt="Don't Drink Warning" width={30} height={30} className="mr-4" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SplashPage;

'use client';
import React, { useEffect, useRef, useState, FormEvent } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaFacebook, FaInstagram, FaMoon, FaSun, FaTwitter, FaYoutube } from 'react-icons/fa';
import underage from '../../public/images/18.png';
import invalidYearImage from '../../public/images/invalidYearImage.jpg';
import dontdrink from '../../public/images/dontdrink.png';
import pregnancy from '../../public/images/pregnant.png';
import logo from '../../public/images/icon.png';

interface SplashPageProps {
  onAccessGranted: () => void;
}

interface AgeGateError {
  message: string;
  imageUrl?: StaticImageData;
}

const SOCIAL_LINKS = [
  { icon: FaFacebook, href: 'https://www.facebook.com/switchoffdrinks', label: 'Switchoff on Facebook' },
  { icon: FaTwitter, href: 'https://www.twitter.com/switchoffdrinks', label: 'Switchoff on Twitter' },
  { icon: FaInstagram, href: 'https://www.instagram.com/switchoff_official/', label: 'Switchoff on Instagram' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@switchoffdrinks', label: 'Switchoff on YouTube' },
];

// Only allows digits, stripping anything else as the user types.
const digitsOnly = (value: string) => value.replace(/\D/g, '');

function isValidCalendarDate(day: number, month: number, year: number) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

const SplashPage: React.FC<SplashPageProps> = ({ onAccessGranted }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState<AgeGateError | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  useEffect(() => {
    if (error && errorRef.current) {
      errorRef.current.focus();
    }
  }, [error]);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);
    const today = new Date();
    const currentYear = today.getFullYear();

    if (yearNum > currentYear || yearNum < currentYear - 100) {
      setError({ message: 'Please enter a valid year.', imageUrl: invalidYearImage });
      return;
    }

    if (!isValidCalendarDate(dayNum, monthNum, yearNum)) {
      setError({ message: 'That date doesn’t look right — please double check it.', imageUrl: invalidYearImage });
      return;
    }

    const birthDate = new Date(yearNum, monthNum - 1, dayNum);
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    if (!hasHadBirthdayThisYear) age--;

    if (age < 18) {
      setError({ message: 'You must be at least 18 years old to access this website.', imageUrl: underage });
      return;
    }

    setError(null);
    setWithExpiry('accessGranted', 'true', 3600000); // 1 hour
    onAccessGranted();
  };

  function setWithExpiry(key: string, value: string, ttl: number) {
    const now = new Date();
    localStorage.setItem(key, JSON.stringify({ value, expiry: now.getTime() + ttl }));
  }

  const inputClasses =
    'w-full text-center border-2 border-gray-200 rounded-lg py-2.5 text-lg font-semibold tracking-wide ' +
    'text-gray-900 placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm transition-colors ' +
    'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 ' +
    'dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-brand-900';

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 px-4 py-10 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      <button
        type="button"
        onClick={toggleDarkMode}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
      >
        {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>

      <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Brand panel */}
          <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-brand-600 to-brand-900 px-8 py-10 text-center md:col-span-2">
            <Image src={logo} alt="Switchoff logo" width={140} height={140} className="drop-shadow-lg" />
            <div>
              <p className="text-lg font-bold text-white">Welcome to Switchoff</p>
              <p className="mt-1 text-sm text-brand-100">Premium refreshment & energy drinks</p>
            </div>
            <div className="flex items-center justify-center gap-4 pt-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Form panel */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 md:col-span-3">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Confirm your age</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Some Switchoff products contain alcohol. Please confirm your date of birth to continue.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Date of birth
                </legend>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label htmlFor="dob-day" className="sr-only">Day</label>
                    <input
                      id="dob-day"
                      ref={dayRef}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={2}
                      value={day}
                      onChange={(e) => {
                        const v = digitsOnly(e.target.value).slice(0, 2);
                        setDay(v);
                        if (v.length === 2) monthRef.current?.focus();
                      }}
                      placeholder="DD"
                      aria-label="Day of birth"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="dob-month" className="sr-only">Month</label>
                    <input
                      id="dob-month"
                      ref={monthRef}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={2}
                      value={month}
                      onChange={(e) => {
                        const v = digitsOnly(e.target.value).slice(0, 2);
                        setMonth(v);
                        if (v.length === 2) yearRef.current?.focus();
                      }}
                      placeholder="MM"
                      aria-label="Month of birth"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex-[1.4]">
                    <label htmlFor="dob-year" className="sr-only">Year</label>
                    <input
                      id="dob-year"
                      ref={yearRef}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={4}
                      value={year}
                      onChange={(e) => setYear(digitsOnly(e.target.value).slice(0, 4))}
                      placeholder="YYYY"
                      aria-label="Year of birth"
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>
              </fieldset>

              {error && (
                <div
                  ref={errorRef}
                  tabIndex={-1}
                  role="alert"
                  aria-live="assertive"
                  className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-900/20"
                >
                  {error.imageUrl && (
                    <Image src={error.imageUrl} alt="" width={40} height={40} className="shrink-0 rounded" />
                  )}
                  <p className="text-sm font-medium text-red-600 dark:text-red-300">{error.message}</p>
                </div>
              )}

              <button type="submit" className="btn-primary w-full">
                Enter Site
              </button>
            </form>

            <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-5 dark:border-gray-800">
              <div className="flex -space-x-1">
                <Image src={underage} alt="" width={28} height={28} title="Must be 18+" className="rounded-full ring-2 ring-white dark:ring-gray-900" />
                <Image src={pregnancy} alt="" width={28} height={28} title="Not for pregnant or nursing women" className="rounded-full ring-2 ring-white dark:ring-gray-900" />
                <Image src={dontdrink} alt="" width={28} height={28} title="Please drink responsibly" className="rounded-full ring-2 ring-white dark:ring-gray-900" />
              </div>
              <p className="text-xs leading-snug text-gray-400 dark:text-gray-500 p-5">
                Please drink responsibly. Not for sale to persons under 18 or to pregnant/nursing women.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;