import React from "react";

import SearchLogo from "../components/sociallogo/SearchLogo";
import "./Search.css";

const Search = () => {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Enter part of movie title"
        />
        <button type="submit" className="searchButton">
          <SearchLogo />
        </button>
      </div>
    </div>
  );
};

export default Search;
