import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../layout/LoadingSpinner";

import Movie from "./Movie";

const MovieGrid = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://fast-garden-39142.herokuapp.com/movies"
      );

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
        <LoadingSpinner />
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
