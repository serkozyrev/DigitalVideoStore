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
      const response = await fetch(`/shows/${showId}`);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const selectedShow = {
        id: showId,
        ...responseData.body,
      };
      setShowDetails(responseData.body[0]);

      setIsLoading(false);
    };

    try {
      fetchMovies().catch((error) => {});
    } catch (err) {}
  }, [showId]);
  if (isLoading) {
    return (
      <section className="showsLoading">
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <Fragment>
      <SelectedShow
        key={showDetails.showId}
        id={showDetails.showId}
        title={showDetails[0].title}
        overview={showDetails[0].overview}
        poster={showDetails[0].poster}
        genres={showDetails[0].genres}
        release={showDetails[0].release_date}
        numberOfSeries={showDetails[0].numberOfSeries}
        numberOfSeasons={showDetails[0].numberOfSeasons}
      />
    </Fragment>
  );
};

export default ShowDetails;
