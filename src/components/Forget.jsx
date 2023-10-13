import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./common.css";
import { ForgetPassword } from "../service/api";

const Forget = () => {
  //   const navigate = useNavigate();
  const initialValue = {
    email: "",
  };
  const [user, setUser] = useState(initialValue);
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleForget = async (e) => {
    const info = await ForgetPassword(user);
    if (info.status === 200) {
      console.log(info);
      alert(info.data);
      // navigate("/home");
    }
    // if (info.status === 403) {
    //   return alert("email/password wrong. Please check first");
    // }
    // if (info.status === 404) {
    //   return alert("email/password not found  yet. Please check first");
    // }
  };
  return (
    <div className="outer-box">
      <div className="inner-box">
        <header className="signup-header">
          <h1>Enter Email</h1>
          <p>Please provied that email you have register with us.</p>
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
              <input
                type="button"
                id="submit"
                onClick={handleForget}
                value="Create Account"
              />
            </p>
          </form>
        </main>
        <footer className="signup-footer">
          <p>
            Create an account? <Link to="/signup">Click Here </Link>
          </p>
        </footer>
      </div>
      <div className="circle c1"></div>
      <div className="circle c2"></div>
    </div>
  );
};

export default Forget;
