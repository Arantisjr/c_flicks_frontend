"use client";
import React from "react";
import { useState, useEffect } from "react";
import Button_genre from "./Button_genre";
import { GiLoveMystery } from "react-icons/gi";
import { LiaNimblr } from "react-icons/lia";
import { RiMovie2AiFill } from "react-icons/ri";
import "../styles/Genre.scss";

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
  const[visibleCount, setvisibleCount] = useState(14);

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
          fetch("https://c-flicks.onrender.com/all-movies/Drama"),
          fetch("https://c-flicks.onrender.com/all-movies/Adventures"),
          fetch("https://c-flicks.onrender.com/all-movies/Action"),
          fetch("https://c-flicks.onrender.com/all-movies/Music"),
          fetch("https://c-flicks.onrender.com/all-movies/Comedy"),
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
        console.log(data);
        
      } catch (err) {
        console.error("Failed to fetch endpoints", err);
      }
    };

    fetchAll();
  }, []);

  // Now it's safe to access these
  const allMovies = data.movies;
  const dramaGenre = data.drama;
  const adventuresGenre = data.adventures;
  const actionGenre = data.action;
  const musicGenre = data.music;
  const comedyGenre = data.comedy;
  const genres = ["Drama", "Adventure", "Action", "Music", "Comedy"];

  //visibility of movies
  const showMore = () =>{
    setvisibleCount((prev) => prev + 14);
  }
  const visibleMovies = allMovies.slice(0, visibleCount);
  return (
    <>
      <div className="genre-div">
        <div className="mobile_view">
          <button onClick={() => setdropdownOpen(!dropdownOpen)}>
            {dropdownOpen ? "close genres" : "show genres"}
          </button>
          {dropdownOpen && (
            <ul>
              {genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="desktop_view">
          <Button_genre genre_img={<LiaNimblr />} genre_type="Drama" />
          <Button_genre genre_img={<RiMovie2AiFill />} genre_type="Adverture" />
          <Button_genre genre_img={<LiaNimblr />} genre_type="Action" />
          <Button_genre genre_img={<LiaNimblr />} genre_type="Music" />
          <Button_genre genre_img={<GiLoveMystery />} genre_type="Comedy" />
        </div>
        <div className="movies_div">
          <div className="all_movies">
            {allMovies.length > 0 ? (
              visibleMovies.map((m) => (
                <div className="movieList" key={m.id}>
                  <img src={m.thumbnail} alt={`movie number ${m.id}`} />
                  <p>{m.movie_name}</p>
                </div>
              ))
            ) : (
              <p>Loading movies...</p>
            )}
          </div>
          {
            visibleCount < allMovies.length && (

              <button className="showmore" onClick={showMore}>Show more</button>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Genre;
