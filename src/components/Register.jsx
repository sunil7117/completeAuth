import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./common.css";
import { Signup } from "../service/api";
const Register = () => {
  const navigate = useNavigate();
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialValue);
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    const info = await Signup(user);
    if (info.status === 200) {
      alert(info.data);
      navigate("/login");
    }
    if (info.status === 409) {
      return alert("user already register....");
    }
  };
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
                value={user.firstName}
                onChange={handleInputChange}
                placeholder="Enter  first name here..."
              />
            </p>
            <p>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                id="lastname"
                value={user.lastName}
                name="lastName"
                onChange={handleInputChange}
                placeholder="Enter last name here..."
              />
            </p>
            <p>
              <label htmlFor="">Email</label>
              <input
                type="email"
                id="email"
                value={user.email}
                name="email"
                onChange={handleInputChange}
                placeholder="Enter email here..."
              />
            </p>
            <p>
              <label htmlFor="">Password</label>
              <input
                type="password"
                id="password"
                value={user.password}
                name="password"
                onChange={handleInputChange}
                placeholder="Enter password here..."
              />
            </p>
            <p>
              <input
                type="button"
                id="submit"
                onClick={handleRegister}
                value="Create Account"
              />
            </p>
          </form>
        </main>
        <footer className="signup-footer">
          <p>
            Aready have an account? <Link to="/login">Login</Link>
          </p>
        </footer>
      </div>
      <div className="circle c1"></div>
      <div className="circle c2"></div>
    </div>
  );
};

export default Register;
