"use client";
import React, { useState, useEffect } from "react";
import "../styles/Herosection2.scss";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("HeroSection2");
  

  return (
    <>
      <div className="Hero_main_container">
        <h1 className="hero_main_text">
         {t("section2_text")} 
        </h1>
      </div>
    </>
  );
};

export default HeroSection;
