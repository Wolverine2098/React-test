import React from "react";
import ReactDOM from "react-dom";
import logo from "./assets/foodIcon.png";
const Header = () => {
  return (
    <div id="Header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="list-Items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/64fd45fd9f44c1737bc446e470bed666"
      />
      <h3>Meghna Foods</h3>
      <h5>Biryani, North Indian, chinese</h5>
      <h5>4.4 stars</h5>
      <h5>ETA 38 mins</h5>
      <h5>Rs 750 for 2</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">search</div>
      <div className="res-container"><RestaurentCard/></div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div id="App">
      <Header />
      <Body></Body>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
