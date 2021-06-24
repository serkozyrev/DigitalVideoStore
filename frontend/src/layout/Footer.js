import React from "react";
import { NavLink } from "react-router-dom";

import InstaLogo from "../components/sociallogo/InstaLogo";
import TwitterLogo from "../components/sociallogo/TwitterLogo";
import GitLogo from "../components/sociallogo/GitLogo";

import "./Footer.css";

const Footer = () => {
  return (
    <footer class="page-footer">
      <div>
        <small>© Copyright 2021. All rights reserved.</small>
      </div>
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
        </ul>
      </div>
      <div>
        <h2>Help</h2>
        <ul>
          <li>About Us</li>
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
      <span>
        <InstaLogo />
        <TwitterLogo />
        <GitLogo />
      </span>
    </footer>
  );
};

export default Footer;
