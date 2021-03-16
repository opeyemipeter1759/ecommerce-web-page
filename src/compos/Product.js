import React from "react";
import "./product.css";

function Product({ id, title, image, rating, price }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
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
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
