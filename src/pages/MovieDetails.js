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
      const response = await fetch(
        `https://fast-garden-39142.herokuapp.com/movies/${movieId}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      setDetails(responseData.body[0]);
      setIsLoading(false);
    };

    try {
      fetchMovies().catch((error) => {
        setIsLoading(false);
      });
    } catch (err) {}
  }, [movieId]);
  if (isLoading) {
    return (
      <section className="moviesLoading">
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <Fragment>
      <SelectedMovie
        key={details.movieId}
        id={details[0].movieId}
        title={details[0].title}
        overview={details[0].overview}
        poster={details[0].poster}
        genres={details[0].genres}
        release={details[0].release_date}
      />
    </Fragment>
  );
};

export default MovieDetails;
