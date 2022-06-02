import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const arr = [
    "Women Ethnic",
    "Women Western",
    "Jewellery & Accessories",
    "Kids",
    "Electronics",
    "Men",
    "Beauty & Health",
    "Home & Kitchen",
    "Bags & Footwear",
    "Bags & Footwear",
  ];
  return (
    <div className="Nav">
      <div className="logoandinput">
        <div className="logo">
          <img
            className="logoimg"
            src="https://supplier.meesho.com/images/footer-logo.svg"
            alt=""
          />
        </div>
        <div className="input">
          <input
            type="text"
            Name="enter"
            id="input"
            placeholder="Try,saree kurti or search by product code"
          />
        </div>

        <div className="rightside">
          <div className="down">
            <p className="ban">
              {" "}
              <i class="fa-solid fa-mobile-retro"></i> Download App |
            </p>
            <div className="line"></div>
            <p className="ban">Become a Supplier |</p>

            <p className="ban">
              {" "}
              <i class="fa-solid fa-user"></i>Profile{" "}
            </p>
            <p className="ban">
              <i class="fa-solid fa-cart-shopping"></i>Cart
            </p>
          </div>
        </div>
      </div>
      <hr />

      <div className="navpro">
        {arr.map((e) => {
          return (
            <div className="list">
              <p className="listname"> {e} </p>
            </div>
          );
        })}
      </div>
      <hr className="lineline" />
    </div>
  );
};

export default Navbar;
