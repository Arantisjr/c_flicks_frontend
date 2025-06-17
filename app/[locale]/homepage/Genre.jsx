"use client";
import React, { useState, useEffect } from "react";
import Button_genre from "./Button_genre";
import { GiLoveMystery } from "react-icons/gi";
import { LiaNimblr } from "react-icons/lia";
import { RiMovie2AiFill } from "react-icons/ri";
import "../styles/Genre.scss";
import { FaTimes } from "react-icons/fa";
import Button from "../components/Button";
import { useTranslations } from "next-intl";



const GENRE_MAP = {
  All: "movies",
  Drama: "drama",
  Adventure: "adventures",
  Action: "action",
  Music: "music",
  Comedy: "comedy",
};

const Genre = () => {

  const t = useTranslations("Genre");
const genre_types = t.raw("genre_types");
const some_other_texts = t.raw("some_other_texts");
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
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

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

  // Geting movies for selected genre
  const getMoviesByGenre = () => {
    const key = GENRE_MAP[selectedGenre];
    return data[key] || [];
  };

  const genres = [
    { name: genre_types[0], icon: <RiMovie2AiFill /> },
    { name: genre_types[1], icon: <LiaNimblr /> },
    { name: genre_types[2], icon: <RiMovie2AiFill /> },
    { name: genre_types[3], icon: <LiaNimblr /> },
    { name: genre_types[4], icon: <LiaNimblr /> },
    { name: genre_types[5], icon: <GiLoveMystery /> },
  ];

  // Visibility of movies
  const showMore = () => {
    setvisibleCount((prev) => prev + 14);
  };

  const moviesToShow = getMoviesByGenre().slice(0, visibleCount);

  //search movies
  useEffect(() => {
    if (!search.trim()) {
      setMovie(null);
      setError("");
      return;
    }
    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://c-flicks.onrender.com/all-movies/search/${encodeURIComponent(
            search
          )}`
        );
        if (!res.ok) {
          setMovie(null);
          setError("Movie not found.");
          return;
        }
        const data = await res.json();
        if (data && data.length > 0) {
          setMovie(data[0]);
          setError("");
        } else {
          setMovie(null);
          setError("Movie not found.");
        }
      } catch {
        setMovie(null);
        setError("An error occurred. Please try again.");
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(timeout);
  }, [search]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // No need to fetch here, already handled by useEffect
  };

  const handleClear = () => {
    setSearch("");
    setMovie(null);
    setError("");
  };
  //animation

    useEffect(() => {
    const hiddenElements = document.querySelectorAll('.mobile_view, .desktop_view');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          
          entry.target.classList.add('show');
        } else {
          // entry.target.classList.remove('show');
        }
      });
    });      

    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="genre-div">
        {/* Mobile View */}
        <div className="mobile_view">
          <button
            className="genre_button_text"
            onClick={() => setdropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? some_other_texts[0] : some_other_texts[1]}
          </button>
          {dropdownOpen && (
            <ul>
              {genres.map((genre) => (
                <li
                  key={genre.name}
                  style={{
                    cursor: "pointer",
                    fontWeight:
                      selectedGenre === genre.name ? "bold" : "normal",
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
              clickme={() => {
                setSelectedGenre(genre.name);
                setvisibleCount(14);
              }}
              isActive={selectedGenre === genre.name}
            />
          ))}
        </div>
        <form
          className="search-form"
          onSubmit={handleSearch}
          style={{ position: "relative" }}
        >
          <input
            type="text"
            className="hero_email"
            placeholder={some_other_texts[5]}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
          />
          {search && (
            <span
              className="clear-search"
              onClick={handleClear}
              aria-label="Clear search"
              tabIndex={0}
              role="button"
            >
              <FaTimes />
            </span>
          )}
          <Button text={some_other_texts[2]} />
        </form>
        <div className="movies_div">
          <div className="all_movies">
            {/* Show search result if searching, otherwise show all/genre movies */}
            {search.trim() ? (
              <>
                {error && (
                  <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
                )}
                {movie && (
                  <div className="search-result">
                    <h2>{movie.movie_name}</h2>
                    <img
                      src={movie.thumbnail}
                      alt={movie.movie_name}
                      style={{ width: "150px" }}
                    />
                    <p>{movie.description}</p>
                  </div>
                )}
              </>
            ) : moviesToShow.length > 0 ? (
              moviesToShow.map((m) => (
                <div className="movieList" key={m.id}>
                  <img src={m.thumbnail} alt={`movie number ${m.id}`} />
                  <p>{m.movie_name}</p>
                </div>
              ))
            ) : (
              <p>{some_other_texts[3]}</p>
            )}
          </div>
          {/* Only show Show more if not searching */}
          {!search.trim() && visibleCount < getMoviesByGenre().length && (
            <button className="showmore" onClick={showMore}>
              {some_other_texts[4]}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Genre;
