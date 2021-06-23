import React, { useState, useEffect } from "react";

import "./FeaturedMovies.css";

const FeaturedMovies = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("http://localhost:3001/featured_movies/");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedMovies = [];

      for (let i = 0; i < 6; i++) {}
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
    };

    try {
      fetchMovies().catch((error) => {});
    } catch (err) {}
  }, []);
  return (
    <div className="row">
      <h5>{props.title}</h5>
      <div className="featured__posters">
        {posts.map((post) => (
          <div className="featured__poster">
            <img src={post.poster} alt={post.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
