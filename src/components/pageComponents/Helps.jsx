import { Call } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./helps.css";
const Helps = () => {
  return (
    <div className="help">
      <div className="help_left">
        <Avatar>
          <Call sx={{ fontSize: 18 }} />
        </Avatar>
      </div>
      <div className="help_right">
        <h4>+91 9608464404</h4>
        <small>support 24/7 time</small>
      </div>
    </div>
  );
};

export default Helps;
