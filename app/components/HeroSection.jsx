'use client'

import React, {useState} from "react";
import "../styles/HeroSection.scss";
import Button from "./Button";
import Link from 'next/link'

const HeroSection = () => {
  const[email, setEmail] = useState('');
  const signupUrl = ` /signup?email=${encodeURIComponent(email)}`;

  const handleSubmit = () => {
    console.log("Email: ", email);
  }
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
          onChange={(e) => setEmail(e.target.value)}
        />
    <Link href ={signupUrl} > <Button text='Get Started' /></Link>
      </div>
    </>
  );
};

export default HeroSection;
