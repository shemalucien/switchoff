'use client';
import React, { useState, FormEvent, useEffect } from 'react';
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

// inferface error
interface Error {
    message: string;
    imageUrl: StaticImageData;
}

const SplashPage: React.FC<SplashPageProps> = ({ onAccessGranted }) => {
    // const [dob, setDob] = useState<string>('');
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [error, setError] = useState<Error | null>(null);

    // Check local storage for access status on component mount
    useEffect(() => {
        const accessGranted = localStorage.getItem('accessGranted');
        if (accessGranted === 'true') {
            onAccessGranted();
        }
        // Explicitly return undefined to avoid potential ESLint warnings
        return undefined;

    }, [onAccessGranted]);


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const today = new Date();
        // const birthDate = new Date(dob);
        const birthDate = new Date(`${year}-${month}-${day}`);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            setError({
                message: 'You must be at least 18 years old to view this content.',
                imageUrl: underage,
            });
        } else {
            // // Store access status in local storage
            // localStorage.setItem('accessGranted', 'true');

            // Store access status in local storage with expiry time
            setWithExpiry('accessGranted', 'true', 3600000); // 3600000 milliseconds = 1 hour
            // Call the onAccessGranted function to indicate access is granted
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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">

            <div className="flex flex-col items-center justify-center border-2 w-full sm:w-1/2 mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-center mb-8">
                    {/* Social Media Icons */}
                    <Link href="#">
                        <FaFacebook className="mx-2" />
                    </Link>
                    <Link href="#">
                        <FaTwitter className="mx-2" />
                    </Link>
                    <Link href="#">
                        <FaInstagram className="mx-2" />
                    </Link>
                    <Link href="#">
                        <FaYoutube className="mx-2" />
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
                            {/* <input
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="border-2 border-gray-300 p-2 rounded-md"
                                required
                            /> */}

                            <div className="flex space-x-2 dark:text-white">
                                <input
                                    type="number"
                                    value={day}
                                    onChange={(e) => setDay(e.target.value)}
                                    className="border-2 border-gray-300 p-2 rounded-md"
                                    placeholder="Day"
                                    required
                                    min="1"
                                    max="31"
                                />
                                <input
                                    type="number"
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                    className="border-2 border-gray-300 p-2 rounded-md"
                                    placeholder="Month"
                                    required
                                    min="1"
                                    max="12"
                                />
                                <input
                                    type="number"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className="border-2 border-gray-300 p-2 rounded-md"
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
                    <Image src={underage} alt="Logo" width={30} height={30} className='mr-4' />
                    <Image src={pregnancy} alt="Logo" width={30} height={30} className='mr-4' />
                    <Image src={dontdrink} alt="Logo" width={30} height={30} className='mr-4' />
                </div>
            </div>
        </div>

    );
};

export default SplashPage;
