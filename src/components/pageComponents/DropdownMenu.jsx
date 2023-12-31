import { KeyboardArrowDown, Reorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./dropdowns.css";

const dropdownlist = ["fresh meat", "vegetables", "ocean foods", "onion"];

const DropdownMenu = ({ pagename }) => {
  const [dropdoenOpen, dropdwonClose] = useState(false);
  const handleDropdown = () => {
    dropdwonClose(!dropdoenOpen);
  };

  const handleDropdownList = (dropdownValue) => {
    alert(dropdownValue);
  };

  useEffect(() => {
    if (pagename === "home") {
      dropdwonClose(true);
    }
  }, [pagename]);

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
          {/* Dymanic dropdown menu */}
          {dropdownlist.map((list) => (
            <li
              className="dropdown_list_item"
              onClick={() => handleDropdownList(list)}
              key={list}
            >
              {list}
            </li>
          ))}
          {/* Dymanic dropdown menu */}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
