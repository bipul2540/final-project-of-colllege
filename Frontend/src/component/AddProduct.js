import React, { useState } from "react";
import "./AddProduct.css";
import Select from "react-select";
import axios from "axios";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Link } from "react-router-dom";

function AddProduct() {
  var pro_type = [
    { value: 1, label: "Gym Equipment" },
    { value: 2, label: "Protein" },
    { value: 3, label: "Diet" },
    { value: 4, label: "Others" },
  ];

  const [header, setHeader] = useState(pro_type.label);
  const [addForm, setAddForm] = useState({
    title: "",
    price: "",
    rating: "",
    image: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAddForm({ ...addForm, [name]: value });
  };

  const changeHandlerSelect = (e) => {
    setHeader(e.label);
  };

  const PostProduct = (e) => {
    const { title, price, rating, image } = addForm;
    e.preventDefault();
    if (header && title && price && rating && image) {
      axios
        .post("http://localhost:3001/addproduct", {
          title: addForm.title,
          price: addForm.price,
          ratings: addForm.rating,
          image: addForm.image,
          header: header,
        })
        .then((response) => {
          alert(response.data.messages);
          window.location.reload();

          setAddForm({
            title: "",
            price: "",
            rating: "",
            image: "",
          });
        });
    } else {
      alert("fill the details !!!");
    }
  };

  return (
    <div className="addProduct">
      <div className="addProduct__header">
        <p className="addProduct__header__logo">
          <SupervisorAccountIcon className="admin__logo" />
          <p>
            <span>A</span>dmin
          </p>
        </p>
        <Link to="/admin/manageorder" className="adminLink">
          <div className="manage__orders">
            <p>Manage orders</p>
          </div>
        </Link>
      </div>
      <h3>Add your Product</h3>
      <div className="addProduct__form">
        <form action="" method="POST">
          <h5>Product Type:</h5>
          <Select
            options={pro_type}
            className="select"
            onChange={changeHandlerSelect}
          />

          <h5>product title:</h5>
          <input
            type="text"
            name="title"
            value={addForm.title}
            onChange={changeHandler}
          />

          <h5>Product price:</h5>
          <input
            type="number"
            name="price"
            value={addForm.price}
            onChange={changeHandler}
          />

          <h5>
            Product Rating <small>(out of 5)</small>:{" "}
          </h5>
          <input
            type="number"
            name="rating"
            value={addForm.rating}
            onChange={changeHandler}
          />

          <h5>
            Product image<small>(url)</small>:
          </h5>
          <input
            type="text"
            name="image"
            value={addForm.image}
            onChange={changeHandler}
          />

          <button type="submit" onClick={PostProduct}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
