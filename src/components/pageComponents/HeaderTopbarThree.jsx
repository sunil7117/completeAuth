import React from "react";
import DropdownMenu from "./DropdownMenu";
import Searchs from "./Searchs";
import Helps from "./Helps";
import "./headertopbarthree.css";
const HeaderTopbarThree = () => {
  return (
    <div className="header_topbar_three">
      <div className="header_topbar_three_left">
        <DropdownMenu />
      </div>

      <div className="header_topbar_three_right">
        <div className="header_topbar_three_right_left">
          <Searchs />
        </div>
        <div className="header_topbar_three_right_right">
          <Helps />
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbarThree;
