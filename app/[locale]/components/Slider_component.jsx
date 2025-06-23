"use client";
import React, { useState, useEffect } from "react";
import "../styles/Slider_component.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";

const Slider_component = () => {
  const t = useTranslations("SliderComponent");
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 3;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Start loading
    fetch("https://c-flicks.onrender.com/all-movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching C-flicks movies", err);
        setLoading(false);
      });
  }, []);

  const currentImages = movies.slice(startIndex, startIndex + imagesPerPage);

  const nextSlide = () => {
    const maxIndex = movies.length - imagesPerPage;
    setStartIndex((prev) => Math.min(prev + imagesPerPage, maxIndex));
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - imagesPerPage, 0));
  };

  return (
    <div className="slide_main_div">
      <h1 className="trending">{t("trending")}</h1>

      {loading ? (
        <div className="slider-loading">
          <div className="spinner" />
          <p>{t("loading")}</p>
        </div>
      ) : (
        <div className="image_div">
          <button
            className="slider_button"
            onClick={prevSlide}
            disabled={startIndex === 0}
            type="button"
          >
            <FaAngleLeft />
          </button>

          {currentImages.map((movie) => (
            <div className="slider_item" key={movie.id}>
              <img src={movie.thumbnail} alt={`movie number ${movie.id}`} />
            </div>
          ))}

          <button
            className="slider_button"
            onClick={nextSlide}
            disabled={startIndex + imagesPerPage >= movies.length}
            type="button"
          >
            <FaAngleRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider_component;