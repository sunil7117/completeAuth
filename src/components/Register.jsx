import React, { useState } from "react";
import "./common.css";
const Register = () => {
  return (
    <div className="outer-box">
      <div className="inner-box">
        <header className="signup-header">
          <h1>signup</h1>
          <p>It just take 30 second</p>
        </header>
        <main className="signup-body">
          <form>
            <p>
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                id="firstname"
                name="firstName"
                value={""}
                placeholder="Enter  first name here..."
              />
            </p>
            <p>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                id="lastname"
                value={""}
                name="lastName"
                placeholder="Enter last name here..."
              />
            </p>
            <p>
              <label htmlFor="">Email</label>
              <input
                type="email"
                id="email"
                value={""}
                name="email"
                placeholder="Enter email here..."
              />
            </p>
            <p>
              <label htmlFor="">Password</label>
              <input
                type="password"
                id="password"
                value={""}
                name="password"
                placeholder="Enter password here..."
              />
            </p>
            <p>
              <input type="button" id="submit" value="Create Account" />
            </p>
          </form>
        </main>
        <footer className="signup-footer">
          <p>{/* Aready have an account? <Link to="/login">Login</Link> */}</p>
        </footer>
      </div>
      <div className="circle c1"></div>
      <div className="circle c2"></div>
    </div>
  );
};

export default Register;
