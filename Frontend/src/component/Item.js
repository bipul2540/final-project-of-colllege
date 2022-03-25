import React from "react";
import "./Item.css";
import StarIcon from "@mui/icons-material/Star";

function Item() {
  return (
    <div className="item">
      <div className="item__info">
        <p>title of the products</p>
        <p className="item__price">
          <small></small>
          <strong>19.99</strong>
        </p>
        <div className="item__rating">
          <p>
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </p>
        </div>
      </div>
      <img
        src="https://img10.hkrtcdn.com/12413/prd_1241269-MuscleBlaze-MBVITE-Multivitamin-for-Immunity100-RDA-of-Vit-C-D-Zinc-120-tablets-Unflavoured_o.jpg"
        alt=""
      />

      <button>Add to cart</button>
    </div>
  );
}

export default Item;
