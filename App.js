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

const RestaurantCard = (props) => {
    const {resInfo} = props;
    console.log(resInfo);
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0 "}}>
            <img className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" 
            />
            
            <h3>{resInfo.info.name}</h3>
            <h5>{resInfo.info.cuisines}</h5>
            <h4>4.1 star</h4>
        </div>
    );
};
const resObj ={
    "info": {
      "id": "236656",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "Kanika Galleria Mall",
      "areaName": "Gautam Nagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "236656",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2700
      },
      "parentId": "166",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "promoted": true,
      "adTrackingId": "cid=7858423~p=1~eid=00000189-e437-d14c-2ae7-c47600430142~srvts=1691751010636~45995",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-12 00:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹129"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=236656",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  }
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                resInfo={resObj}
                />
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