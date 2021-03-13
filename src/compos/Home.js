import React from "react";
import "./Home.css";
import Product from "./Product";

import homePage from "./images/homepage.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={homePage} alt="home-img" className="home__image" />
        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
