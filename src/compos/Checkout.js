import React from "react";
import { useStateValue } from "../ServiceProvider";
import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import checkout_ad from "./images/cheackout_ad.jpg";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={checkout_ad} alt="" className="checkout__ad" />
        <div className="">
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Shopping Cart</h2>

          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
