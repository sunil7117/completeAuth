import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./common.css";
import { verifyOTP } from "../service/api";

const OTPVerify = () => {
  const navigate = useNavigate();
  const initialValue = {
    code: "",
  };
  const [user, setUser] = useState(initialValue);
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleForget = async (e) => {
    const info = await verifyOTP(user);
    if (info.status === 200) {
      console.log(info);
      alert(info.data);
      navigate("/update-password");
    }
    if (info.status === 401) {
      return alert("OTP expired");
    }
  };
  return (
    <div className="outer-box">
      <div className="inner-box">
        <header className="signup-header">
          <h2>OTP Verification</h2>
          <p>Input Here OTP</p>
        </header>
        <main className="signup-body">
          <form>
            <p>
              <label htmlFor="">Email</label>
              <input
                type="text"
                id="otp"
                value={user.code}
                name="code"
                onChange={handleInputChange}
                placeholder="Enter OTP here..."
              />
            </p>
            <p>
              <input
                type="button"
                id="submit"
                onClick={handleForget}
                value="Verify OTP"
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

export default OTPVerify;
