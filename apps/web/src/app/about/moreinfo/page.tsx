'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from '../../navbar/page';
import Footer from '../../footer/page';
import bottle from '../../../../public/images/advert_1.png';
import { Award, Target, Heart, Globe } from 'lucide-react';

const MoreInfo = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white dark:bg-gray-900">
                {/* Hero Section */}
                <section className="container-page pt-8 pb-12 md:pt-16 md:pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="order-2 md:order-1">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <Image
                                    className='w-full h-auto object-cover'
                                    src={bottle}
                                    alt="DISSCO LTD Company"
                                    width={500}
                                    height={400}
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 md:order-2 space-y-6">
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400">
                                    Our Story
                                </span>
                                <h1 className="page-title text-gray-900 dark:text-white mt-3 mb-4">
                                    About DISSCO LTD
                                </h1>
                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Founded with a vision to transform the local market, DISSCO LTD began its journey with the ambition to deliver high-quality products at reasonable prices. Our experience in distributing various products led us to realize the need for something new and innovative.
                                </p>
                            </div>

                            {/* Key Points */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-100 dark:bg-brand-900/30">
                                            <Award className="text-brand-600 dark:text-brand-400" size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white text-sm">Premium Quality</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">Exceeding industry standards</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-100 dark:bg-brand-900/30">
                                            <Heart className="text-brand-600 dark:text-brand-400" size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white text-sm">Customer Focus</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">Satisfaction first always</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="divider container-page"></div>

                {/* Full Story Section */}
                <section className="container-page py-12 md:py-16">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Our Journey
                        </h2>
                        <div className="space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                Driven by our passion for excellence and fueled by our desire to make a difference, we embarked on a journey to create products that not only meet but exceed industry standards. Our dedication to quality, coupled with our unwavering commitment to customer satisfaction, sets us apart in the market.
                            </p>
                            <p>
                                At DISSCO LTD, we believe in continuous improvement and innovation. We are constantly striving to enhance our products and expand our reach to serve a wider audience. With a solid plan for growth and a focus on excellence, we are poised to make a significant impact in the market and beyond.
                            </p>
                            <p>
                                As a registered Rwandan company, we adhere to the highest standards of integrity, transparency, and professionalism in all our operations. We are proud to be a part of the vibrant Rwandan business community and are committed to contributing positively to its growth and development.
                            </p>
                            <p className="text-brand-600 dark:text-brand-400 font-semibold pt-4">
                                Join us on our journey as we continue to push the boundaries of quality, affordability, and innovation. Experience the difference with DISSCO LTD – where excellence meets affordability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="container-page py-12 md:py-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                            Our Core Values
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {/* Excellence */}
                            <div className="card-interactive group p-6 md:p-8 text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 dark:bg-brand-900/30 group-hover:scale-110 transition-transform duration-300">
                                        <Award className="text-brand-600 dark:text-brand-400" size={28} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    Excellence
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Commitment to superior quality in every product and service
                                </p>
                            </div>

                            {/* Innovation */}
                            <div className="card-interactive group p-6 md:p-8 text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent-100 dark:bg-accent-900/30 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="text-accent-600 dark:text-accent-400" size={28} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    Innovation
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Continuous improvement and creative solutions for growth
                                </p>
                            </div>

                            {/* Integrity */}
                            <div className="card-interactive group p-6 md:p-8 text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 group-hover:scale-110 transition-transform duration-300">
                                        <Heart className="text-green-600 dark:text-green-400" size={28} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    Integrity
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Transparency and professionalism in all operations
                                </p>
                            </div>

                            {/* Global Impact */}
                            <div className="card-interactive group p-6 md:p-8 text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-300">
                                        <Globe className="text-blue-600 dark:text-blue-400" size={28} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    Global Impact
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Contributing positively to communities worldwide
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container-page py-12 md:py-16">
                    <div className="bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl p-8 md:p-12 lg:p-16 text-center text-white">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                            Ready to Experience the Difference?
                        </h2>
                        <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                            Join thousands of customers who trust DISSCO LTD for quality, affordability, and excellence
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn-primary !bg-white !text-brand-600 hover:!bg-gray-100">
                                Shop Now
                            </button>
                            <button className="btn-ghost !text-white border-2 border-white hover:!bg-white/20">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default MoreInfo;
