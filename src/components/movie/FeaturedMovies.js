import React, { useState, useEffect } from "react";

import "./FeaturedMovies.css";

const FeaturedMovies = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("/featured-movies");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      setPosts(responseData);
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
          <div className="featured__poster" key={post.id}>
            <img src={post.poster} alt={post.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
