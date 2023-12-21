import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "./contact.css";
import {
  AccessTimeOutlined,
  Call,
  EmailOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { ValidationError, useForm } from "@formspree/react";

const Contact = () => {
  const pagename = "contact";

  const [state, handleSubmit] = useForm(process.env.REACT_APP_RECEVIEDEMAIL);
  if (state.succeeded) {
    alert("Our team contact you shortly...");
  }

  return (
    <>
      <Header pagename={pagename} />
      <Hero pagename={pagename} />
      <div className="contact_info">
        <div className="contact_info_box">
          <p>
            <Call sx={{ fontSize: 35 }} />
          </p>
          <p>Phone</p>
          <p>+91 9608464404</p>
        </div>
        <div className="contact_info_box">
          <p>
            <LocationOnOutlined sx={{ fontSize: 35 }} />
          </p>
          <p>Address</p>
          <p>Ramnagar chapra bihar</p>
        </div>
        <div className="contact_info_box">
          <p>
            <AccessTimeOutlined sx={{ fontSize: 35 }} />
          </p>
          <p>Open time</p>
          <p>10:00 am to 23:00 pm</p>
        </div>
        <div className="contact_info_box">
          <p>
            <EmailOutlined sx={{ fontSize: 35 }} />
          </p>
          <p>Email</p>
          <p>sunilapp7117@gmail.com</p>
        </div>
      </div>
      <div className="contact_message">
        <h1>Leave Message</h1>
        <form onSubmit={handleSubmit}>
          <p>
            <input type="text" name="name" placeholder="Your name" required />
            <ValidationError field="name" prefix="Name" errors={state.errors} />
          </p>
          <p>
            <input type="text" name="email" placeholder="Your Email" required />
            <ValidationError
              field="email"
              prefix="Email"
              errors={state.errors}
            />
          </p>
          <p>
            <textarea
              name="message"
              placeholder="Your message"
              required
            ></textarea>
            <ValidationError
              field="message"
              prefix="message"
              errors={state.errors}
            />
          </p>
          <button type="submit" disabled={state.submitting}>
            send message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
