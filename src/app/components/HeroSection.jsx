import React from "react";
import "../styles/HeroSection.scss";
import Button from "./Button";

const HeroSection = () => {
  return (
    <>
      <div className="Hero_main_container">
        <h1 className="hero_main_text">
          Unlimited movies, TV, shows, and more
        </h1>
        <p className="hero_ready">Ready to watch? enter your email address</p>
        <input
          type="email"
          className="hero_email"
          placeholder="Email address"
        />
        <Button text='Get Started' />
      </div>
    </>
  );
};

export default HeroSection;
