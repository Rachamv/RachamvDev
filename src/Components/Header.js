import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Taglines from "./Types";

const categories = ["Education", "Technology", "Programming", "Career"];

const Header = () => {
  const [isNavShow, setIsNavShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsNavShow(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavHandler = () => {
    setIsNavShow((prevState) => !prevState);
  };

  const closeNavHandler = () => {
    setIsNavShow(false);
  };

  return (
    <nav>
      <div className="container nav-container">
        <Link className="nav-logo" to="/" onClick={closeNavHandler}>
          <h3>
            Rachamv <span>Dev</span> Journal
          </h3>
          {/* Use the Taglines component here */}
          <div className="nav-tagline-wrapper">
            <Taglines />
          </div>
        </Link>
        <button className="nav-toggle-button" onClick={toggleNavHandler}>
          {isNavShow ? <FaTimes /> : <FaBars />}
        </button>
        {isNavShow && (
          <ul className="nav-menu">
            {categories.map((category, index) => (
              <li key={index} onClick={closeNavHandler}>
                <Link to={`/posts/categories/${category}`}>{category}</Link>
              </li>
            ))}
            {isLoggedIn ? (
              <li onClick={handleLogout}>
                <Link to="/">Logout</Link>
              </li>
            ) : (
              <>
                <li onClick={closeNavHandler}>
                  <Link to="/login">Login</Link>
                </li>
                <li onClick={closeNavHandler}>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;