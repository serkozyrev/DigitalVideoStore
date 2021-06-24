import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectedMovie from "../components/movie/SelectedMovie";

const MovieDetails = () => {
  const params = useParams();
  const { movieId } = params;
  const [details, setDetails] = useState({ genres: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`http://localhost:3001/movies/${movieId}`);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const selectedMovie = {
        id: movieId,
        ...responseData,
      };
      console.log(responseData);
      setDetails(selectedMovie);
      setIsLoading(false);
    };

    try {
      fetchMovies().catch((error) => {
        setIsLoading(false);
      });
    } catch (err) {}
  }, [movieId]);
  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <Fragment>
      <SelectedMovie
        key={details.movieId}
        id={details.movieId}
        title={details.title}
        overview={details.overview}
        poster={details.poster}
        genres={details.genres}
        release={details.release_date}
      />
    </Fragment>
  );
};

export default MovieDetails;
