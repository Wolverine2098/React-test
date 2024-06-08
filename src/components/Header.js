import { Link } from "react-router-dom";
import logo from "../../assets/foodIcon.png";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const checkOnline = useOnlineStatus();

  const data = useContext(UserContext);

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-lg m-2 bg-blue-100">
      <div className="logo-container">
        <img className="w-[6rem]" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{checkOnline ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link className="px-4" to="./">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="./About">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="./Contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="./Cart">Cart({cartItems.length})</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
