import React from "react";
import HeaderTobarOne from "./pageComponents/HeaderTopbarOne";
import HeaderTopbarTwo from "./pageComponents/HeaderTopbarTwo";
import HeaderTopbarThree from "./pageComponents/HeaderTopbarThree";

const Header = ({ pagename }) => {
  return (
    <>
      <HeaderTobarOne />
      <HeaderTopbarTwo />
      <HeaderTopbarThree pagename={pagename} />
    </>
  );
};

export default Header;
