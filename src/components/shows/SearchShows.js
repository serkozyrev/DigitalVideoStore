import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../layout/LoadingSpinner";

import "./SearchShows.css";
import Show from "./Show";

const SearchShows = (props) => {
  console.log(props);
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(
      `https://fast-garden-39142.herokuapp.com/shows/search?title=${props.title}`
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const responseData = await response.json();
    console.log(responseData.body);
    const loadedShows = [];

    // for (const key in responseData.body) {
    //   loadedShows.push({
    //     id: key,
    //     ...responseData[key].body,
    //   });
    // }

    setShows(responseData.body);
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return (
      <section className="showsLoading">
        <LoadingSpinner />
      </section>
    );
  }
  console.log(shows);
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

export default SearchShows;
