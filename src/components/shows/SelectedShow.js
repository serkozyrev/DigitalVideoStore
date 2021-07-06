import React from "react";

import "./SelectedShow.css";

const SelectedShow = (props) => {
  return (
    <div className="grid">
      <div className="info_show_section">
        <div className="show_header">
          <img className="show_image" src={props.poster} alt={props.title} />
          <span className="show-title grid">
            <div>{props.title}</div>
            <div>{props.release}</div>
          </span>
          <span className="type">
            {props.genres.map((genre) => (
              <span>
                {genre} {""}
              </span>
            ))}
          </span>

          <div>Number of Seasons: {props.numberOfSeasons}</div>
          <div>Number of Series per Season: {props.numberOfSeries}</div>
        </div>
        <div className="show_desc">
          <p>{props.overview}</p>
          <button className="btn">Buy a season $6.99</button>
          <button className="btn">Rent a season $3.99</button>
        </div>
      </div>
      <img className="big_image" src={props.poster} alt={props.title} />
    </div>
  );
};

export default SelectedShow;
