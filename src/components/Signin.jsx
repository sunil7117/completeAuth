import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./common.css";
import { Login } from "../service/api";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/loginSlice";
const Signin = () => {
  const navigate = useNavigate();

  // To get access of url
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentpage = queryParams.get("pagename");
  // To get access of url

  const { auth } = useSelector((state) => state.login);
  console.warn(auth);
  const dispatch = useDispatch();
  const initialValue = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialValue);
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignin = async (e) => {
    dispatch(loginStart());
    const info = await Login(user);
    if (info?.status === 200) {
      localStorage.setItem("access-token", `Bearer ${info.data.accessToken}`);
      localStorage.setItem("refresh-token", `Bearer ${info.data.refreshToken}`);
      dispatch(loginSuccess(info?.data?.userdata));
      if (currentpage) {
        navigate(`/${currentpage}`);
      } else {
        navigate("/home");
      }
    }
    if (info?.status === 403) {
      dispatch(loginFailure("email/password wrong. Please check first"));
      return alert("email/password wrong. Please check first");
    }
    if (info?.status === 404) {
      dispatch(loginFailure("email/password wrong. Please check first"));
      return alert("email/password not found  yet. Please check first");
    }
  };
  return (
    <div className="outer-box">
      <div className="inner-box">
        <header className="signup-header">
          <h2>Login</h2>
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
