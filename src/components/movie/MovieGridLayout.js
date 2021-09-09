import React, { useState } from "react";

import Search from "../../layout/Search";
import MovieGrid from "./MovieGrid";
import SearchMovie from "./SearchMovie";

import "./MovieGridLayout.css";

const MovieGridLayout = () => {
  const [title, setTitle] = useState("");
  const [searching, setSearching] = useState(false);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearching(true);
    titleHandler;
  };
  return (
    <div className="movie-container">
      <div className="wrap">
        <form onSubmit={submitHandler}>
          <Search title={titleHandler} />
        </form>
      </div>
      {searching ? <SearchMovie title={title} /> : <MovieGrid />}
    </div>
  );
};

export default MovieGridLayout;
