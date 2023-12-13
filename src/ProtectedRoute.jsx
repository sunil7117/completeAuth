import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Rout }) => {
  const { isFailure } = useSelector((state) => state.login);
  console.log(isFailure);
  const navigate = useNavigate();
  const auth = () => {
    if (!isFailure) {
      let authToken = sessionStorage.getItem("refresh-token");
      if (!authToken) {
        navigate("/login");
      }
    } else {
      sessionStorage.clear();
      // dispatch(logout());
    }
  };
  useEffect(() => {
    auth();
  });
  return (
    <div>
      <Rout />
    </div>
  );
};

export default ProtectedRoute;
