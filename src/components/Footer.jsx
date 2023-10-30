import React from "react";
import "./footer.css";
import paymentOption from "../assets/img/payment-item.png";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer">
        <div className="footer_top">
          <div className="footer_top_left">
            <p>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </p>
            <div className="add">
              <p>Address: 60-49 Road 11378 New York</p>
              <p>Phone: +65 11.188.888</p>
              <p>Email: hello@colorlib.com</p>
            </div>
          </div>
          <div className="footer_top_middle">
            <h3>Usefull Links</h3>
            <div className="footer_top_links">
              <div className="links_left">
                <p>
                  <Link>About us</Link>
                </p>
                <p>
                  <Link>About our shop</Link>
                </p>
                <p>
                  <Link>scure shopping</Link>
                </p>
                <p>
                  <Link>delivery information</Link>
                </p>
                <p>
                  <Link>privacy policy</Link>
                </p>
                <p>
                  <Link>our sitemap</Link>
                </p>
              </div>
              <div className="links_right">
                <p>
                  <Link>who we are</Link>
                </p>
                <p>
                  <Link>our services</Link>
                </p>
                <p>
                  <Link>projects</Link>
                </p>
                <p>
                  <Link>contact</Link>
                </p>
                <p>
                  <Link>innovaction</Link>
                </p>
                <p>
                  <Link>Testimonials</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="footer_top_right">
            <h3>Join Our Newsletter Now</h3>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <p>
              <input type="text" placeholder="Email your email" />
              <button>subscribe</button>
            </p>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_left">
            <p>Copyright ©2023 All rights reserved </p>
          </div>
          <div className="footer_bottom_right">
            <p>
              <img src={paymentOption} alt="payment_logo" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
