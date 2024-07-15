'use client';
import React, { useState, FormEvent, useEffect} from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import underage from '../../public/images/18.png';
import dontdrink from '../../public/images/dontdrink.png';
import pregnancy from '../../public/images/pregnant.png';
import logo from '../../public/images/logo.png';


// Define the prop types for SplashPage
interface SplashPageProps {
    onAccessGranted: () => void; // This function will be called when access is granted
}

// Interface error
interface Error {
    message: string;
    imageUrl: StaticImageData;
}

const SplashPage: React.FC<SplashPageProps> = ({ onAccessGranted }) => {
    const [day, setDay] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [error, setError] = useState<Error | null>(null);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const today = new Date();
        const birthDate = new Date(`${year}-${month}-${day}`);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            setError({
                message: 'You must be at least 18 years old to access this website.',
                imageUrl: underage,
            });
        } else {
            setWithExpiry('accessGranted', 'true', 3600000); // 3600000 milliseconds = 1 hour
            onAccessGranted();
        }
    };

    // Function to set a key in localStorage with an expiry time
    function setWithExpiry(key: string, value: string, ttl: number) {
        const now = new Date();
        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        };
        localStorage.setItem(key, JSON.stringify(item));
    }

    return (
        <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-cyan-500 to-blue-500'}`}>
            <div className={`bg-white ${darkMode ? 'text-black' : 'text-gray-800'} flex flex-col items-center justify-center border-2 w-full sm:w-1/2 mx-auto p-8 rounded-lg shadow-lg`}>
                <div className="flex items-center justify-center mb-8">
                    <Link href="#">
                        <FaFacebook className={darkMode ? 'text-white' : 'text-gray-800'} />
                    </Link>
                    <Link href="#">
                        <FaTwitter className={darkMode ? 'text-white' : 'text-gray-800'} />
                    </Link>
                    <Link href="#">
                        <FaInstagram className={darkMode ? 'text-white' : 'text-gray-800'} />
                    </Link>
                    <Link href="#">
                        <FaYoutube className={darkMode ? 'text-white' : 'text-gray-800'} />
                    </Link>
                </div>
                <h1 className="text-3xl font-bold mb-8 text-center">Welcome</h1>
                <div className="text-center flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col items-center justify-center">
                        <Image src={logo} alt="Logo" width={200} height={200} />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-lg font-bold mb-4">Please enter your date of birth</p>
                        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
                            <div className="flex space-x-2">
                                <input
                                    type="number"
                                    value={day}
                                    onChange={(e) => setDay(e.target.value)}
                                    className={`border-2 border-gray-300 p-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                                    placeholder="Day"
                                    required
                                    min="1"
                                    max="31"
                                />
                                <input
                                    type="number"
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                    className={`border-2 border-gray-300 p-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                                    placeholder="Month"
                                    required
                                    min="1"
                                    max="12"
                                />
                                <input
                                    type="number"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className={`border-2 border-gray-300 p-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                                    placeholder="Year"
                                    required
                                    min="1900"
                                    max="2099"
                                />
                            </div>
                            {error && (
                                <div className="flex items-center justify-center flex-col">
                                    {error.imageUrl && <Image src={error.imageUrl} alt="Restricted Image" width={100} height={100} />}
                                    <p className="text-red-500">{error.message}</p>
                                </div>
                            )}
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                Submit Age
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <Image src={underage} alt="Underage Warning" width={30} height={30} className="mr-4" />
                    <Image src={pregnancy} alt="Pregnancy Warning" width={30} height={30} className="mr-4" />
                    <Image src={dontdrink} alt="Don't Drink Warning" width={30} height={30} className="mr-4" />
                </div>
            </div>
        </div>
    );
};

export default SplashPage;

