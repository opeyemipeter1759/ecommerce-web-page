import React from "react";
import { useStateValue } from "../ServiceProvider";
import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import checkout_ad from "./images/cheackout_ad.jpg";
import Subtotal from "./Subtotal";
import lean from "./images/lean-startup.jpg";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={checkout_ad} alt="" className="checkout__ad" />
        <div className="">
          <h2 className="checkout__title">Shopping Cart</h2>
          {basket.map((item) => (
            <CheckOutProduct
              id="1234"
              title="testing testingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtesting"
              image={lean}
              price={7777}
              rating={6}
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
