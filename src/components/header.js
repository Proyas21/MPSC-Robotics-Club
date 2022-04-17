import { useState } from "react";
import logo from "../img/logo.jpeg";
import Hamborgir from "./hamborgir";
import { Link } from "react-router-dom";

const Header = () => {
  var [activeBorgir, setactiveBorgir] = useState(false);

  return (
    <header className="App-header">
      <div className="notnavs">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Hamborgir Activate={setactiveBorgir} />
      </div>
      <nav className={activeBorgir ? "navs navs-active" : "navs"}>
        <Link to="/">Home</Link>
        <Link to="departments">Departments</Link>
        <Link to="about">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
