import React, { useState, useEffect } from "react";

import SearchLogo from "../sociallogo/SearchLogo";
import MovieGrid from "./MovieGrid";
import SearchMovie from "./SearchMovie";

import "./MovieGridLayout.css";

const MovieGridLayout = () => {
  const [title, setTitle] = useState("");
  const [searching, setSearching] = useState(false);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    if (title.length === 0) {
      setSearching(false);
    }
  }, [title]);
  const submitHandler = (e) => {
    e.preventDefault();
    setSearching(true);
    titleHandler;
  };
  return (
    <div className="movie-container">
      <div className="wrap">
        <form onSubmit={submitHandler}>
          <div className="search">
            <input
              type="text"
              onChange={titleHandler}
              value={title}
              className="searchTerm"
              placeholder="Enter part of movie title"
            />
            <button type="submit" className="searchButton">
              <SearchLogo />
            </button>
          </div>
        </form>
      </div>
      {searching ? <SearchMovie title={title} /> : <MovieGrid />}
    </div>
  );
};

export default MovieGridLayout;
