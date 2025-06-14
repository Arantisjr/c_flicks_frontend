"use client";
import React from "react";
import "../styles/Footer.scss";
// import Link from "next/link";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const t = useTranslations("Footer");

  const headings = t.raw("headings");
  const company = t.raw("company");
  const connect = t.raw("connect");
  const legal = t.raw("legal");

  console.log(headings);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="main_footer">
        <div className="left_link">
          <ul>
            <li className="company">
              {" "}
              <Link href="/"> {headings[0]} </Link>{" "}
            </li>

            <li>
              {" "}
              <Link href="/"> {company[0]} </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> {company[1]} </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> {company[2]} </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="right_link">
          <ul>
            <li className="company">
              {" "}
              <Link href="/"> {headings[1]} </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> {connect[0]}</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> {connect[1]}</Link>{" "}
            </li>
            <div className="socials">
              <FaFacebookF />
              <FaXTwitter />
              <MdOutlineAttachEmail />
              <FaLinkedin />
            </div>
          </ul>
        </div>
        <div className="left_link">
          <ul>
            <li className="company"> {headings[2]} </li>

            <li>
              {" "}
              <Link href="/"> {legal[0]} </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> {legal[1]} </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> {legal[2]} </Link>{" "}
            </li>
            <li>
              {" "}
              &copy; <span>Copyright {new Date().getFullYear()}</span>
            </li>
          </ul>
        </div>
        <button onClick={scrollToTop} className="top_button">
          Go to top
        </button>
      </div>
    </>
  );
};

export default Footer;
