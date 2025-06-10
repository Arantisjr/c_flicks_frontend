'use client'
import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import "../styles/NavBar.scss";
import Link from "next/link";
import Language from "./Language";

const NavBar = () => {




  return (
    <>
      <div className="NavBarMainContainer">
        <p className="logo_name"> C-FLICKS </p>
        <div className="Nav_left_section">
         <Language />
          <Link href="/homepage">
            {" "}
            <Button text="Sign up" />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
