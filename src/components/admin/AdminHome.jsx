import React, { useState } from "react";
import "./adminHome.css";
import { addproduct, imageupload } from "../../service/api";
import axios from "axios";
const AdminHome = () => {
  const initailValue = {
    product_name: "",
    product_color: "",
    product_tag: "",
    product_price: "",
    product_image: "",
    product_details: "",
    product_total: "",
  };

  const [userInput, setuserInput] = useState(initailValue);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleInput = async (e) => {
    if (e.target.name === "photo") {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("photo", file);
      try {
        const response = await imageupload(formData);
        console.log(response.data.filename);
      } catch (error) {}
    } else {
      setuserInput({ ...userInput, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addproduct(userInput);
      alert(data.data);
    } catch (error) {}
  };

  const handleReset = () => {};
  return (
    <>
      <div className="admin">
        <h1 style={{ textAlign: "center" }}>Welcome to Admin panel</h1>
        <form className="admin_form">
          <div className="form_field">
            <div className="form_label">
              <label htmlFor="product_name">Product Name</label>
            </div>
            <div className="form_text">
              <input
                type="text"
                name="product_name"
                value={userInput.product_name}
                placeholder="product Name"
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="form_field">
            <div className="form_label">
              <label htmlFor="product_name">Product Tag</label>
            </div>
            <div className="form_text">
              <input
                type="text"
                name="product_tag"
                value={userInput.product_tag}
                placeholder="product Tag"
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="form_field">
            <div className="form_label">
              <label htmlFor="product_name">Product Color</label>
            </div>
            <div className="form_text">
              <input
                type="text"
                value={userInput.product_color}
                name="product_color"
                placeholder="product Color"
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="form_field">
            <div className="form_label">
              <label htmlFor="product_name">Product Price</label>
            </div>
            <div className="form_text">
              <input
                type="text"
                name="product_price"
                value={userInput.product_price}
                placeholder="product Price"
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="form_field">
            <div className="form_label">
              <label htmlFor="product_name">Product Details</label>
            </div>
            <div className="form_text">
              <input
                type="text"
                name="product_details"
                value={userInput.product_details}
                placeholder="product Details"
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="form_field">
            <div className="form_label">
              <label htmlFor="product_name">Product total</label>
            </div>
            <div className="form_text">
              <input
                type="text"
                value={userInput.product_total}
                name="product_total"
                placeholder="Total product"
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="form_field">
            <div className="form_label">
              <label htmlFor="product_name">Product Image</label>
            </div>
            <div className="form_text">
              <input
                type="file"
                name="photo"
                value={userInput.product_image}
                placeholder="product Image"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="form_field">
            <div className="form_label">
              <button onClick={handleSubmit}>Sumbit</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminHome;
