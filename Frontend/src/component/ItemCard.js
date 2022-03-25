import React, { useEffect, useState } from "react";
import "./ItemCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function ItemCard({ id, title, price, info, ratings, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3001/deleteItem/${id}`).then((response) => {
      console.log(response);
    });

    window.location.realod();
  };

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });

    alert("product has been added to the cart!!!!");
  };

  return (
    <div className="grid">
      <img src={image} alt="" className="card__img" />

      <div className="card__info">
        <h3>{title.length > 10 ? title.substring(0, 80) + "..." : title}</h3>

        <span className="product__price">
          <small>
            <CurrencyRupeeIcon className="ruppes__sign" />
          </small>{" "}
          <strong>{price}</strong>
          <p className="ratings">
            {}
            {Array(ratings)
              .fill()
              .map((_, i) => (
                <StarIcon />
              ))}
          </p>
        </span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          dolores!
        </p>
        <button onClick={addToBasket}>Add to Cart</button>
      </div>

      <div className="delete__card">
        <DeleteIcon id={id} onClick={() => deleteItem(id)} />
      </div>
    </div>
  );
}

export default ItemCard;
