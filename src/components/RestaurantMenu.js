import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
  let { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const info = await data.json();

    // console.log("here is the info", info);
    setResInfo(info.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  if (resInfo === null) return <Shimmer />;
  console.log(
    "here it is",
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  );
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
          <li>
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
