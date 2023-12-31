import React, { useEffect, useState } from "react";
import Panel from "./Panel";
import PanelTwo from "./PanelTwo";
import "./orderSummary.css";
import { getproductbysearch } from "../../service/api";
import { useLocation } from "react-router-dom";

const OrderSummary = ({ orderSummary, setorderSummary, setpaymentOption }) => {
  // To get access of url
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [shopping, setshopping] = useState({});
  const [item, setitem] = useState([]);

  const productId = queryParams.get("_id");
  useEffect(() => {
    const getidfromurl = async (id) => {
      try {
        const { data } = await getproductbysearch(id);
        setshopping(data[0]);
      } catch (error) {}
    };
    getidfromurl(productId);
  }, [productId]);
  return (
    <>
      {orderSummary ? (
        <div className="space">
          <PanelTwo serail="2" content="order summary" />
          {/* add component here for selection */}
          <ConfrimCheckout
            shopping={shopping}
            setitem={setitem}
            setorderSummary={setorderSummary}
            setpaymentOption={setpaymentOption}
          />
        </div>
      ) : (
        <div className="space">
          <Panel
            serail={2}
            content={"order summary"}
            setorderSummary={setorderSummary}
            setpaymentOption={setpaymentOption}
          >
            {/* data will appear after selected*/}
            {item.length > 0 ? (
              <>
                {item.length}
                <b> Items</b>
              </>
            ) : (
              ""
            )}
          </Panel>
        </div>
      )}
    </>
  );
};

export default OrderSummary;

const ConfrimCheckout = ({
  shopping,
  setitem,
  setorderSummary,
  setpaymentOption,
}) => {
  console.log(shopping);
  const [value, setvalue] = useState(1);
  const Increase = (btn) => {
    if (btn === "minus") {
      if (value > 1) {
        setvalue(value - 1);
      }
    } else {
      setvalue(value + 1);
    }
  };
  const confrimProduct = () => {
    setitem([shopping]);
    setorderSummary(false);
    setpaymentOption(true);
  };
  return (
    <>
      <div className="confrim_checkout">
        <div className="confrim_checkout_top">
          <div className="confrim_checkout_top_left">
            <img src={shopping.product_image} alt="img" />
          </div>
          <div className="confrim_checkout_top_middle">
            <div className="confrim_checkout_top_middle_title">
              {shopping.product_name}
              <small>{shopping.product_seller}</small>
            </div>
            <div className="confrim_checkout_top_middle_price">
              {value * shopping.product_price}
              <small>{shopping.product_seller}</small>
            </div>
          </div>
          <div className="confrim_checkout_top_right">
            <div>Delivery in 2 day,sun |40 Free </div>
          </div>
        </div>
        <div className="confrim_checkout_bottom">
          <div className="counter">
            <button className="btn" onClick={() => Increase("minus")}>
              -
            </button>
            <div>{value}</div>
            <button className="btn" onClick={() => Increase("plus")}>
              +
            </button>
          </div>
          <div className="remove">
            <button className="btn">remove</button>
          </div>
          <div className="confrim">
            <button className="btn" onClick={confrimProduct}>
              continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
