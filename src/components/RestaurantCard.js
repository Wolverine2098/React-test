import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, id } = resData.info;
  return (
    <Link to={"./restaurants/" + id}>
      <div className="m-4 p-4 w-[250px] rounded-lg bg-blue-50 hover:bg-blue-100 shadow-md">
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating + " stars"}</h5>
        <h5>{costForTwo}</h5>
        <h4>{sla.slaString}</h4>
      </div>
    </Link>
  );
};

export default RestaurentCard;

export const RestaurantCardPromoted = (RestaurentCard) => {
  console.log("inside promoted");
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Fast Delivery
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};
