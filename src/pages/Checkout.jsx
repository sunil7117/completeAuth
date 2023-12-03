import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Checkout = () => {
  const pagename = "checkout";
  return (
    <div>
      <Header />
      <Hero pagename={pagename} />
      <Footer />
    </div>
  );
};

export default Checkout;
