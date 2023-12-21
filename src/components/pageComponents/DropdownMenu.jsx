import { KeyboardArrowDown, Reorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./dropdowns.css";
const DropdownMenu = ({ pagename }) => {
  const [dropdoenOpen, dropdwonClose] = useState(false);
  const handleDropdown = () => {
    dropdwonClose(!dropdoenOpen);
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
          <li className="dropdown_list_item">fresh meat</li>
          <li className="dropdown_list_item">vegetables</li>
          <li className="dropdown_list_item">nuts</li>
          <li className="dropdown_list_item">ocean food</li>
          <li className="dropdown_list_item">butter & egg</li>
          <li className="dropdown_list_item">fast food</li>
          <li className="dropdown_list_item">apple</li>
          <li className="dropdown_list_item">shops</li>

          <li className="dropdown_list_item">ox</li>
          <li className="dropdown_list_item">cow</li>
          <li className="dropdown_list_item">shops</li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
