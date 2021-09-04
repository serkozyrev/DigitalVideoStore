import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";
import AuthContext from "../components/context/auth-context";
import logo from "../assets/logo.png";

const Header = () => {
  const authCtx = useContext(AuthContext);
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
      {!authCtx.isLoggedIn && (
        <NavLink to="/authorization" className="btn">
          Login/Registration
        </NavLink>
      )}
      {authCtx.isLoggedIn && (
        <div className={classes.profile}>
          <span>
            <NavLink to="/profile" activeClassName={classes.active}>
              Profile
            </NavLink>
          </span>
          <span onClick={authCtx.logout}>
            <NavLink to="/homepage" className="btn">
              Logout
            </NavLink>
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
