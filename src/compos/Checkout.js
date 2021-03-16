import React from "react";
import "./Checkout.css";
import checkout_ad from "./images/cheackout_ad.jpg";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={checkout_ad} alt="" className="checkout__ad" />
        <div className="">
          <h2 className="checkout__title">Shopping Cart</h2>

        </div>
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
