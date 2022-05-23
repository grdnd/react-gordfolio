import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

// JSX
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/react-gordfolio"
            className="navbar-icon"
            onClick={closeMobileMenu}
          >
            <i className="fa-solid fa-chess-rook" />
            GORDO
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/react-gordfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Resume</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
