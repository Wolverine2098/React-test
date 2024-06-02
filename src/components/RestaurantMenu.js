import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
const RestaurantMenu = () => {
  let { resId } = useParams();

  const resInfo = useRestaurantMenuData(resId);

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
  console.log();
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo / 100} Rs for 2
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li id={item.card.info.id}>
            {item.card.info.name +
              "--- " +
              (item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100 + " Rs"
                : item.card.info.price / 100 + " Rs")}
            <p>{item.card.info?.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
