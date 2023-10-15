import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      navigate("/home");
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
          <h2>Login</h2>
          <p>It just take 30 second</p>
          {process.env.REACT_APP_SERVER}
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
              <small className="forget">
                <Link to="/forgetpassword" className="link">
                  Forget Password
                </Link>
              </small>
            </p>
            <p>
              <input
                type="button"
                id="submit"
                onClick={handleSignin}
                value="Login"
              />
            </p>
          </form>
        </main>
        <footer className="signup-footer">
          <p>
            Create an account?{" "}
            <Link to="/signup" className="link">
              Click Here{" "}
            </Link>
          </p>
        </footer>
      </div>
      <div className="circle c1"></div>
      <div className="circle c2"></div>
    </div>
  );
};

export default Signin;
