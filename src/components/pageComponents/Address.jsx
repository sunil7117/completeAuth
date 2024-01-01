import React, { useState } from "react";
import "./address.css";
import Panel from "./Panel";
import PanelTwo from "./PanelTwo";
import { Add } from "@mui/icons-material";
import AddAddressForm from "./AddAddressForm";
import { useSelector } from "react-redux";

const Address = ({ setorderSummary }) => {
  const [selectedAddress, setselectedAddress] = useState(null);
  return (
    <>
      <div>
        <ConfrimAddress
          selectedAddress={selectedAddress}
          setselectedAddress={setselectedAddress}
          setorderSummary={setorderSummary}
        />
      </div>
    </>
  );
};

export default Address;
const ConfrimAddress = ({
  selectedAddress,
  setselectedAddress,
  setorderSummary,
}) => {
  const [makeAddress, setmakeAddress] = useState(false);
  const [pickAddress, setPickAddress] = useState(false);
  console.log(pickAddress);
  const handleAddAddress = () => {
    alert("Open form");
    setmakeAddress(true);
  };
  return (
    <>
      {pickAddress ? (
        <div className="space">
          <Panel
            serail={1}
            content={"delivery address"}
            setPickAddress={setPickAddress}
          >
            <div>
              <div>
                <b>{selectedAddress.name} </b>
                <span>
                  {selectedAddress.add} {selectedAddress.locality}{" "}
                  {selectedAddress.city} {selectedAddress.landmark}
                </span>
                <b>{selectedAddress.pincode} </b>
              </div>
              <b>{selectedAddress.altnumber} </b>
              <div></div>
            </div>
          </Panel>
        </div>
      ) : (
        // pick a address from here
        <>
          <div className="space">
            <PanelTwo serail="1" content="delivery address" />
            <UserTable
              setPickAddress={setPickAddress}
              setselectedAddress={setselectedAddress} //-------------------------
              setorderSummary={setorderSummary}
            />
          </div>
          <div className="space">
            {makeAddress ? (
              <AddAddressForm
                setmakeAddress={setmakeAddress}
                setPickAddress={setPickAddress}
                setselectedAddress={setselectedAddress} //-------------------------
                method="post"
                setorderSummary={setorderSummary}
              />
            ) : (
              <div className="addAddress" onClick={handleAddAddress}>
                <div>
                  <Add />
                </div>
                <div>add a new address</div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

const UserTable = ({ setPickAddress, setselectedAddress, setorderSummary }) => {
  const [activeTable, setactiveTable] = useState(0);
  const { addresslists } = useSelector((state) => state.login);
  const [openForm, setopenForm] = useState(null);
  const handleChooseAddress = (key) => {
    setactiveTable(key);
  };
  const handlePickAddress = (list) => {
    setselectedAddress(list);
    setPickAddress(true);
    setorderSummary(true);
  };

  const handleOpenForm = (key) => {
    const table_id = key;
    setopenForm(table_id);
  };
  return (
    <>
      <div className="table">
        {addresslists?.map((list, key) => (
          <div
            className={
              activeTable === key ? "table_box  actives" : "table_box  default"
            }
            key={key}
            onClick={() => handleChooseAddress(key)}
          >
            {/* let's try some condition */}
            {openForm === key ? (
              <AddAddressForm
                list={list}
                setPickAddress={setPickAddress}
                method="put"
                setselectedAddress={setselectedAddress}
              />
            ) : (
              <>
                <div className="table_box_left">
                  <div className="checkbox">
                    <div
                      className={activeTable === key ? "tick" : " d-none"}
                    ></div>
                  </div>
                </div>
                <div className="table_box_middle">
                  <div className="box_top">
                    {list.name} <span>Home</span> 9608464404
                  </div>
                  <div className="box_middle">
                    ramnagar po-sandha bihar saran chapra 841301
                  </div>
                  <div className="box_bottom">
                    <button
                      className={
                        activeTable === key ? "box_bottom_button" : "d-none"
                      }
                      onClick={() => handlePickAddress(list, key)}
                    >
                      Deliver Here
                    </button>
                  </div>
                </div>
                <div className="table_box_right">
                  <button
                    onClick={() => handleOpenForm(key)}
                    className={activeTable === key ? "tableButton" : "d-none"}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
            {/* let's try some condition */}
          </div>
        ))}
      </div>
    </>
  );
};
