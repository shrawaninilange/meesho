import React from "react";
import Allproduct from "../product.jsx/Allproduct";
import Footer from "../Footer/Footer";
import "./Home.css";
import About from "../About/About";

const Home = () => {
  return (
    <div className="home">
      <div className="homediv">
        <div className="homeright">
          <h1 className="homeh1">Lowest Prices Best Quality Shopping</h1>
          <p className="homeh1">1 Crore+ Products | 650+ Categories</p>
          <button className="btnhome">
            {" "}
            <img
              className="homeplay"
              src="https://images.meesho.com/images/pow/playstore-small-icon.webp"
              alt=""
            />
            Download App Meesho app
          </button>
        </div>
        <div className="homeright">
          <img
            src="https://images.meesho.com/images/marketing/1649759684499.webp"
            alt=""
          />
        </div>
      </div>

      <div className="hometext">
        <h1>Top Categories to choose from</h1>
        <div className="homeline"></div>
      </div>

      <div className="homedivimg">
        <p className="fas">Fashsion Store</p>
        <div className="hoimg">
          <img
            className="imghome"
            src="https://images.meesho.com/images/marketing/1649760442043.webp"
            alt=""
          />
          <img
            className="imghome1"
            src="https://images.meesho.com/images/marketing/1649760423313.webp"
            alt=""
          />
          <img
            className="imghome2"
            src="https://images.meesho.com/images/marketing/1649759799809.webp"
            alt=""
          />
        </div>
      </div>

      <div className="imgho">
        <div className="rig">
          <p className="essen">Essentials</p>
          <button className="ntn1">VIEW ALL</button>
        </div>
        <div className="lef">
          <div>
            <img
              className="igg"
              src="https://images.meesho.com/images/marketing/1649760808952.webp"
              alt=""
            />
            <button className="btnimg">Beauty</button>
          </div>

          <div>
            <img
              className="igg"
              src="https://images.meesho.com/images/marketing/1649760703179.webp"
              alt=""
            />
            <button className="btnimg">Home</button>
          </div>
          <div>
            <img
              className="igg"
              src="https://images.meesho.com/images/marketing/1649760786763.webp"
              alt=""
            />
            <button className="btnimg"> Electronies</button>
          </div>
        </div>
      </div>

      <div className="img33">
        <div>
          <img
            id="img11"
            src="https://images.meesho.com/images/pow/download_banner_desktop.webp"
            alt=""
          />
        </div>
        <div>
          <img
            id="img11"
            src="https://images.meesho.com/images/pow/supply_banner_desktop.webp"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="h1inhome">Products For You</h1>
        <Allproduct />
      </div>

      <Footer />

      <About />
    </div>
  );
};

export default Home;
