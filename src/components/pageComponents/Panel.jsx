import React from "react";
import { Done } from "@mui/icons-material";

const Panel = ({
  serail,
  content,
  children,
  setPickAddress,
  setorderSummary,
}) => {
  const handleChangeAddress = (id) => {
    if (content === "delivery address") {
      setPickAddress(false);
      console.log(setorderSummary);
      console.log("this is address" + id);
    }
    if (content === "order summary") {
      setorderSummary(true);
      console.log("this is order" + id);
    }
    if (content === "payment options") {
      setorderSummary(true);
      console.log("this is order" + id);
    }
  };
  return (
    <div className="address_panel_one ">
      <div className="address_panel_one_left">
        <div className="panel_top">
          <div className="serail_one">{serail}</div>
          <div className="title">
            {content} {children && <Done />}
          </div>
        </div>
        <div className="panel_bottom">{children && children}</div>
      </div>
      <div className="address_panel_one_right">
        {children && (
          <button
            className="change"
            onClick={() => handleChangeAddress(content)}
          >
            Change
          </button>
        )}
      </div>
    </div>
  );
};

export default Panel;
