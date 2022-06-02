import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="foot">
      <div className="fot1poi">
        <h1>Shop Non-Stop on Meesho</h1>
        <p>
          Trusted by more than 1 Crore Indians Cash on Delivery | Free Delivery
        </p>
        <img
          className="foimg"
          src="https://images.meesho.com/images/pow/playstore-icon-big.webp"
          alt=""
        />
        <img
          className="foimg"
          src="https://images.meesho.com/images/pow/appstore-icon-big.webp"
          alt=""
        />
      </div>
      <div className="fot">
        <p>Careers</p>
        <p>Become a supplier</p>
        <p>Our Influencer Program</p>
        <p>Hall of Fame</p>
      </div>

      <div className="foot3">
        <p>Legal and Policies</p>
        <p>Meesho Tech Blog</p>
        <p>Notices and Returns</p>
      </div>
      <div className="foot4">
        <p>Reach out to us</p>
        <img
          className="iv"
          src="https://images.meesho.com/images/pow/facebook.png"
          alt=""
        />
        <img
          className="iv"
          src="https://images.meesho.com/images/pow/instagram.png"
          alt=""
        />
        <img
          className="iv"
          src="https://images.meesho.com/images/pow/youtube.png"
          alt=""
        />
        <img
          className="iv"
          src="https://images.meesho.com/images/pow/linkedin.png"
          alt=""
        />
        <img
          className="iv"
          src="https://images.meesho.com/images/pow/twitter.png"
          alt=""
        />
      </div>

      <div className="footcon">
        <h3>Contact Us</h3>
        <p className="pfot">
          Fashnear Technologies Private Limited, CIN: U74900KA2015PTC082263
          06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring
          Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
          E-mail address: query@meesho.com © 2015-2022 Meesho.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
