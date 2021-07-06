import React from "react";

import FeaturedMovies from "../components/movie/FeaturedMovies";
import FeaturedShows from "../components/shows/FeaturedShows";
import MovieList from "../components/movie/MovieList";
import ShowList from "../components/shows/ShowList";
import ContentSection from "../components/contentsection/ContentSection";
import SliderImage from "../components/slider/SliderImage";
const HomePage = () => {
  return (
    <>
      <main>
        <SliderImage />
        <MovieList title={"Movie List"} />
        <FeaturedMovies title={"Popular Movies"} />
        <ShowList title={"Show List"} />
        <ContentSection />
        <FeaturedShows title={"Popular Shows"} />
      </main>
    </>
  );
};

export default HomePage;
