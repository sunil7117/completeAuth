import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Address from "../components/pageComponents/Address";
import OrderSummary from "../components/pageComponents/OrderSummary";
import PaymentOption from "../components/pageComponents/PaymentOption";
import "./checkout.css";

const Checkout = () => {
  const pagename = "checkout";
  const [paymentOption, setpaymentOption] = useState(false);
  const [orderSummary, setorderSummary] = useState(false);
  console.log("order summay state: " + orderSummary);
  return (
    <div>
      <Header />
      <Hero pagename={pagename} />
      <div className="checkout">
        <div className="checkout_left">
          <div className="space">
            <Address setorderSummary={setorderSummary} />
          </div>
          <div className="space">
            <OrderSummary
              orderSummary={orderSummary}
              setorderSummary={setorderSummary}
              setpaymentOption={setpaymentOption}
            />
          </div>
          <div className="space">
            <PaymentOption
              setpaymentOption={setpaymentOption}
              paymentOption={paymentOption}
            />
          </div>
        </div>
        <div className="checkout_right">
          <h1>hello</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
