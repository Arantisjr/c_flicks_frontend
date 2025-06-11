"use client";
import React, { useState, useEffect } from "react";
import Button_genre from "./Button_genre";
import { GiLoveMystery } from "react-icons/gi";
import { LiaNimblr } from "react-icons/lia";
import { RiMovie2AiFill } from "react-icons/ri";
import "../styles/Genre.scss";

const GENRE_MAP = {
  All: "movies",
  Drama: "drama",
  Adventure: "adventures",
  Action: "action",
  Music: "music",
  Comedy: "comedy",
};

const Genre = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [data, setData] = useState({
    movies: [],
    drama: [],
    adventures: [],
    action: [],
    music: [],
    comedy: [],
  });
  const [visibleCount, setvisibleCount] = useState(14);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [
          moviesRes,
          dramaRes,
          adventuresRes,
          actionRes,
          musicRes,
          comedyRes,
        ] = await Promise.all([
          fetch("https://c-flicks.onrender.com/all-movies"),
          fetch("https://c-flicks.onrender.com/all-movies/genre/Drama"),
          fetch("https://c-flicks.onrender.com/all-movies/genre/Adventure"),
          fetch("https://c-flicks.onrender.com/all-movies/genre/Action"),
          fetch("https://c-flicks.onrender.com/all-movies/genre/Music"),
          fetch("https://c-flicks.onrender.com/all-movies/genre/Comedy"),
        ]);

        const [movies, drama, adventures, action, music, comedy] =
          await Promise.all([
            moviesRes.json(),
            dramaRes.json(),
            adventuresRes.json(),
            actionRes.json(),
            musicRes.json(),
            comedyRes.json(),
          ]);

        setData({ movies, drama, adventures, action, music, comedy });
      } catch (err) {
        console.error("Failed to fetch endpoints", err);
      }
    };

    fetchAll();
  }, []);

  // Get movies for selected genre
  const getMoviesByGenre = () => {
    const key = GENRE_MAP[selectedGenre];
    return data[key] || [];
  };

  const genres = [
    { name: "All", icon: <RiMovie2AiFill /> },
    { name: "Drama", icon: <LiaNimblr /> },
    { name: "Adventure", icon: <RiMovie2AiFill /> },
    { name: "Action", icon: <LiaNimblr /> },
    { name: "Music", icon: <LiaNimblr /> },
    { name: "Comedy", icon: <GiLoveMystery /> },
  ];

  // Visibility of movies
  const showMore = () => {
    setvisibleCount((prev) => prev + 14);
  };

  const moviesToShow = getMoviesByGenre().slice(0, visibleCount);

  return (
    <>
      <div className="genre-div">
        {/* Mobile View */}
        <div className="mobile_view">
          <button
            className="genre_button_text"
            onClick={() => setdropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? "close genres" : "show genres"}
          </button>
          {dropdownOpen && (
            <ul>
              {genres.map((genre) => (
                <li
                  key={genre.name}
                  style={{
                    cursor: "pointer",
                    fontWeight: selectedGenre === genre.name ? "bold" : "normal",
                  }}
                  onClick={() => {
                    setSelectedGenre(genre.name);
                    setdropdownOpen(false);
                    setvisibleCount(14);
                  }}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Desktop View */}
        <div className="desktop_view">
          {genres.map((genre) => (
            <Button_genre
              key={genre.name}
              genre_img={genre.icon}
              genre_type={genre.name}
              clickme={
                () => {
                  setSelectedGenre(genre.name);
                  setvisibleCount(14);
              }
              }
              isActive={selectedGenre === genre.name}
            />
          ))}
        </div>
        <div className="movies_div">
          <div className="all_movies">
            {moviesToShow.length > 0 ? (
              moviesToShow.map((m) => (
                <div className="movieList" key={m.id}>
                  <img src={m.thumbnail} alt={`movie number ${m.id}`} />
                  <p>{m.movie_name}</p>
                </div>
              ))
            ) : (
              <p>Loading movies...</p>
            )}
          </div>
          {visibleCount < getMoviesByGenre().length && (
            <button className="showmore" onClick={showMore}>
              Show more
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Genre;