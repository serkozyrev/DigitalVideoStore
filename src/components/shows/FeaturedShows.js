import React, { useState, useEffect } from "react";

import "./FeaturedShows.css";

const FeaturedShows = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("http://localhost:5000/featured-shows");

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

export default FeaturedShows;
