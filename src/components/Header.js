import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";

export const Header = () => {
            let btnName="Login";
            const [btnNameReact,setBtnNameReact] = useState("Login");
            console.log("Header render");

            // if no dependency array => useEffect on every render
            useEffect(() =>{
              console.log("useEffect called");
            }, [btnNameReact]);


    return (  <div className="header">
          <div className="logo-container">
          <img className="logo"
          src={LOGO_URL}/>
          </div>
          <div className="nav-items">
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li>Cart</li>

                  <button
                  className="login"
                  onClick={() => {
                   btnNameReact === "Login" 
                   ? setBtnNameReact("Logout")
                   :  setBtnNameReact("Login");
                  }}
                  >
                    {btnNameReact}
                  </button>
              </ul>
          </div>
      </div>
    );
  };

  