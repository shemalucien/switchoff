'use client';
// import Heading from "./heading";
import { motion } from "framer-motion";
import { useState, useRef, SetStateAction } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../navbar/page";

interface Order {
  product: string;
  quantity: number;
  price: number;
}

type Products = Record<string, { name: string; price: number }>;


const OrderPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("Select Product");
  const [name, setName] = useState('');

  const handleNameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setName(event.target.value);
  };

  const products: Products = {

    "Product 1": {
      name: "Product 1",
      price: 10
    },
    "Product 2": {
      name: "Product 2",
      price: 20
    },
    "Product 3": {
      name: "Product 3",
      price: 30
    }
  };

  // Define a type for the form elements
  interface OrderFormElements extends HTMLFormControlsCollection {
    product: HTMLInputElement;
    quantity: HTMLInputElement;
  }

  interface OrderForm extends HTMLFormElement {
    elements: OrderFormElements;
  }

  const calculateTotalPrice = (orderList: Order[]): number => {
    return orderList.reduce((total, order) => total + order.price * order.quantity, 0);
  };

  const handleResetSelect = () => {
    setSelectedProduct(selectedProduct); // Reset selected product to empty string
  };

  const submitForm = (event: React.FormEvent<OrderForm>) => {
    event.preventDefault();
    setFormSubmitted(true);

    // Create a detailed order summary
    const orderSummary = orders.map(order => `${order.product} (${order.quantity} x $${order.price})`).join(', ');

    if (form.current) {
      // Extend the form data to include the order summary and total price
      const formData = new FormData(form.current);
      formData.append('orders', orderSummary);
      formData.append('totalPrice', totalPrice.toString());
      // const formDataObject = Object.fromEntries(formData.entries());
      // console.log("Form Data:", formDataObject);


      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID as string
        )
        .then(
          (result) => {
            // console.log(result.text);
            sendAutoReply(formData);
            result.status === 200 && setFormSubmitted(false);
            setFormSubmitted(false);
            setDataReceived(true);
            (event.target as HTMLFormElement).reset(); // Reset form fields
            setOrders([]); // Clear orders
            setTotalPrice(0); // Reset total price
            handleResetSelect(); // Reset selected product to empty string

          },
          (error) => {
            throw new Error(error);
            //console.log(error.text);
          }
        );
    }
    else
    {
      //console.log('Form reference is not available');
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
          result.status === 200 && setFormSubmitted(false);
          //console.log("Auto-reply sent:", result.text);
        },
        (error) => {
          throw new Error(error);
          // console.log("Auto-reply error:", error.text);
        }
      );
  };

  const handleAddProduct = () => {
    const formControls = form.current?.elements;
    const product = (formControls?.namedItem("product") as HTMLInputElement)?.value;
    const quantity = parseInt((formControls?.namedItem("quantity") as HTMLInputElement)?.value);


    if (product && quantity) {
      const newOrder = {
        product,
        quantity,
        price: products[product].price
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

  const renderButtonLabel = () => {
    if (formSubmitted) {
      return (
        <>
          <div className="loader"></div>
        </>
      );
    } else if (dataReceived) {
      return "Order Placed";
    } else {
      return "Place Order";
    }
  };

  return (
    <>
      <div className="mt-0 h-screen">
        <Navbar />
        <div className="bg-gray-200 text-black px-2 lg:px-10 flex flex-col md:flex-row dark:text-white dark:bg-gray-900 ">
          <div className="flex flex-col items-center justify-center max-w-xl w-full mx-auto  p-4 sm:p-6 md:p-8 dark:text-white dark:bg-gray-900">
            <h3 className="text-2xl text-center font-semibold mb-4 mt-36">Place Your Order</h3>
            <div className="mt-10 font-bodyText flex items-center mx-auto mr-5">
              <form
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
                    value={name}
                    onChange={handleNameChange}
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
                  <option value="SwitchOFF Energy Drink">SwitchOff Energy Drink</option>
                  <option value="SwitchOFF Guarrana">SwitchOff Nice Guarrana <sup>+</sup></option>

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
                  <option value="PayPal">Mobile Money</option>
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
                  {renderButtonLabel()}
                </motion.button>
              </form>
            </div>

          </div>
          <div className="mt-48 w-full items-center max-w-xl mx-auto dark:text-white dark:bg-gray-900 ">
            <h2 className="text-xl font-bold mb-5">Order Details</h2>
            <h2 className="text-xl font-bold">Invoice</h2>
            <div className="flex justify-between border-b py-2">
              <span>Date: {new Date().toLocaleDateString()}</span>
              <span>Client Name: {name}</span>
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


