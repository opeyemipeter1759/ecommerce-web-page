import React from "react";
import "./Home.css";
import Product from "./Product";
import homePage from "./images/homepage.jpg";

import lean from "./images/lean-startup.jpg";
import mixer from "./images/mixer.jpg";
import smartwatch from "./images/smartwatch.jpg";
import speaker from "./images/speaker.jpg";
import ipad from "./images/ipad.jpg";
import monitor from "./images/monitor.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={homePage} alt="home-img" className="home__image" />
        <div className="home__row">
          <Product
            id="001"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
            price={29.99}
            image={lean}
            rating={5}
          />
          <Product
            id="002"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl "
            price={239.0}
            rating={4}
            image={mixer}
          />
        </div>
        <div className="home__row">
          <Product
            id="003"
            title="Samsung LC49RG90SSUXEN 49'Curved LED Gaming Monitor -- Super Ultra Wide Dual WQHD 5120 x 1400"
            price={199.99}
            rating={3}
            image={smartwatch}
          />
          <Product
            id="004"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={speaker}
          />
          <Product
            id="005"
            title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation) (2020)"
            price={548}
            rating={4}
            image={ipad}
          />
        </div>
        <div className="home__row">
          <Product
            id="006"
            title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor -- Super Ultra Wide Dual WQHD 5120 x 1400"
            price={539}
            rating={5}
            image={monitor}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
