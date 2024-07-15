'use client';
// import Heading from "./Heading";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../navbar/page";

const Appointment = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);

  const submitForm = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        // @ts-expect-error: TypeScript error is expected here because form.current might be null, but it's handled elsewhere
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID as string
      )
      .then(
        (result) => {
          //console.log(result.text);
          sendAutoReply();
          result.status === 200 && setFormSubmitted(false);
          setFormSubmitted(false);
          setDataReceived(true);
          (event.target as HTMLFormElement).reset(); // Reset form fields
        },
        (error : Error) => {
          throw new Error(error.message || 'Something went wrong');
          // console.log(error.text);
        }
      );
  };




  const sendAutoReply = () => {
    const formData = new FormData(form.current);
    const userEmail = formData.get("email");
    // console.log(userEmail);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_APPOINTMENT as string, // Use the ID for the auto-reply template
        {
          name: formData.get("name"),
          email: userEmail,
          subject: formData.get("subject"),
          date: formData.get("date"),
          time: formData.get("time"),
          person: formData.get("person"),
          message: formData.get("message"),
          reply_to: userEmail,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID as string
      )
      .then(
        (result) => {
          result.status === 200 && setFormSubmitted(false);
          //console.log("Auto-reply sent:", result.text);
        },
        (error : Error) => {
          throw new Error(error.message || 'Something went wrong');
          //console.log("Auto-reply error:", error.text);
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
    dateInput: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
    },
    timeInput: {
      initial: { opacity: 0, x: 20 },
      exit: { opacity: 0, x: 10, transition: { duration: 0.3 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
    },
    dropdown: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4 } },
    },
    btn: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.6 } },
    },
  };

  const renderButtonLabel = () => {
    if (formSubmitted) {
      return (
        <>
          <div className="loader"></div>
        </>
      );
    } else if (dataReceived) {
      return "Appointment Booked!";
    } else {
      return "Book Appointment";
    }
  };

  return (
    <>
      <div className="mt-0 dark:text-white dark:bg-gray-900">
        <Navbar />
        <div className="bg-gray-200 text-black flex flex-col max-w-xl w-full mx-auto">
          <h3 className="text-2xl text-center font-semibold mb-4 mt-36">Book Appointment with Us</h3>
          <div className="mt-4 font-bodyText h-screen">
            <form
            // @ts-expect-error: TypeScript expects a different type for ref, but this is handled appropriately within the component
              ref={form}
              onSubmit={submitForm}
              className="flex flex-col items-center justify-center max-w-xl w-full mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full  dark:text-white dark:bg-gray-900">
                <motion.input
                  name="name"
                  variants={animations.nameInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full input border border-gray-300 mt-4 rounded-lg px-4 py-2 dark:text-white dark:bg-gray-900"
                  type="text"
                  placeholder="Full Name"
                  required />
                <motion.input
                  name="email"
                  variants={animations.emailInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full input border border-gray-300 mt-4 rounded-lg px-4 py-2 dark:text-white dark:bg-gray-900"
                  type="email"
                  placeholder="Email"
                  required />
              </div>
              <motion.input
                name="phoneNumber"
                variants={animations.emailInput}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full input  border border-gray-300 mt-4 rounded-lg px-4 py-2 dark:text-white dark:bg-gray-900"
                type="phone"
                placeholder="Phone Number"
                required />
              <motion.input
                name="subject"
                variants={animations.subjectInput}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full m-4 input border border-gray-300 mt-4 rounded-lg px-4 py-2 dark:text-white dark:bg-gray-900"
                type="text"
                placeholder="Subject"
                required />
              <motion.div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
                <motion.input
                  name="date"
                  variants={animations.dateInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full input border border-gray-300 mt-4 rounded-lg px-4 py-2 dark:text-white dark:bg-gray-900"
                  type="date"
                  placeholder="Select Date"
                  required />
                <motion.input
                  name="time"
                  variants={animations.timeInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full input border border-gray-300 mt-4 rounded-lg px-4 py-2 dark:text-white dark:bg-gray-900"
                  type="time"
                  placeholder="Select Time"
                  required />
              </motion.div>
              <motion.select
                name="person"
                variants={animations.dropdown}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full m-4 input border border-gray-300 mt-4 rounded-lg px-4 py-2  dark:text-white dark:bg-gray-900"
                required
              >
                <option value="" disabled selected>Select Person to Meet</option>
                <option value="Person A">Person A</option>
                <option value="Person B">Person B</option>
                <option value="Person C">Person C</option>
              </motion.select>
              <motion.textarea
                variants={animations.msgInput}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full m-2 h-28 input border border-gray-300 mt-4 rounded-lg px-4 py-2 dark:text-white dark:bg-gray-900"
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
                className={`btn mt-5 bg-blue-500 text-white py-2 px-4 rounded ${formSubmitted && "cursor-not-allowed"} `}
                type="submit"
              >
                {/* {formSubmitted ? (
                  <>
                    <div className="loader"></div>
                  </>
                ) : dataReceived ? (
                  "Appointment Sent"
                ) : (
                  "Book Appointment"
                )} */}
                 {renderButtonLabel()}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      </>
      );
};

      export default Appointment;
