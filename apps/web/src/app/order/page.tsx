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
import { Trash2, Plus } from "lucide-react";

interface OrderItem {
  product: string;
  quantity: number;
  price: number;
}

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  payment: string;
  message: string;
}

const PRODUCTS = {
  "SwitchOff Energy Drink": { name: "SwitchOff Energy Drink", price: 15000, description: "Premium energy drink with natural guarana" },
  "SwitchOff Nice Guarrana": { name: "SwitchOff Nice Guarrana", price: 20000, description: "Enhanced formula with extra guarana boost" },
};

const PAYMENT_OPTIONS = [
  { value: "credit-card", label: "Credit Card" },
  { value: "debit-card", label: "Debit Card" },
  { value: "mobile-money", label: "Mobile Money" },
  { value: "cash-on-delivery", label: "Cash on Delivery" },
];

const STEPS = [
  { id: 1, label: "Products" },
  { id: 2, label: "Details" },
  { id: 3, label: "Payment" },
  { id: 4, label: "Confirm" },
];

const OrderPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    payment: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const calculateTotal = () => {
    return orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleAddProduct = () => {
    if (!selectedProduct || quantity < 1) {
      toast.error("Please select a product and quantity");
      return;
    }

    const product = PRODUCTS[selectedProduct as keyof typeof PRODUCTS];
    const newItem: OrderItem = {
      product: product.name,
      quantity,
      price: product.price,
    };

    setOrderItems([...orderItems, newItem]);
    setSelectedProduct("");
    setQuantity(1);
    toast.success("Product added to order");
  };

  const handleRemoveItem = (index: number) => {
    setOrderItems(orderItems.filter((_, i) => i !== index));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 1 && orderItems.length === 0) {
      toast.error("Please add at least one product");
      return false;
    }

    if (step === 2) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email";
      if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    }

    if (step === 3) {
      if (!formData.payment) newErrors.payment = "Payment method is required";
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

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);

    const orderSummary = orderItems
      .map((item) => `${item.product} (${item.quantity} x RWF ${item.price.toLocaleString()})`)
      .join("\n");
    const totalPrice = calculateTotal();

    const emailData = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      orders: orderSummary,
      totalPrice: `RWF ${totalPrice.toLocaleString()}`,
      payment: formData.payment,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_2 as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ORDER as string,
        emailData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID_2 as string
      );

      if (result.status === 200) {
        toast.success("Order placed successfully! Check your email for confirmation.");
        setTimeout(() => {
          setCurrentStep(1);
          setOrderItems([]);
          setFormData({ name: "", email: "", phoneNumber: "", payment: "", message: "" });
          if (form.current) form.current.reset();
        }, 1500);
      }
    } catch (error) {
      toast.error("Failed to submit order. Please try again.");
      console.error("Order submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Select Products</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Choose the products you'd like to order.</p>
            </div>

            <div className="space-y-4">
              <FormSelect
                label="Product"
                options={Object.entries(PRODUCTS).map(([key, val]) => ({
                  value: key,
                  label: `${val.name} - RWF ${val.price.toLocaleString()}`,
                }))}
                placeholder="Select a product"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                required
              />

              <FormInput
                label="Quantity"
                type="number"
                min="1"
                max="100"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                required
              />

              <button
                type="button"
                onClick={handleAddProduct}
                className="btn-primary w-full gap-2"
              >
                <Plus className="h-5 w-5" />
                Add to Order
              </button>
            </div>

            {/* Order Items List */}
            {orderItems.length > 0 && (
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h4>
                <div className="space-y-3">
                  {orderItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">{item.product}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Qty: {item.quantity} × RWF {item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-semibold text-gray-900 dark:text-white">RWF {(item.price * item.quantity).toLocaleString()}</p>
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(index)}
                          className="btn-ghost-icon text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                  <span className="font-semibold text-gray-900 dark:text-white">Total:</span>
                  <span className="text-lg font-bold text-brand-600">RWF {calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            )}
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">We'll use this information to process your order.</p>
            </div>

            <div className="space-y-4">
              <FormInput
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                error={errors.name}
                placeholder="John Doe"
                required
              />

              <FormInput
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                error={errors.email}
                placeholder="john@example.com"
                required
              />

              <FormInput
                label="Phone Number"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleFormChange}
                error={errors.phoneNumber}
                placeholder="+250 7XX XXX XXX"
                required
              />
            </div>
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Payment Method</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Select your preferred payment method.</p>
            </div>

            <FormSelect
              label="Payment Method"
              name="payment"
              options={PAYMENT_OPTIONS}
              value={formData.payment}
              onChange={handleFormChange}
              error={errors.payment}
              placeholder="Choose a payment method"
              required
            />

            <FormTextarea
              label="Additional Notes (Optional)"
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              placeholder="Any special instructions or notes about your order..."
              helpText="This won't affect your order but helps us serve you better"
            />
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Order Confirmation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Please review your order details before confirming.</p>
            </div>

            {/* Order Review */}
            <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white">Items Ordered</h4>
              <div className="space-y-3">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>{item.product} × {item.quantity}</span>
                    <span className="font-medium">RWF {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between font-semibold">
                <span className="text-gray-900 dark:text-white">Total:</span>
                <span className="text-lg text-brand-600">RWF {calculateTotal().toLocaleString()}</span>
              </div>
            </div>

            {/* Contact Review */}
            <div className="space-y-3 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-gray-900 dark:text-white">Contact Information</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phoneNumber}</p>
                <p><strong>Payment:</strong> {PAYMENT_OPTIONS.find(p => p.value === formData.payment)?.label}</p>
              </div>
            </div>

            <div className="alert alert-info">
              <p className="text-sm">A confirmation email will be sent to <strong>{formData.email}</strong></p>
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
            <h1 className="page-title text-4xl mb-2">Place Your Order</h1>
            <p className="page-subtitle">Complete your order in just 4 simple steps</p>
          </div>

          {/* Step Indicator */}
          <StepIndicator steps={STEPS} currentStep={currentStep} />

          {/* Form */}
          <form ref={form} onSubmit={submitForm} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="card-elevated p-8">
                {renderStepContent()}

                {/* Navigation buttons */}
                <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
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
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar - Order Summary */}
            <div className="lg:col-span-1">
              <div className="card-elevated p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h3>

                {orderItems.length > 0 ? (
                  <div className="space-y-4">
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {orderItems.map((item, index) => (
                        <div key={index} className="text-sm">
                          <div className="flex justify-between text-gray-700 dark:text-gray-300 mb-1">
                            <span>{item.product}</span>
                          </div>
                          <div className="flex justify-between text-gray-600 dark:text-gray-400 text-xs">
                            <span>{item.quantity} × RWF {item.price.toLocaleString()}</span>
                            <span className="font-medium">RWF {(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="flex justify-between mb-4">
                        <span className="text-gray-700 dark:text-gray-300">Subtotal:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">RWF {calculateTotal().toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Shipping:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">Free</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-900 dark:text-white">Total:</span>
                        <span className="text-xl font-bold text-brand-600">RWF {calculateTotal().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-center text-gray-500 dark:text-gray-400 py-8">No items added yet</p>
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

export default OrderPage;
