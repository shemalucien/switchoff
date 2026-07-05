import React from "react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import ProductsSection from "./products-section";

// Standalone /products route — full page with its own Navbar/Footer.
// The homepage renders <ProductsSection /> directly instead, so the
// navbar and footer are never duplicated.
function ProductsPage() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <div className="pt-20">
        <ProductsSection />
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;
