import RestaurantCard from "../RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {


    //local state variable

  const [ListOfRestaurants, setListOfRestaurants ] = useState(resList);

    


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