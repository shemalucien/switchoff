'use client';

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StepIndicator } from "../components/step-indicator";
import { FormInput } from "../components/form-input";
import { FormSelect } from "../components/form-select";
import { FormTextarea } from "../components/form-textarea";
import { Calendar, Clock, User } from "lucide-react";

interface AppointmentData {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  date: string;
  time: string;
  person: string;
  message: string;
}

const SUBJECTS = [
  { value: "consultation", label: "Product Consultation" },
  { value: "partnership", label: "Partnership Discussion" },
  { value: "feedback", label: "Feedback & Suggestions" },
  { value: "complaint", label: "Complaint" },
  { value: "other", label: "Other" },
];

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const STEPS = [
  { id: 1, label: "Purpose" },
  { id: 2, label: "Date & Time" },
  { id: 3, label: "Details" },
  { id: 4, label: "Confirm" },
];

const AppointmentPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    date: "",
    time: "",
    person: "1",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<AppointmentData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAppointmentData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<AppointmentData> = {};

    if (step === 1) {
      if (!appointmentData.subject) newErrors.subject = "Please select an appointment purpose";
    }

    if (step === 2) {
      if (!appointmentData.date) newErrors.date = "Please select a date";
      if (!appointmentData.time) newErrors.time = "Please select a time";
    }

    if (step === 3) {
      if (!appointmentData.name.trim()) newErrors.name = "Name is required";
      if (!appointmentData.email.trim()) newErrors.email = "Email is required";
      else if (!appointmentData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email";
      if (!appointmentData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStepChange = (step: number) => {
    if (step > currentStep && !validateStep(currentStep)) {
      return;
    }
    setCurrentStep(step);
  };

  const getMinDate = (): string => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);

    const emailData = {
      name: appointmentData.name,
      email: appointmentData.email,
      subject: SUBJECTS.find(s => s.value === appointmentData.subject)?.label || appointmentData.subject,
      date: appointmentData.date,
      time: appointmentData.time,
      person: appointmentData.person,
      message: appointmentData.message,
      reply_to: appointmentData.email,
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        emailData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID as string
      );

      if (result.status === 200) {
        toast.success("Appointment booked successfully! We'll contact you soon.");
        
        setTimeout(() => {
          setCurrentStep(1);
          setAppointmentData({
            name: "",
            email: "",
            phoneNumber: "",
            subject: "",
            date: "",
            time: "",
            person: "1",
            message: "",
          });
          if (form.current) form.current.reset();
        }, 1500);
      }
    } catch (error) {
      toast.error("Failed to book appointment. Please try again.");
      console.error("Appointment submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Appointment Purpose</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">What would you like to discuss with us?</p>
            </div>

            <FormSelect
              label="Select Purpose"
              name="subject"
              options={SUBJECTS}
              value={appointmentData.subject}
              onChange={handleInputChange}
              error={errors.subject}
              placeholder="Choose an appointment type"
              required
            />

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-900 dark:text-blue-200">
                We're here to help! Whether you have questions about our products, want to discuss partnership opportunities, or have feedback, we'd love to hear from you.
              </p>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Select Date & Time</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Choose when you'd like to meet with us.</p>
            </div>

            <div className="space-y-4">
              <FormInput
                label="Preferred Date"
                type="date"
                name="date"
                value={appointmentData.date}
                onChange={handleInputChange}
                error={errors.date}
                min={getMinDate()}
                required
              />

              <FormSelect
                label="Preferred Time"
                name="time"
                options={TIME_SLOTS.map(slot => ({ value: slot, label: slot }))}
                value={appointmentData.time}
                onChange={handleInputChange}
                error={errors.time}
                placeholder="Select a time slot"
                required
              />

              <FormSelect
                label="Number of Attendees"
                name="person"
                options={[
                  { value: "1", label: "Just me" },
                  { value: "2", label: "2 people" },
                  { value: "3", label: "3 people" },
                  { value: "4+", label: "4 or more people" },
                ]}
                value={appointmentData.person}
                onChange={handleInputChange}
              />
            </div>

            {appointmentData.date && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
                <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
                <div>
                  <p className="font-medium text-green-900 dark:text-green-200">{formatDate(appointmentData.date)}</p>
                  {appointmentData.time && <p className="text-sm text-green-700 dark:text-green-300">{appointmentData.time}</p>}
                </div>
              </div>
            )}
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Help us get in touch with you.</p>
            </div>

            <div className="space-y-4">
              <FormInput
                label="Full Name"
                type="text"
                name="name"
                value={appointmentData.name}
                onChange={handleInputChange}
                error={errors.name}
                placeholder="John Doe"
                required
              />

              <FormInput
                label="Email Address"
                type="email"
                name="email"
                value={appointmentData.email}
                onChange={handleInputChange}
                error={errors.email}
                placeholder="john@example.com"
                required
              />

              <FormInput
                label="Phone Number"
                type="tel"
                name="phoneNumber"
                value={appointmentData.phoneNumber}
                onChange={handleInputChange}
                error={errors.phoneNumber}
                placeholder="+250 7XX XXX XXX"
                required
              />

              <FormTextarea
                label="Additional Notes (Optional)"
                name="message"
                value={appointmentData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about what you'd like to discuss..."
                helpText="This helps us prepare for your appointment"
              />
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Confirm Your Appointment</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Please review your appointment details.</p>
            </div>

            {/* Appointment Details */}
            <div className="space-y-4">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Appointment Details</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-brand-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Purpose</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {SUBJECTS.find(s => s.value === appointmentData.subject)?.label}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-brand-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Date</p>
                      <p className="font-medium text-gray-900 dark:text-white">{formatDate(appointmentData.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-brand-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Time</p>
                      <p className="font-medium text-gray-900 dark:text-white">{appointmentData.time}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700 dark:text-gray-300"><strong>Name:</strong> {appointmentData.name}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> {appointmentData.email}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> {appointmentData.phoneNumber}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Attendees:</strong> {appointmentData.person} {appointmentData.person === "1" ? "person" : "people"}</p>
                </div>
              </div>

              {appointmentData.message && (
                <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Your Notes</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{appointmentData.message}</p>
                </div>
              )}

              <div className="alert alert-success">
                <p className="text-sm">A confirmation email will be sent to <strong>{appointmentData.email}</strong></p>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container-page">
          {/* Header */}
          <div className="mb-12">
            <h1 className="page-title text-4xl mb-2">Book an Appointment</h1>
            <p className="page-subtitle">Schedule a meeting with our team in just 4 easy steps</p>
          </div>

          {/* Step Indicator */}
          <StepIndicator steps={STEPS} currentStep={currentStep} />

          {/* Form */}
          <form ref={form} onSubmit={submitForm} className="max-w-3xl mx-auto">
            {/* Main content */}
            <div className="card-elevated p-8 md:p-12">
              {renderStepContent()}

              {/* Navigation buttons */}
              <div className="flex gap-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => handleStepChange(currentStep - 1)}
                  disabled={currentStep === 1}
                  className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed flex-1"
                >
                  Previous
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={() => handleStepChange(currentStep + 1)}
                    className="btn-primary flex-1"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Booking..." : "Confirm Appointment"}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={4000} />
    </div>
  );
};

export default AppointmentPage;
