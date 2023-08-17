import RestaurantCard from "../RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";



const Body = () => {


    //local state variable

  const [ListOfRestaurants, setListOfRestaurants ] = useState(resList);

    
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2508183&lng=85.8145617&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json);
            setListOfRestaurants(json.data.cards[4].card.gridElements.infoWithStyle.restaurants);
  };

    return (
        <div className="body">
            <div className="filter"></div>
            <button className="filter-btn" 
                onClick={()=>{
                  const filteredList = ListOfRestaurants.filter((res) => res?.info?.avgRating > 4);
                  
                        setListOfRestaurants(filteredList);
                }}
                >
                Top Rated Restaurants
                </button>
            <div className="res-container">
                {
                  ListOfRestaurants.map((restaurant)=>(
                  <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
                  ))}
            </div>
        </div>
    );
};

export default Body;