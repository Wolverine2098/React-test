import logo from "../../assets/foodIcon.png"
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

export default Header;
