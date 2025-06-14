"use client";
import React from "react";
import "../styles/QuestionSection.scss";
import Questions from "./Questions";

import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";

const QuestionSection = () => {
  const t = useTranslations("QuestionSection");
  const questions = t.raw("questions");
  const answers = t.raw("answers");
  return (
    <>
      <div className="Question_main_div">
        <h1>{t("heading")}</h1>
        {questions.map((question, index) => (
          <Questions key={index} question={question} answer={answers[index]} />
        ))}
      </div>
    </>
  );
};

export default QuestionSection;
