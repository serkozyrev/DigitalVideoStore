import React, { useState, useEffect } from "react";

import "./MovieList.css";

//import Card from "../ui/Card";

const MovieList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("http://localhost:3001/movies/");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedMovies = [];

      for (const key in responseData) {
        loadedMovies.push({
          id: key,
          ...responseData[key],
        });
      }

      setPosts(loadedMovies);
    };

    try {
      fetchMovies().catch((error) => {});
    } catch (err) {}
  }, []);
  return (
    <div className="row_listing">
      <h5>{props.title}</h5>
      <div className="row__posters">
        {posts.map((post) => (
          <div className="row__poster">
            <img src={post.poster} alt={post.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
