import React, { useEffect, useState } from "react";
import Products from "./Products";
import "./ItemRow.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import axios from "axios";
import ItemCard from "./ItemCard";

function ItemRow() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getProducts").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="itemrow">
      <div className="allitems__rows">
        {products.map((product) => {
          return (
            <ItemCard
              key={product.idaddProduct}
              id={product.idaddProduct}
              title={product.title}
              price={product.price}
              image={product.image}
              info={product.header}
              ratings={product.ratings}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemRow;
