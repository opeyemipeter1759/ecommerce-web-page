import React from "react";
import "./Home.css";
import Product from "./Product";
import homePage from "./images/homepage.jpg";

import lean from "./images/lean-startup.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={homePage} alt="home-img" className="home__image" />
        <div className="home__row">
          <Product
            title="The Lean Startup"
            price={29.99}
            image={lean}
            rating={5}
          />
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
