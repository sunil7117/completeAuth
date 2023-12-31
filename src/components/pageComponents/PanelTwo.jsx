import React from "react";

const PanelTwo = ({ serail, content }) => {
  return (
    <div className="panel_two">
      <div className="panel_top two">
        <div className="serail_one whbg">{serail}</div>
        <div className="title wh">{content}</div>
      </div>
      <div className="panel_bottom"></div>
    </div>
  );
};

export default PanelTwo;
