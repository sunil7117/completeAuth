import React, { useState } from "react";
import "./dropdown.css";
import { KeyboardArrowDown, Menu } from "@mui/icons-material";
const Dropdown = () => {
  const [open, setOpen] = useState(true);
  const handleHideMenu = () => {
    setOpen(!open);
  };
  return (
    <div className={open === true ? "dropdown " : "dropdown transitionhover"}>
      <div className="dropdownMenu " onClick={handleHideMenu}>
        <div className="icon">
          <Menu />
          <h3>All department</h3>
        </div>
        <div className="icon">
          <KeyboardArrowDown />
        </div>
      </div>
      <ul>
        <li>Fresh Meat</li>
        <li>Vegetables</li>
        <li>Ocend Food</li>
      </ul>
    </div>
  );
};

export default Dropdown;
