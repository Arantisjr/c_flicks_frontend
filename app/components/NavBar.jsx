'use client'
import React, { useEffect, useState } from 'react';
import Button from "./Button";
import "../styles/NavBar.scss";
import Link from "next/link";
import Language from "./Language";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to your preferred scroll threshold
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`NavBarMainContainer ${scrolled ? "scrolled" : ""}`}>
        <p className="logo_name"> C-FLICKS </p>
        <div className="Nav_left_section">
         <Language />
          <Link href="/login">
            {" "}
            <Button text="Login" />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
