import React, { useState, useEffect } from "react";

import "./ShowGrid.css";
import Show from "./Show";
import LoadingSpinner from "../../layout/LoadingSpinner";

const ShowGrid = () => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch(
        "https://fast-garden-39142.herokuapp.com/shows/"
      );

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
      setIsLoading(false);
    };

    try {
      fetchShows().catch((error) => {});
    } catch (err) {}
  }, []);
  if (isLoading) {
    return (
      <section className="showsLoading">
        <LoadingSpinner />
      </section>
    );
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
