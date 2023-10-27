import { KeyboardArrowDown, Reorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import "./dropdowns.css";
const DropdownMenu = () => {
  const [dropdoenOpen, dropdwonClose] = useState(true);
  const handleDropdown = () => {
    dropdwonClose(!dropdoenOpen);
  };
  return (
    <div className="dropdown_menu">
      <div className="dropdown_menu_box">
        <div className="buttons" onClick={handleDropdown}>
          <IconButton>
            <Reorder />
            <p>All departments</p>
          </IconButton>
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
        </div>
        <ul
          className={
            dropdoenOpen ? "dropdown_list dropdown_list_hover" : "dropdown_list"
          }
        >
          <li className="dropdown_list_item">Home</li>
          <li className="dropdown_list_item">contact</li>
          <li className="dropdown_list_item">page</li>
          <li className="dropdown_list_item">shops</li>
          <li className="dropdown_list_item">Home</li>
          <li className="dropdown_list_item">contact</li>
          <li className="dropdown_list_item">page</li>
          <li className="dropdown_list_item">shops</li>
          <li className="dropdown_list_item">Home</li>
          <li className="dropdown_list_item">contact</li>
          <li className="dropdown_list_item">page</li>
          <li className="dropdown_list_item">shops</li>
          <li className="dropdown_list_item">Home</li>
          <li className="dropdown_list_item">contact</li>
          <li className="dropdown_list_item">page</li>
          <li className="dropdown_list_item">shops</li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
