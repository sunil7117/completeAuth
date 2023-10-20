import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Rout }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("refresh-token");
    if (!authToken) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Rout />
    </div>
  );
};

export default ProtectedRoute;
