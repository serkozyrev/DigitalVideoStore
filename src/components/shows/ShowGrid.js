import React, { useEffect, useState } from "react";

import Show from "./Show";
import "./ShowGrid.css";
const ShowGrid = () => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
          title: responseData[key].title,
          poster: responseData[key].poster,
          overview: responseData[key].overview,
          genres: responseData[key].genres,
        });
      }

      setShows(loadedShows);
      setIsLoading(false);
    };

    try {
      fetchShows().catch((error) => {});
    } catch (err) {}
  }, []);
  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <div className="show_container">
      {shows.map((post) => (
        <Show
          key={post.id}
          id={post.id}
          poster={post.poster}
          title={post.title}
          genre={post.genres}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
