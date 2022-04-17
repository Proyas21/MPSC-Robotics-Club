import { useState } from "react";
import logo from "../img/logo.jpeg";
import Hamborgir from "./hamborgir";
import { Link } from "react-router-dom";

const Header = () => {
  var [activeBorgir, setactiveBorgir] = useState(false);

  return (
    <header className="App-header">
      <div className="notnavs">
        <a href="/" className="logo_link">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <Hamborgir Activate={setactiveBorgir} />
      </div>
      <nav className={activeBorgir ? "navs navs-active" : "navs"}>
        <a href="/">Home</a>
        <Link to="departments" className="dep-link">
          Departments
        </Link>
        <Link to="about">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
