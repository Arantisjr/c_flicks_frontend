'use client';


import "../styles/Join.scss";
import Reason_div from "./Reason_div";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import { useEffect } from "react";

const Join = () => {
  const t = useTranslations("Join");
  const reasons = t.raw("reasons");
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.join_container');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          
          entry.target.classList.add('show');
        } else {
          // entry.target.classList.remove('show');
        }
      });
    });      

    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="join_container">
        <h1 className="r_heading">{t("heading")}</h1>
        <div className="join_reasons">
          {reasons.map((reason, index) => (
            <Reason_div key={index} text={reason} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Join;
