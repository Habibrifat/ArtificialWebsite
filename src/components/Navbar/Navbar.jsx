import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaSkype, FaFacebookF } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import "./navbar.css";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };
  return (
    <nav className="navbar flex">
      <div className="container">
        <div className="navbar-content flex">
          <div className="band-name flex">
            <Link to={"/"} className="navbar-brand">
              OntologyLTD.
            </Link>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav">
                <li className="text-white">
                  <Link to={"/"}>About</Link>
                </li>
                <li className="text-white">
                  <Link to={"/"}>Features</Link>
                </li>
                <li className="text-white">
                  <Link to={"/"}>Pricing</Link>
                </li>
                <li className="text-white">
                  <Link to={"/"}>Contact</Link>
                </li>
              </ul>
              <ul className="navbar-social flex">
                <li className="text-white">
                  <Link to={"/"}>
                    <FaTwitter />
                  </Link>
                </li>
                <li className="text-white">
                  <Link to={"/"}>
                    <FaSkype />
                  </Link>
                </li>
                <li className="text-white">
                  <Link to={"/"}>
                    <FaFacebookF />
                  </Link>
                </li>
              </ul>
              <div className="navbar-btn">
                <button type="button" className="btn">
                  <IoMdRocket />
                  <span>get started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
