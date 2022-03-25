import React, { useState } from "react";
import "./AddressBook.css";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useStateValue } from "./StateProvider";
import axios from "axios";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function AddressBook({ totalamount }) {
  const [{ basket }, dispatch] = useStateValue();
  const [shipping, setShipping] = useState({
    name: "",
    number: "",
    pincode: "",
    area: "",
    fullAddress: "",
    city: "",
    state: "",
    item: JSON.stringify(basket),
    totalAmountPaid: totalamount + 19,
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setShipping({ ...shipping, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (totalamount === 0) {
      alert("please add item in your cart!!!");
    } else {
      axios
        .post("http://localhost:3001/shippingitem", {
          name: shipping.name,
          number: shipping.number,
          pincode: shipping.pincode,
          area: shipping.area,
          fullAddress: shipping.fullAddress,
          city: shipping.city,
          state: shipping.state,
          totalAmountPaid: shipping.totalAmountPaid,
          item: shipping.item,
        })
        .then((res) => {
          if (res.status === 200) {
            alert("your order have been placed successfully !!!");
            window.location = "/";
          }
        });
    }
  };

  return (
    <div className="addressbook">
      <div className="addressbook__left">
        <h3 className="left__title">Add shipping address</h3>
        <form action="" onSubmit={handleSubmit}>
          <p className="left__firstline">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={shipping.name}
              onChange={changeHandler}
            />
            <input
              type="number"
              placeholder="Number"
              name="number"
              value={shipping.number}
              onChange={changeHandler}
            />
          </p>
          <p className="left__secondline">
            <input
              type="number"
              placeholder="pincode"
              name="pincode"
              value={shipping.pincode}
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder="area"
              name="area"
              value={shipping.area}
              onChange={changeHandler}
            />
          </p>
          <p className="left__thirdline">
            <input
              type="text"
              placeholder="address"
              className="fullAddress"
              name="fullAddress"
              value={shipping.fullAddress}
              onChange={changeHandler}
            />
          </p>
          <p className="left__fourthline">
            <input
              type="text"
              placeholder="city"
              name="city"
              value={shipping.city}
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder="state"
              name="state"
              value={shipping.state}
              onChange={changeHandler}
            />
          </p>
          <div className="left__fifthline">
            <RadioButtonCheckedIcon className="radiobutton" />
            <p>Save this billing address</p>
            <span>add billing address</span>
          </div>

          <div className="left__save_button">
            <button type="submit">save and place order</button>
          </div>
        </form>
      </div>
      <div className="addressbook__right">
        <h3>Order Summery</h3>
        <div className="right__price__info">
          <p className="totalprice">
            <span>Order Total:</span>
            <span>
              <CurrencyRupeeIcon className="ruppes__sign" />{" "}
              <small>{totalamount}</small>{" "}
            </span>
          </p>
          <p className="deliverycharge">
            <span>Delivery charges:</span>
            <span>
              <CurrencyRupeeIcon className="ruppes__sign" />
              <small>19</small>{" "}
            </span>
          </p>
        </div>
        <div className="right_detailed_summery">
          <LocalShippingIcon />
          <p>
            Standard delivery{" "}
            <small>
              expected in 2 days
              <span>change</span>
            </small>
          </p>
        </div>
        <div className="amount_payable">
          <p>Total payable amount: </p>
          <p>
            <CurrencyRupeeIcon className="ruppes__sign" />
            <small>{totalamount + 19}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddressBook;
