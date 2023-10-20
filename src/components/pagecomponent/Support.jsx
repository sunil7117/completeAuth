import React from "react";
import "./support.css";
import { Avatar } from "@mui/material";
import { Call } from "@mui/icons-material";
const Support = () => {
  return (
    <div className="support">
      <div className="call">
        <Avatar>
          <Call />
        </Avatar>
      </div>
      <div className="number">
        <h3>+65 11.188.888</h3>
        <p>
          <small>support 24/7 Time</small>
        </p>
      </div>
    </div>
  );
};

export default Support;
