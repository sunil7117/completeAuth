import React, { useState } from "react";
import { Link } from "react-router-dom";

const UpdatePassword = () => {
  const initialValue = {
    password: "",
    confirm_password: "",
  };
  const [user, setUser] = useState(initialValue);
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleForget = async (e) => {
    // const info = await verifyOTP(user);
    // if (info.status === 200) {
    //   console.log(info);
    //   alert(info.data);
    //   // navigate("/home");
    // }
    // if (info.status === 401) {
    //   return alert("OTP expired");
    // }
  };
  return (
    <div className="outer-box">
      <div className="inner-box">
        <header className="signup-header">
          <h1>Password Update Setting</h1>
          <p>Update password here</p>
        </header>
        <main className="signup-body">
          <form>
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
              <label htmlFor="">Password</label>
              <input
                type="password"
                id="confirm_password"
                value={user.confirm_password}
                name="confirm_password"
                onChange={handleInputChange}
                placeholder="Enter confrim password here..."
              />
            </p>
            <p>
              <input
                type="button"
                id="submit"
                onClick={handleForget}
                value="Update Password"
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

export default UpdatePassword;
