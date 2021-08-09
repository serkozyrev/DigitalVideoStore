import React, { useState, useEffect } from "react";

import "./SliderImage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SliderImage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("http://localhost:5000/slider");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedMovies = [];

      for (const key in responseData) {
        loadedMovies.push({
          id: key,
          ...responseData[key],
        });
      }
      setPosts(loadedMovies);
    };

    try {
      fetchMovies().catch((error) => {});
    } catch (err) {}
  }, []);
  return (
    <Slider
      dots={true}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      arrows={false}
      autoplaySpeed={6000}
      className="slideImg"
    >
      {posts.map((post) => (
        <div className="slidePoster" key={post.id}>
          <img className="slideImg" src={post.poster} alt="" width="50%" />
        </div>
      ))}
    </Slider>
  );
};

export default SliderImage;
