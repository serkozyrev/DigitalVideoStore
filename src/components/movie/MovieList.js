import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./MovieList.css";

//import Card from "../ui/Card";

const MovieList = (props) => {
  const [posts, setPosts] = useState([]);

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
          <div className="row__poster" key={post.id}>
            <Link to={`/movies/${post.id}`}>
              <img src={post.poster} alt={post.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
