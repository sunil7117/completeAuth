import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./common.css";
import { Login } from "../service/api";
const Signin = () => {
  const navigate = useNavigate();
  const initialValue = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialValue);
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignin = async (e) => {
    const info = await Login(user);
    if (info.status === 200) {
      console.log(info);
      // navigate("/home");
    }
    if (info.status === 403) {
      return alert("email/password wrong. Please check first");
    }
    if (info.status === 404) {
      return alert("email/password not found  yet. Please check first");
    }
  };
  return (
    <div className="outer-box">
      <div className="inner-box">
        <header className="signup-header">
          <h1>Loin</h1>
          <p>It just take 30 second</p>
        </header>
        <main className="signup-body">
          <form>
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
                onClick={handleSignin}
                value="Create Account"
              />
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

export default Signin;
