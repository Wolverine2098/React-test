import resObj from "../utils/mockData";
import RestaurentCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="body">
      <div className="Search">search</div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurentCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
