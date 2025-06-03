"use client";
import React from "react";
import "../styles/Footer.scss";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="main_footer">
        <div className="left_link">
          <ul>
            <li className="company">
              {" "}
              <Link href="/"> Company </Link>{" "}
            </li>

            <li>
              {" "}
              <Link href="/"> About </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> Start Watching </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> Support </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="right_link">
          <ul>
            <li className="company">
              {" "}
              <Link href="/"> connect </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> Contact us</Link>{" "}
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
            <li className="company"> Legal </li>

            <li>
              {" "}
              <Link href="/"> Terms and conditions </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/"> Privacy </Link>{" "}
            </li>
            <li>
              {" "}
              &copy; <span>Copyright {new Date().getFullYear()}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
