import React, { useState, useEffect } from "react";

import "./ShowList.css";

const ShowList = (props) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch("http://localhost:3001/shows/");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedShows = [];

      for (const key in responseData) {
        loadedShows.push({
          id: key,
          ...responseData[key],
        });
      }

      setShows(loadedShows);
    };

    try {
      fetchShows().catch((error) => {});
    } catch (err) {}
  }, []);
  return (
    <div className="row">
      <h5>{props.title}</h5>
      <div className="row__posters">
        {shows.map((show) => (
          <div className="show__poster">
            <img src={show.poster} alt={show.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
