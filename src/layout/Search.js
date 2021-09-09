import React from "react";

import SearchLogo from "../components/sociallogo/SearchLogo";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="search">
      <input
        type="text"
        onChange={props.title}
        className="searchTerm"
        placeholder="Enter part of movie title"
      />
      <button type="submit" className="searchButton">
        <SearchLogo />
      </button>
    </div>
  );
};

export default Search;
