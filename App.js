import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (  <div className="header">
        <div className="logo">
        <img src="https://img.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-48914.jpg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Card</li>
            </ul>
        </div>
    </div>
  );
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0 "}}>
            <img className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" 
            />
            
            <h3>Burger King</h3>
            <h5>Burgers, American
                Gautam Nagar</h5>
            <h4>4.3 stars</h4>
        </div>
    );
};
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="KFC" cuisine="Biriyani, northindian,Asian"/>
                <RestaurantCard resName="Burger Kings" cuisine="Burger,Fast Food"/>
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);