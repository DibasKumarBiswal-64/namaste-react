import React from "react";
import ReactDOM from "react-dom/client";

import { restaurants } from "./mockData/mockData";

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

const RestaurantCard = (props) => {
    const {resInfo} = props;
    console.log(resInfo);
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0 "}}>
            <img className="res-logo"
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +resInfo.info.cloudinaryImageId}
            />
            
            <h3>{resInfo.info.name}</h3>
            <h5>{resInfo.info.cuisines}</h5>
            <h4>4.1 star</h4>
        </div>
    );
};
            
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          restaurants.map(data => (
            <RestaurantCard resInfo={data}/>
          ))
        }
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