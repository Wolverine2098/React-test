import { Link } from "react-router-dom";
import logo from "../../assets/foodIcon.png";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const checkOnline = useOnlineStatus();
  return (
    <div id="Header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="list-Items">
        <ul>
          <li>{checkOnline ? "🟢" : "🔴"}</li>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./About">About Us</Link>
          </li>
          <li>
            <Link to="./Contact">Contact Us</Link>
          </li>
          <li>Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
