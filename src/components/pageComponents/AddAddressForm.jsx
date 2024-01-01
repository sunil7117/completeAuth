import React, { useState } from "react";
import "./addaddressform.css";
import { addAddress } from "../../service/api";
import { useSelector } from "react-redux";
const state = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi (National Capital Territory of Delhi)",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
const AddAddressForm = ({
  setmakeAddress,
  setPickAddress,
  setselectedAddress,
  list,
  method,
  setorderSummary,
}) => {
  const initalValue = list
    ? list
    : {
        name: "",
        number: "",
        pincode: "",
        locality: "",
        add: "",
        city: "",
        landmark: "",
        altnumber: "",
        state: "",
        type: "home",
      };
  const [form, setform] = useState(initalValue);
  const { getuser } = useSelector((state) => state.login);
  const abort = () => {
    setmakeAddress(false);
  };

  const handlegetvalue = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const saveAddress = async (method) => {
    try {
      await addAddress(getuser?.addresslist, form, method);
      setform(initalValue);
      setPickAddress(true);
      setselectedAddress(form);
      setorderSummary(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="make_address">
      <div className="title">
        <div>
          <div className="checkbox">
            <div className="tick"></div>
          </div>
        </div>
        <div>
          <div className="form_heading">add a new address</div>
          <form>
            <div className="form_grid col-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="addForm"
                  value={form.name}
                  onChange={handlegetvalue}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="number"
                  placeholder="10-digit mobile number"
                  className="addForm"
                  value={form.number}
                  onChange={handlegetvalue}
                />
              </div>
            </div>
            <div className="form_grid col-6">
              <div>
                <input
                  type="text"
                  name="pincode"
                  placeholder="pin code"
                  className="addForm"
                  value={form.pincode}
                  onChange={handlegetvalue}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="locality"
                  placeholder="locality"
                  className="addForm"
                  value={form.locality}
                  onChange={handlegetvalue}
                />
              </div>
            </div>
            <div className="form_grid col-12">
              <div>
                <textarea
                  name="add"
                  rows="5"
                  className="addForm"
                  placeholder="Address"
                  value={form.add}
                  onChange={handlegetvalue}
                ></textarea>
              </div>
            </div>

            <div className="form_grid col-6">
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="city/distric/town"
                  className="addForm"
                  value={form.city}
                  onChange={handlegetvalue}
                />
              </div>
              <div>
                <select
                  name="state"
                  className="addForm"
                  value={form.state}
                  onChange={handlegetvalue}
                >
                  <option value={" "} disabled>
                    --------Select State---------
                  </option>
                  {state.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form_grid col-6">
              <div>
                <input
                  type="text"
                  name="landmark"
                  placeholder="landmark (Optional"
                  className="addForm"
                  value={form.landmark}
                  onChange={handlegetvalue}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="altnumber"
                  placeholder="alternate number (Optional) "
                  className="addForm"
                  value={form.altnumber}
                  onChange={handlegetvalue}
                />
              </div>
            </div>
            <div className="form_grid">
              <div>Address Type</div>
              <div className="radio">
                <div className="radio1">
                  <input
                    type="radio"
                    name="addresstype"
                    value="home"
                    onChange={handlegetvalue}
                  />
                  <span>Home all day delivery</span>
                </div>
                <div className="radio2">
                  <input type="radio" name="addresstype" value="office" />
                  <span>Work delivery between 10AM - 5PM</span>
                </div>
              </div>
            </div>
          </form>
          <div className="addButton">
            <button className="save" onClick={() => saveAddress(method)}>
              save and deliver here
            </button>
            <button className="tableButton" onClick={abort}>
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddressForm;
