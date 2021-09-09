import React, { useState } from "react";
import Search from "../../layout/Search";

import ShowGrid from "./ShowGrid";
import "./ShowGridLayout.css";
import SearchShows from "./SearchShows";

const ShowGridLayout = (props) => {
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
    <div className="show_container">
      <div className="wrap">
        <form onSubmit={submitHandler}>
          <Search title={titleHandler} />
        </form>
      </div>
      {searching ? <SearchShows title={title} /> : <ShowGrid />}
    </div>
  );
};

export default ShowGridLayout;
