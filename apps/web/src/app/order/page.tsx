'use client';
import Heading from "./Heading";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../navbar/page";

interface Order {
  product: string;
  quantity: number;
  price: number;
}

interface Product extends Order {
  productDetails: {
    name: string;
    price: number;
  };
}

const OrderPage = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("");

  const products = {
    "SwitchOFF Energy Drink": 10000,
    "SwitchOFF Guarrana": 12000,
  };

  const calculateTotalPrice = (orders: any[]) => {
    return orders.reduce((total, order) => total + order.price * order.quantity, 0);
  };

  const handleResetSelect = () => {
    setSelectedProduct("Select Product"); // Reset selected product to empty string
  };

  const submitForm = (event: { preventDefault: () => void; target: { reset: () => void; }; }) => {
    event.preventDefault();
    setFormSubmitted(true);

    // Create a detailed order summary
    const orderSummary = orders.map(order => `${order.product} (${order.quantity} x $${order.price})`).join(', ');

    // Extend the form data to include the order summary and total price
    const formData = new FormData(form.current);
    formData.append('orders', orderSummary);
    formData.append('totalPrice', totalPrice.toString());
    const formDataObject = Object.fromEntries(formData.entries());
    console.log("Form Data:", formDataObject);
    if (form.current) {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID as string
      )
      .then(
        (result) => {
          console.log(result.text);
          sendAutoReply(formData);
          setFormSubmitted(false);
          setDataReceived(true);
          event.target.reset(); // Reset form fields
          setOrders([]); // Clear orders
          setTotalPrice(0); // Reset total price
          handleResetSelect(); // Reset selected product to empty string
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    {
      console.log('Form reference is not available');
    }
  };

  const sendAutoReply = (formData: FormData) => {
    const userEmail = formData.get("email");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ORDER as string, // Use the ID for the auto-reply template
        {
          name: formData.get("name"),
          email: userEmail,
          orders: formData.get("orders"),
          totalPrice: formData.get("totalPrice"),
          payment: formData.get("payment"),
          message: formData.get("message"),
          reply_to: userEmail,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID as string
      )
      .then(
        (result) => {
          console.log("Auto-reply sent:", result.text);
        },
        (error) => {
          console.log("Auto-reply error:", error.text);
        }
      );
  };

  const handleAddProduct = () => {
    const product = form.current?.product.value ;
    const quantity = parseInt(form.current.quantity.value);

    if (product && quantity) {
      const newOrder = {
        product,
        quantity,
        price: products[product]
      };

      const updatedOrders = [...orders, newOrder];
      setOrders(updatedOrders);
      setTotalPrice(calculateTotalPrice(updatedOrders));
    }
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
    productInput: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4 } },
    },
    quantityInput: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4 } },
    },
    paymentInput: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.5 } },
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
      <div className="mt-0  dark:text-white dark:bg-gray-900">
        <Navbar />
        <div className="px-2 lg:px-10 h-screen flex flex-col md:flex-row">
          {/* <Heading heading={"Place Your Order"} /> */}
          <div className="flex flex-col max-w-xl w-full mx-auto">
            <h3 className="text-2xl text-center font-semibold mb-4 mt-36">Place Your Order</h3>
            <div className="mt-10 font-bodyText flex items-center mx-auto mr-5">
              <form
              // @ts-ignore
                ref={form}
                onSubmit={submitForm}
                className="flex flex-col items-center justify-center max-w-xl w-full mx-auto"
              >
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
                    className="w-full input  border border-gray-300 rounded-lg px-4 py-2  dark:text-white dark:bg-gray-900"
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
                <motion.select
                  name="product"
                  variants={animations.productInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full m-4 input border border-gray-300 rounded-lg px-4 py-2  dark:text-white dark:bg-gray-900"
                  required
                >
                  <option value="" disabled selected>Select Product</option>
                  <option value="SwitchOFF Energy Drink">SwitchOFF Energy Drink</option>
                  <option value="SwitchOFF Guarrana">SwitchOFF Guarrana</option>
                </motion.select>
                <motion.input
                  name="quantity"
                  variants={animations.quantityInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full m-4 input border border-gray-300 rounded-lg px-4 py-2  dark:text-white dark:bg-gray-900"
                  type="number"
                  placeholder="Quantity"
                  required
                />
                <motion.button
                  variants={animations.btn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onClick={handleAddProduct}
                  className="btn mt-5 bg-blue-500 text-white py-2 px-4 rounded"
                  type="button"
                >
                  Add Product
                </motion.button>
                <motion.select
                  name="payment"
                  variants={animations.paymentInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full m-4 input border border-gray-300 rounded-lg px-4 py-2  dark:text-white dark:bg-gray-900"
                  required
                >
                  <option value="" disabled selected>Payment Mode</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                </motion.select>
                <motion.textarea
                  variants={animations.msgInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full m-2 h-28 input border border-gray-300 rounded-lg px-4 py-2  dark:text-white dark:bg-gray-900"
                  placeholder="Additional Message"
                  name="message"
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
                  {formSubmitted ? (
                    <>
                      <div className="loader"></div>
                    </>
                  ) : dataReceived ? (
                    "Order Placed"
                  ) : (
                    "Place Order"
                  )}
                </motion.button>
              </form>
            </div>

          </div>
          <div className="mt-44 w-full items-center max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-5">Order Details</h2>
            <h2 className="text-xl font-bold">Invoice</h2>
            <div className="flex justify-between border-b py-2">
              <span>Date: {new Date().toLocaleDateString()}</span>
              <span>Client Name: Shema Lucien</span>
            </div>
            <ul className="mt-4">
              {orders.map((order, index) => (
                <li key={index} className="flex justify-between border-b py-2">
                  <span>{order.product} ({order.quantity} x RWF {order.price})</span>
                  <span className="font-bold">{order.price * order.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4 font-bold">
              <span>Total: </span>
              <span>RWF {totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;


