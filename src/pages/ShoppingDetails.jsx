import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ShoppingDetails = () => {
  const pagename = "shopping-details";
  return (
    <div>
      <Header pagename={pagename} />
      <Hero pagename={pagename} />
      <Footer />
    </div>
  );
};

export default ShoppingDetails;
