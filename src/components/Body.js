import resObj from "../utils/mockData";
import RestaurentCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RestaurantCardPromoted } from "./RestaurantCard";
const Body = () => {
  const checkOnline = useOnlineStatus();
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const PromotedCard = RestaurantCardPromoted(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetched");
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.619583&lng=77.019518&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("data", json);
    setListOfRestaurants(
      json.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      "we have the data",
      listOfRestaurants[0]?.info?.sla?.deliveryTime
    );
  };

  //conditional rendering

  const filterData = async (filteredText) => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/http://www.swiggy.com/dapi/restaurants/list/v5?lat=28.619583&lng=77.019518&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    let filteredList =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
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
      <div className="filter flex justify-between">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-blue-100 m-4 rounded-lg"
            onClick={() => {
              filterData(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100"
            onClick={() => {
              let filteredList = resObj.filter(
                (restaurant) => restaurant.info.avgRating > 4.2
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurants.map((restaurant) =>
          restaurant?.info?.sla?.deliveryTime <= 30 ? (
            <PromotedCard key={restaurant.info.id} resData={restaurant} />
          ) : (
            <RestaurentCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
