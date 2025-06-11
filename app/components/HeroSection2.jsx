'use client';
import React, { useState, useEffect } from "react";
import "../styles/Herosection2.scss";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  // Fetch movie as user types (debounced)
  useEffect(() => {
    if (!search.trim()) {
      setMovie(null);
      setError("");
      return;
    }
    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(`https://c-flicks.onrender.com/all-movies/search/${encodeURIComponent(search)}`);
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

  return (
    <>
      <div className="Hero_main_container">
        <h1 className="hero_main_text">
        Unlimited Cameroon movies, TV, shows, and more. Watch anywhere, anytime
        </h1>
        <form onSubmit={handleSearch} style={{ position: "relative" }}>
          <input
            type="text"
            className="hero_email"
            placeholder='Search movies'
            value={search}
            onChange={e => setSearch(e.target.value)}
            autoComplete="off"
          />
          {search && (
            <span
              className="clear-search"
              onClick={handleClear}
              aria-label='Clear search'
              tabIndex={0}
              role="button"
            >
              <FaTimes />
            </span>
          )}
          <Button text='Search' />
        </form>
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
        {movie && (
          <div className="search-result">
            <h2>{movie.movie_name}</h2>
            <img src={movie.thumbnail} alt={movie.movie_name} style={{ width: "150px" }} />
            <p>{movie.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default HeroSection;