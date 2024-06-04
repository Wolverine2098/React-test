import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  let { resId } = useParams();

  const resInfo = useRestaurantMenuData(resId);

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) =>
      e.card?.card?.["@type"].includes(
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );

  console.log("categories", categories);

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold ">
        {cuisines.join(", ")} - {costForTwo / 100} Rs for 3
      </p>
      {categories.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
      ))}
    </div>
  );
};
export default RestaurantMenu;
