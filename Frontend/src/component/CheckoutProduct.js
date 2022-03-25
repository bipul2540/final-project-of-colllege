import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function CheckoutProduct({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>
            <CurrencyRupeeIcon className="ruppes__sign" />{" "}
          </small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
