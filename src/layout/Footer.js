import React from "react";
import { Link, NavLink } from "react-router-dom";

import InstaLogo from "../components/sociallogo/InstaLogo";
import TwitterLogo from "../components/sociallogo/TwitterLogo";
import GitLogo from "../components/sociallogo/GitLogo";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div>
        <small>© Copyright 2021. All rights reserved.</small>
      </div>
      <div className="links">
        <div>
          <h2>Page Links</h2>
          <ul>
            <li>
              <NavLink to="/homepage">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movie List</NavLink>
            </li>
            <li>
              <NavLink to="/shows">Show List</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h2>Help</h2>
          <ul>
            <li>Support</li>
            <li>Forums</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2>Information</h2>
          <ul>
            <li>Terms of Use</li>
            <li>Legal Notices</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <span>
        <InstaLogo />
        <TwitterLogo />
        <a href="https://github.com/serkozyrev?tab=repositories">
          <GitLogo />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
