import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SelectedShow from "../components/shows/SelectedShow";

const ShowDetails = () => {
  const params = useParams();
  const { showId } = params;
  const [showDetails, setShowDetails] = useState({ genres: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`http://localhost:3001/shows/${showId}`);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const selectedShow = {
        id: showId,
        ...responseData,
      };
      console.log(responseData);
      setShowDetails(selectedShow);
      setIsLoading(false);
    };

    try {
      fetchMovies().catch((error) => {});
    } catch (err) {}
  }, [showId]);
  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <Fragment>
      <SelectedShow
        key={showDetails.showId}
        id={showDetails.showId}
        title={showDetails.title}
        overview={showDetails.overview}
        poster={showDetails.poster}
        genres={showDetails.genres}
        release={showDetails.release_date}
        numberOfSeries={showDetails.numberOfSeries}
        numberOfSeasons={showDetails.numberOfSeasons}
      />
    </Fragment>
  );
};

export default ShowDetails;
