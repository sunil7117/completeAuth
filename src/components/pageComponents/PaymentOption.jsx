import React from "react";
import Panel from "./Panel";
import PanelTwo from "./PanelTwo";
import { useNavigate } from "react-router-dom";

const PaymentOption = ({ paymentOption, setpaymentOption }) => {
  return (
    <>
      {paymentOption ? (
        <div className="space">
          <PanelTwo serail="3" content="Payment options" />
          <BuyNoe />
        </div>
      ) : (
        <div className="space">
          <Panel serail={3} content={"Payment options"}></Panel>
        </div>
      )}
    </>
  );
};

export default PaymentOption;

const BuyNoe = () => {
  const navigate = useNavigate();
  const confrimNow = () => {
    navigate("/order-placed");
  };
  return (
    <div className="confrim buy">
      <button className="btn" onClick={confrimNow}>
        Confrim now
      </button>
    </div>
  );
};
