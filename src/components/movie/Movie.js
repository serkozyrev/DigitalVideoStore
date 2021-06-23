import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = (props) => {
  return (
    <div className="movie">
      <Link to={`/movies/${props.id}`}>
        <img src={props.poster} alt={props.title} />
      </Link>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Movie;
