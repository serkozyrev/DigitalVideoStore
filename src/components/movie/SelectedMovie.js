import React from "react";
import "./SelectedMovie.css";

const SelectedMovie = (props) => {
  return (
    <div className="grid_movie movie_details">
      <div className="info_section">
        <div className="movie_header">
          <img className="movie_image" src={props.poster} alt={props.title} />
          <span className="movie-title grid_movie">
            <div>{props.title}</div>
            <div>{props.release}</div>
          </span>

          <span className="type">
            {props.genres.map((genre) => (
              <span>
                {genre} {""}
              </span>
            ))}
          </span>
        </div>
        <div className="movie_desc">
          <p>{props.overview}</p>
          <button className="btn">Buy $9.99</button>
          <button className="btn">Rent $5.99</button>
        </div>
      </div>
      <img className="blur_back " src={props.poster} alt={props.title} />
    </div>
  );
};

export default SelectedMovie;
