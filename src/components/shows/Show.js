import React from "react";
import { Link } from "react-router-dom";

import "./Show.css";

const Show = (props) => {
  return (
    <div className="show">
      <Link to={`/shows/${props.id}`}>
        <img src={props.poster} alt={props.title} />
      </Link>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Show;
