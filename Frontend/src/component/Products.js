import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./Products.css";
import axios from "axios";

function Products({ title }) {

  return (
    <div className="products">
      <div>
        <div className="products__title">
          <h1>{title}</h1>
        </div>
        <div className="products__items">
          <Item />
        </div>
      </div>
    </div>
  );
}

export default Products;
