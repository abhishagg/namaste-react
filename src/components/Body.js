import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const filterData = (searchText, restaurants) => {
    let filteredRestaurants = restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
    return filteredRestaurants;
};
const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants()
    }, [])


    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json)
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    return allRestaurants.length === 0 ? (<Shimmer />) : (
        <>
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={
                        (e) => { setSearchText(e.target.value) }
                    }
                />
                <button className="search-btn" onClick={() => {
                    let filteredRestaurants = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(filteredRestaurants);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                })}
            </div>
        </>
    )
}

export default Body