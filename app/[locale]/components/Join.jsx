import React from "react";
import "../styles/Join.scss";
import Reason_div from "./Reason_div";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";

const Join = () => {
  const t = useTranslations("Join");
  const reasons = t.raw("reasons");
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
