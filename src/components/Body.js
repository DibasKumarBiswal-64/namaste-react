import RestaurantCard from "../RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {


    //local state variable

  const [ListOfRestaurants, setListOfRestaurants ] = useState(resList);
  
  // whenever state variables updates, react triggers a reconcilation cycle(re-render the component)
  const [searchText, setSearchText] = useState("");

  console.log("Body render");
    
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2508183&lng=85.8145617&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const jsonData = await data.json();
    console.log(jsonData);
    updateStateVariable(jsonData);
    console.log(ListOfRestaurants);
  };
   const updateStateVariable = (jsonData) => {
    jsonData.data.cards.map((item) => {
      if (item.card.card.id === 'top_brands_for_you') {
        setListOfRestaurants(
          item?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      }
    });
  };

    return ListOfRestaurants.length === 0 ? ( 
      <Shimmer />
      ) : (
        <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
                }}/>
                <button
                onClick={()=> {
                  console.log(searchText);
                  
                  const filteredRestaurant = ListOfRestaurants.filter(
                    (res)=> res?.data?.name?.includes( searchText)
                    );

                    setListOfRestaurants(filteredRestaurant);

                }}
                >Search</button>
            </div>
            <button className="filter-btn" 
                onClick={()=>{
                  const filteredList = ListOfRestaurants.filter((res) => res?.info?.avgRating > 4);
                  
                        setListOfRestaurants(filteredList);
                }}
                >
                Top Rated Restaurants
                </button>
                </div>
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