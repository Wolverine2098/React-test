import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData.info;
  return (
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
  );
};

export default RestaurentCard;
