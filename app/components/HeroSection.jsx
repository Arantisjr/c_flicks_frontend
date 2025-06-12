'use client'

import React, { useState } from "react";
import "../styles/HeroSection.scss";
import Button from "./Button";
import Link from 'next/link'

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const signupUrl = `/signup?email=${encodeURIComponent(email)}`;

  // Simple email validation
  const isEmailValid = email.trim().length > 0 && /\S+@\S+\.\S+/.test(email);

  const handleClick = (e) => {
    if (!isEmailValid) {
      e.preventDefault();
      setError('Please input a correct email address.');
    } else {
      setError('');
    }
  };

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
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
        />
        <Link href={isEmailValid ? signupUrl : "#"} tabIndex={isEmailValid ? 0 : -1} onClick={handleClick}>
          <Button text='Get Started' disabled={!isEmailValid} />
        </Link>
        {error && <p style={{ color: 'red', margin: '0.5rem 0' }}>{error}</p>}
      </div>
    </>
  );
};

export default HeroSection;