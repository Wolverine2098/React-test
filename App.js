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
    <div className="res-card">
      <h3>Meghna Foods</h3>
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
