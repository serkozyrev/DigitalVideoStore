import React from "react";

import "./ContentSection.css";
import conjuring from "../../assets/conjuring.jpg";
import widow from "../../assets/blackwidow.jpg";
import mk from "../../assets/mk.jpg";
import thing from "../../assets/thing.jpg";
import jungle_cruise from "../../assets/jungle_cruise.jpg";
const ContentSection = () => {
  return (
    <div className="posters_container">
      <h2>Buy these movies for weekend</h2>
      <div className="row_posters">
        <img className="row_poster" src={conjuring} alt="conjuring" />
        <img className="row_poster" src={thing} alt="thing" />
        <img className="row_poster" src={jungle_cruise} alt="jungle" />
        <img className="row_poster" src={mk} alt="mk" />
        <img className="row_poster" src={widow} alt="blackwidow" />
      </div>
    </div>
  );
};

export default ContentSection;
