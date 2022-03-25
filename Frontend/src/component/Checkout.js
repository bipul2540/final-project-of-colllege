import React, { useState } from "react";
import "./Checkout.css";
import img2 from "./../imagess/banner.jpg";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import CheckoutProduct from "./CheckoutProduct";
import AddressBook from "./AddressBook";
import CloseIcon from "@mui/icons-material/Close";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const [isActive, setIsActive] = useState(false);

  const BuyPage = () => {
    setIsActive(!isActive);
  };

  const handleToggle = () => {
    setIsActive(false);
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-facebook-shared-post-template-design-ed7aacf0dca0cafb9fd2515021f60452_screen.jpg?ts=1608556803"
          alt="error"
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <div className="subtotal">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ({basket?.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                  <input type="checkbox" /> This order contain a gift
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
          />

          <button onClick={BuyPage}>Proceed to checkout</button>
        </div>
      </div>

      <div className={!isActive ? "addressPage" : "addressPage__toggle"}>
        <AddressBook totalamount={getBasketTotal(basket)} />

        <div className="close_page">
          <CloseIcon onClick={handleToggle} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
