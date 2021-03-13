import React from "react";
import "./product.css";
import lean from "./images/lean-startup.jpg";

function Product({ id, title, image, rating, price }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" srcset="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
