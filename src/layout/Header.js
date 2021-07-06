import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className={classes.page__header}>
      <div className={classes.logo}>
        <NavLink to="/" className={classes.active}>
          <img src={logo} className={classes.logo} alt="site logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/movies" activeClassName={classes.active}>
              Movie List
            </NavLink>
          </li>
          <li>
            <NavLink to="/shows" activeClassName={classes.active}>
              Show List
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/auth" className="btn">
        Login/Registration
      </NavLink>
    </header>
  );
};

export default Header;
