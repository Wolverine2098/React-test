import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data } = props;
  const [showItemList, setShowItemList] = useState(false);
  console.log("went here", data);
  return (
    <div className="w-6/12 bg-blue-50 shadow-lg mx-auto my-6 p-4 hover:bg-blue-100">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => {
          setShowItemList(!showItemList);
        }}
      >
        <span className="font-bold text-lg cursor-pointer">
          {data.title} ({data.itemCards.length})
        </span>
        <span>v</span>
      </div>
      {showItemList && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
