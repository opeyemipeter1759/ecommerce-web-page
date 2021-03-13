import React from "react";
import "./product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img src="https://image-na.ssl-images-amazon.com/images/I/51Zymb0q7UnL._AC_SY400.jpg" alt="" srcset=""/>
    </div>
  );
}

export default Product;
