import React, { useState, useEffect } from "react";
import Movie from "./Movie";

import "./MovieGrid.css";

const MovieGrid = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
          title: responseData[key].title,
          poster: responseData[key].poster,
          overview: responseData[key].overview,
          genres: responseData[key].genres,
        });
      }

      setPosts(loadedMovies);
      setIsLoading(false);
    };

    try {
      fetchMovies().catch((error) => {});
    } catch (err) {}
  }, []);
  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <div className="movie-container">
      {posts.map((post) => (
        <Movie
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

export default MovieGrid;
