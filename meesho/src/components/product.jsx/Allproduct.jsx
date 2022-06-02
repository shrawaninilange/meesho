import { useEffect, useState } from "react";
import React from "react";
import "./product.css";

function Allproduct() {
  const [students, setstudent] = useState([]);
  // const [text , setstudenttext ] = useState("")
  useEffect(() => {
    getdata();
  });

  const getdata = async () => {
    const data = await fetch(
      " https://meesho-all.herokuapp.com/ethnicwear "
    ).then((d) => d.json());
    setstudent(data);
  };

  return (
    <>
      <div className="App_pro">
        <div className="all_products">
          {/* <h2>Women Ethnic Wear</h2> */}
          <p>Showing 1-20 out of 1566598 Products</p>
        </div>

        <div className="pro_con">
          {students.map((e) => {
            return (
              <div className="pro_div" key={e.id}>
                <div className="single_pro">
                  <img src={e.img} className="pro_img" alt="" />
                  <div className="price">
                    <p className="productbox">{e.title}</p>
                    <div className="pro_pri">
                      <h2 className="org_pri">
                        {" "}
                        <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                        {e.price}{" "}
                      </h2>
                      <h4 className="discount">
                        <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                        {e.d_price}
                      </h4>
                      <p className="dis10">10% discount</p>
                    </div>
                    <p>
                      {" "}
                      <img
                        src="https://img.icons8.com/ios-glyphs/20/000000/discount--v1.png"
                        alt="error"
                      />{" "}
                      <i className="fa-solid fa-indian-rupee-sign"></i>50
                      discount on 1st order
                    </p>
                    <div className="freee">
                      <p className="free">Free delivery</p>
                    </div>
                    <div className="rating_pro">
                      <h2 className="rate">{e.rating}</h2>
                      <h6 className="reviews">39 Reviews</h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Allproduct;
