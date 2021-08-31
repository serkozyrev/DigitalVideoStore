import React from "react";

import "./About.css";
const About = () => {
  return (
    <div className="about_details">
      <h2 className="title">About this project</h2>
      <p className="description">
        Hello, my name is Sergey Kozyrev. I am Database Application Developer
        student at Seneca College. I built this website by using ReactJS for
        frontend and SpringBoot for backend. For the frontend I used hooks like
        useEffect, useState, useContext, React Router where I implement Link,
        NavLink, Router, Route and Switch. Also, I used Suspense from React that
        allow to load only those part of the website that will be in use when
        end user click on it to improve loading time of the whole website.
      </p>
    </div>
  );
};

export default About;
