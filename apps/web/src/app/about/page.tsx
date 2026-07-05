import React from "react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import AboutSection from "./about-section";

const AboutPage = () => {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
