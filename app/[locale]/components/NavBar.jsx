"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import "../styles/NavBar.scss";
// import Link from "next/link";
import { Link } from "../../../i18n/navigation";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

import Language from "./LanguageSwitcher";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { locale } = useParams();

  const t = useTranslations("NavBar");

  // alert(locale);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to your preferred scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`NavBarMainContainer ${scrolled ? "scrolled" : ""}`}>
        <p className="logo_name"> C-FLICKS </p>
        <div className="Nav_left_section">
          <Language currentLocale={locale} />
          <Link href="/login">
            {" "}
            <Button text={t("button")} />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
