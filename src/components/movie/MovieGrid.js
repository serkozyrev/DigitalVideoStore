import React, { useEffect, useState } from "react";

import Movie from "./Movie";

const MovieGrid = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("/movies");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      setPosts(responseData.body);
      setIsLoading(false);
    };

    try {
      fetchMovies().catch((error) => {});
    } catch (err) {}
  }, []);
  if (isLoading) {
    return (
      <section className="moviesLoading">
        <p>Loading...</p>
      </section>
    );
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
