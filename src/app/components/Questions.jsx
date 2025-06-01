'use client';
import React, { useState, useRef, useEffect } from 'react';
import '../styles/Questions.scss';
import { FaPlus, FaMinus } from "react-icons/fa";

const Questions = ({ question, answer }) => {
  const [showText, setShowText] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  const toggleText = () => {
    setShowText(prev => !prev);
  };

  useEffect(() => {
    if (showText && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [showText]);

  return (
    <div className="main_questions">
      <div className="question_q" onClick={toggleText}>
        <span>{question}</span>
        {showText ? <FaMinus /> : <FaPlus />}
      </div>
      <div
        ref={contentRef}
        className={`answers_wrapper ${showText ? 'expanded' : ''}`}
        style={{ maxHeight: height }}
      >
        <div className="answers">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Questions;
