import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ShowList.css";

const ShowList = (props) => {
  const [shows, setShows] = useState([]);

  useEffect(async () => {
    fetch("https://fast-garden-39142.herokuapp.com/shows")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
      });
  }, []);
  return (
    <div className="row">
      <h5>{props.title}</h5>
      <div className="row__posters">
        {shows.map((show) => (
          <div className="show__poster" key={show.id}>
            <Link to={`/shows/${show.id}`}>
              <img src={show.poster} alt={show.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
