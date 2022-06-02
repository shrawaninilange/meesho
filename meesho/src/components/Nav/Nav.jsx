import React from 'react'
 import "./Nav.css"
const Nav = () => {
  return (
    
                      <div className="Nav1">
                      <div className="logoandinput">
                        <div className="logo">
                          <img
                            className="logoimg1"
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
                
                        <div className="rightside1">
                          <div className="down">
                            <p className="ban1">
                              {" "}
                              <i class="fa-solid fa-mobile-retro"></i> Download App |
                            </p>
                            <div className="line"></div>
                            <p className="ban1">Become a Supplier |</p>
                </div>
              </div>
              </div>
              <hr />

              
              </div>
  )
}

export default Nav