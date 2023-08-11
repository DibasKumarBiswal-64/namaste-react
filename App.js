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
        <div className="res-card">
            <h3>KFC</h3>
        </div>
    );
};
const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}
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