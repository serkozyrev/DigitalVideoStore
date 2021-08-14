import React, { useState, useEffect } from "react";

import "./ShowList.css";

const ShowList = (props) => {
  const [shows, setShows] = useState([]);

  useEffect(async () => {
    fetch("/shows")
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
            <img src={show.poster} alt={show.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
