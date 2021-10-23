import React from "react";
import "./FarmerForm.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function FarmerForm(props) {
  const history = useHistory();

  const [farmer, setUser] = useState({
    pname: "",
    pcategory: "",
    price: "",
    discount: "",
    sellprice: "",
    description: " ",
    email: props.email,
  });

  const [file, setFile] = useState(null);

  const handlefile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...farmer,
      [name]: value,
    });
  };

  const farmerform = (e) => {
    e.preventDefault();

    const { pname, pcategory, price, sellprice, description, email } = farmer;

    var formData = new FormData();
    formData.append("file", file);
    for (var key in farmer) {
      formData.append(key, farmer[key]);
    }

    const config = {
      Headers: {
        "content-type": "multipart/form-data",
      },
    };

    if (pname && pcategory && price && sellprice && description) {
      axios
        .post("http://localhost:5000/rproduct", formData, config)
        .then((res) => {
          alert(" succesfully upload ");
          history.push("/products");
        });
    } else {
      alert(" Invalid Input");
    }
  };

  return (
    <div>
      <div className="mainf">
        <p className="sign">Start Selling</p>

        <form
          onSubmit={farmerform}
          className="form-inline"
          enctype="multipart/form-data"
        >
          <div className="product_info">
            <label for="p_name">
              <span>Product Name </span>
              <input
                className="un"
                name="pname"
                value={farmer.pname}
                onChange={handleChange}
                placeholder="Product Name"
              />
            </label>

            <label for="p_name">
              <span> Product Category </span>
              <select
                name="pcategory"
                value={farmer.pcategory}
                className="un"
                onChange={handleChange}
              >
                <option value="dry Fruits">Dry Fruits</option>
                <option value="grain">Grain</option>
                <option value="Spices">Spices</option>
                <option value="Beans">Beans</option>
                <option value="Fruits">Fruits</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label for="field1">
              <span>Price </span>
              <input
                min="1"
                type="number"
                className="un"
                name="price"
                value={farmer.price}
                onChange={handleChange}
                placeholder="Price"
              />
            </label>
            <label for="field1">
              <span>Discount</span>
              <input
                min="1"
                type="number"
                className="un"
                name="discount"
                value={farmer.discount}
                onChange={handleChange}
                placeholder="Discount"
              />
            </label>
            <label for="field1">
              <span> Selling Price </span>
              <input
                min="1"
                type="number"
                className="un"
                name="sellprice"
                value={farmer.sellprice}
                onChange={handleChange}
                placeholder="Price"
              />
            </label>

            <label for="field1">
              <span> Description </span>
              <textarea
                className="un"
                value={farmer.description}
                name="description"
                onChange={handleChange}
                rows="4"
              ></textarea>
            </label>

            <label for="p_img">
              <span>Product Image </span>
              <input
                type="file"
                id="file"
                name="file"
                value={farmer.pimg}
                onChange={handlefile}
              />
            </label>
          </div>
          <button className="sign" type="submit">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
