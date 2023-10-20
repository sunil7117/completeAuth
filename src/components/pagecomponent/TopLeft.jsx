import React from "react";
import { Email } from "@mui/icons-material";
import "./topleft.css";
const TopLeft = () => {
  return (
    <div className="left">
      <p>
        <span>
          <Email sx={{ fontSize: "1.5em" }} />
        </span>
        hello@colorlib.com
      </p>
      <p>Free Shipping for all Order of $99</p>
    </div>
  );
};

export default TopLeft;
