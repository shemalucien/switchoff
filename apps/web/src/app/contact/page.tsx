'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import dissco from '../../../public/images/dissco.png';
import underage from '../../../public/images/18.png';
import pregnancy from '../../../public/images/pregnant.png';
import dontdrink from '../../../public/images/dontdrink.png';
import ScrollButton from '../scroll/page';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import 'react-toastify/dist/ReactToastify.css';
import { FormInput } from "../components/form-input";
import { FormTextarea } from "../components/form-textarea";

interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

function ContactUsSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const partners = [
    {
      name: 'DISSCO LTD',
      address: 'KN 20 Ave, Kigali, Rwanda',
      logo: dissco,
      email: 'disscoltd04@gmail.com',
      tel: '+250 (785) 135-816',
      hours: 'Monday - Saturday: 7:00 AM - 10:00 PM'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.exec(formData.email))) newErrors.email = "Invalid email";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    const emailData = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        emailData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID as string
      );

      if (result.status === 200) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: "", email: "", phoneNumber: "", subject: "", message: "" });
        if (form.current) form.current.reset();
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900 min-h-screen">
        <div className="container-page">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="section-heading mb-4">Get in Touch</h2>
            <p className="section-subheading">We&apos;d love to hear from you. Reach out to us with any questions or feedback.</p>
          </div>

         

          {/* Contact Form */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="card-elevated p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send us a Message</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

              <form className="space-y-6" onSubmit={submitForm} ref={form}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    error={errors.name}
                    label="Full Name"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    type="text"
                    value={formData.name}
                  />

                  <FormInput
                    error={errors.email}
                    label="Email Address"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    type="email"
                    value={formData.email}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    error={errors.phoneNumber}
                    label="Phone Number"
                    name="phoneNumber"
                    onChange={handleInputChange}
                    placeholder="+250 7XX XXX XXX"
                    required
                    type="tel"
                    value={formData.phoneNumber}
                  />

                  <FormInput
                    error={errors.subject}
                    label="Subject"
                    name="subject"
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    required
                    type="text"
                    value={formData.subject}
                  />
                </div>

                <FormTextarea
                  error={errors.message}
                  label="Message"
                  name="message"
                  onChange={handleInputChange}
                  placeholder="Tell us what you're thinking..."
                  required
                  value={formData.message}
                />

                <button
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-200">
                  We typically respond to all inquiries within 24 business hours. Thank you for reaching out!
                </p>
              </div>
            </div>
          </motion.div>


           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 mt-10">
            {/* Contact Info Cards */}
            {partners.map((partner, index) => (
              <motion.div
                className="card-surface p-8"
                initial={{ opacity: 0, y: 20 }}
                key={index}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Image
                  alt={partner.name}
                  className="mb-6 rounded-lg"
                  height={100}
                  src={partner.logo}
                  width={100}
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{partner.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{partner.address}</p>

                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-sm"
                      href={`mailto:${partner.email}`}
                    >
                      {partner.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-sm"
                      href={`tel:${partner.tel}`}
                    >
                      {partner.tel}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{partner.hours}</p>
                  </div>
                </div>

                {/* Responsible Drinking Badges */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-semibold uppercase">Responsible Drinking</p>
                  <div className="flex gap-2">
                    <Image alt="Not for underage" className="rounded" height={40} src={underage} title="Not for underage" width={40} />
                    <Image alt="Not during pregnancy" className="rounded" height={40} src={pregnancy} title="Not during pregnancy" width={40} />
                    <Image alt="Don't drink and drive" className="rounded" height={40} src={dontdrink} title="Don't drink and drive" width={40} />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Links Card */}
            <motion.div
              className="card-surface p-8"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors block text-sm font-medium" href="/">Home</a>
                <a className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors block text-sm font-medium" href="/about">About Us</a>
                <a className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors block text-sm font-medium" href="/products">Products</a>
                <a className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors block text-sm font-medium" href="/appointment">Book Appointment</a>
                <a className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors block text-sm font-medium" href="/order">Place Order</a>
              </div>
            </motion.div>

            {/* Response Time Card */}
            <motion.div
              className="card-surface p-8 bg-gradient-to-br from-brand-50 to-accent-50 dark:from-brand-900/20 dark:to-accent-900/20"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Support</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Response Time</p>
                  <p className="text-lg font-semibold text-brand-600 dark:text-brand-400">Within 24 hours</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Email Support</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Available 24/7</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Call Support</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Business hours only</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <ScrollButton />
      <ToastContainer autoClose={4000} position="bottom-right" />
      {/* <Footer /> */}
    </>
  );
}

export default ContactUsSection;
