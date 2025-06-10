import React from "react";
import "../styles/Herosection2.scss";
import Button from "./Button";

const HeroSection = () => {
  return (
    <>
      <div className="Hero_main_container">
        <h1 className="hero_main_text">
          Unlimited Cameroon movies, TV, shows, and more
        </h1>
        <input
          type="email"
          className="hero_email"
          placeholder="Search movies"
        />
        <Button text='Search' />
      </div>
    </>
  );
};

export default HeroSection;
