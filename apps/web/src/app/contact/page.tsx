'use client';
import React from 'react';
import Image from 'next/image';
import dissco from '../../../public/images/dissco.png';
import underage from '../../../public/images/18.png';
import dontdrink from '../../../public/images/dontdrink.png';
import pregnancy from '../../../public/images/pregnant.png';
import Navbar from '../navbar/page';
import ScrollButton from '../scroll/page';

// const ContactUsSection = () => {
// Dummy data for partners
// const partners = [
//   { name: 'DISSCO LTD', address: 'City, Kigali, Rwanda,KN 20 Ave', logo: dissco, email: ' disscoltd04@gmail.com', tel: 250785135816 }
// ];

//   return (

//     <>
//       <Navbar />

//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col-reverse lg:flex-row lg:space-x-8">
//           {/* Column for Partners (Our Address) */}
//           <div className="mb-8 lg:w-1/2">
//             <h3 className="text-2xl font-semibold mb-4 text-left mt-4">Our Address</h3>
//             {partners.map((partner, index) => (
//               <div key={index} className="flex flex-col mb-8">
//                 <Image src={partner.logo} alt={partner.name} width={80} height={80} className="mr-4 rounded-lg" />
//                 <div className='m-1'>
//                   <h4 className="font-semibold">{partner.name}</h4>
//                 </div>
//                 <div className='m-1'>
//                   <h4 className="font-semibold">{partner.address}</h4>
//                 </div>
//                 <div className='m-1'>
//                   <p className="font-semibold">Email: {partner.email}</p>
//                 </div>
//                 <div className='m-1'>
//                   <p className="font-semibold">Tel: +{partner.tel}</p>
//                 </div>
//                 <div className="flex mt-8">
//                   <Image src={underage} alt="Logo" width={30} height={20} className='mr-4' />
//                   <Image src={pregnancy} alt="Logo" width={30} height={20} className='mr-4' />
//                   <Image src={dontdrink} alt="Logo" width={30} height={20} className='mr-4' />
//                 </div>
//               </div>
//             ))}
//           </div>


//           {/* Column for Contact Form */}
//           <div className="lg:w-1/2">
//             <h3 className="text-2xl font-semibold mb-4 mt-4">Connect with Us</h3>
//             <form className="space-y-4">
//               <div className="mb-4">
//                 <label htmlFor="name" className="block mb-1">Name:</label>
//                 <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="phone" className="block mb-1">Phone:</label>
//                 <input type="text" id="phone" name="phone" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="comment" className="block mb-1">Comment:</label>
//                 <textarea id="comment" name="comment" className="w-full border border-gray-300 rounded-lg px-4 py-2"></textarea>
//               </div>
//               <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
//             </form>
//           </div>
//         </div>

//         {/* Back to Top Button */}
//         <button className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={() => { window.scrollTo(0, 0); }}>
//           <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
//           </svg>
//         </button>
//       </div>

//     </>
//   );
// };

// export default ContactUsSection;


import Heading from "../contact/Heading";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUsSection = () => {
  const partners = [
    { name: 'DISSCO LTD', address: 'City, Kigali, Rwanda,KN 20 Ave', logo: dissco, email: ' disscoltd04@gmail.com', tel: 250785135816 }
  ];
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const submitForm = (event: any) => {
    event.preventDefault();
    setFormSubmitted(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        // @ts-ignore
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(false);
          setDataReceived(true);
          event.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const animations = {
    nameInput: {
      initial: { opacity: 0, x: 20 },
      exit: { opacity: 0, x: 10, transition: { duration: 0.3 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
    },
    emailInput: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
    },
    subjectInput: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4 } },
    },
    msgInput: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.5 } },
    },
    btn: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.6 } },
    },
  };
  return (
    <>

      <div className="px-2 lg:px-10  dark:text-white dark:bg-gray-900">

        <div className="flex flex-col-reverse lg:flex-row lg:space-x-8">
          {/* Column for Partners (Our Address) */}
          <div className="lg:w-1/2">
            <div className="mt-10 font-bodyText">
              <h3 className="text-2xl font-semibold mb-4 text-left mt-4">Our Address</h3>
              {partners.map((partner, index) => (
                <div key={index} className="flex flex-col mb-8">
                  <Image src={partner.logo} alt={partner.name} width={80} height={80} className="mr-4 rounded-lg" />
                  <div className='m-1'>
                    <h4 className="font-semibold">{partner.name}</h4>
                  </div>
                  <div className='m-1'>
                    <h4 className="font-semibold">{partner.address}</h4>
                  </div>
                  <div className='m-1'>
                    <p className="font-semibold">Email: {partner.email}</p>
                  </div>
                  <div className='m-1'>
                    <p className="font-semibold">Tel: +{partner.tel}</p>
                  </div>
                  <div className="flex mt-8">
                    <Image src={underage} alt="Logo" width={30} height={20} className='mr-4' />
                    <Image src={pregnancy} alt="Logo" width={30} height={20} className='mr-4' />
                    <Image src={dontdrink} alt="Logo" width={30} height={20} className='mr-4' />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="mt-10 font-bodyText">
              <form
                // @ts-ignore
                ref={form}
                onSubmit={submitForm}
                className="flex flex-col items-center justify-center max-w-xl w-full mx-auto"
              >
                <h3 className="text-2xl font-semibold mb-4 mt-4">Connect with Us</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
                  <motion.input
                    name="name"
                    variants={animations.nameInput}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full input border border-gray-300 rounded-lg px-4 py-2  dark:text-white dark:bg-gray-900"
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                  <motion.input
                    name="email"
                    variants={animations.emailInput}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full input border border-gray-300 rounded-lg px-4 py-2  dark:text-white dark:bg-gray-900"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <motion.input
                  name="phoneNumber"
                  variants={animations.emailInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full input  border border-gray-300 mt-4 rounded-lg px-4 py-2  dark:text-white dark:bg-gray-900"
                  type="phone"
                  placeholder="Phone Number"
                  required
                />
                <motion.input
                  name="subject"
                  variants={animations.subjectInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full m-4 input border border-gray-300 rounded-lg px-4 py-2  dark:text-white dark:bg-gray-900"
                  type="text"
                  placeholder="Subject"
                  required
                />
                <motion.textarea
                  variants={animations.msgInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full m-2 h-28 input border border-gray-300 rounded-lg px-4 py-2  dark:text-white dark:bg-gray-900"
                  placeholder="Message"
                  name="message"
                  required
                ></motion.textarea>
                <motion.button
                  variants={animations.btn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  disabled={formSubmitted}
                  className={`btn mt-2 bg-blue-500 text-white py-2 px-4 rounded ${formSubmitted && "cursor-not-allowed"} `}
                  type="submit"
                >
                  {formSubmitted ? (
                    <>
                      <div className="loader"></div>
                    </>
                  ) : dataReceived ? (
                    "Message Sent"
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
        {/* Back to Top Button */}
        <ScrollButton />
      </div>
    </>
  );
};

export default ContactUsSection;