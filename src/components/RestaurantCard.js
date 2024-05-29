import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, id } = resData.info;
  console.log("view the data", resData.info);
  return (
    <Link to={"./restaurants/" + id}>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating + " stars"}</h5>
        <h5>{costForTwo}</h5>
        <h4>{sla.slaString}</h4>
      </div>
    </Link>
  );
};

export default RestaurentCard;
