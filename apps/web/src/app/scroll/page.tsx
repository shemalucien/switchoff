'use client';
import { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    setIsAtTop(window.scrollY < 300); // Consider top if within 100px from the top
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTopOrBottom = () => {
    if (isAtTop) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded"
      onClick={scrollToTopOrBottom}
    >
      {isAtTop ? (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7M5 5l7 7 7-7" />
        </svg>
      ) : (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M19 19l-7-7-7 7" />
        </svg>
      )}
    </button>
  );
};

export default ScrollButton;
