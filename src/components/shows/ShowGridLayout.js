import React, { useEffect, useState } from "react";
import Search from "../../layout/Search";

import Show from "./Show";
import SearchLogo from "../sociallogo/SearchLogo";
import ShowGrid from "./ShowGrid";
import "./ShowGridLayout.css";
import SearchShows from "./SearchShows";
const ShowGridLayout = (props) => {
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
    <div className="show_container">
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            onChange={titleHandler}
            value={title}
            className="searchTerm"
            placeholder="Enter part of show title"
          />
          <button
            type="submit"
            onClick={submitHandler}
            className="searchButton"
          >
            <SearchLogo />
          </button>
        </div>
      </div>
      {searching ? <SearchShows title={title} /> : <ShowGrid />}
    </div>
  );
};

export default ShowGridLayout;
