import React, { useContext } from "react";
import { AuthContext } from "../contextapi/AuthContext";

const Home = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  return <div>Home</div>;
};

export default Home;
