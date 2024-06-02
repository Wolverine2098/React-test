import resObj from "../utils/mockData";
import RestaurentCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const checkOnline = useOnlineStatus();
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetched");
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.619583&lng=77.019518&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //conditional rendering

  const filterData = async (filteredText) => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/http://www.swiggy.com/dapi/restaurants/list/v5?lat=28.619583&lng=77.019518&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    let filteredList =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.filter(
        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    setListOfRestaurants(filteredList);
  };

  if (!checkOnline)
    return <h1>"Oops!!! Looks like offline please check your network"</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              filterData(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = resObj.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
