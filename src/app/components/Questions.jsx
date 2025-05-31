import React, { useState } from 'react'
import '../styles/Questions.scss'
import { FaPlus } from "react-icons/fa";

const Questions = ({question, answer}) => {
    const[showtext, setShowText] = useState(false)
    function showText(){
        setShowText(prev => !prev);

    }
  return (
    <>
    <div className="main_questions">
    <div className="question_q">
        {question}
        <FaPlus onClick={showText}/>
    </div>
    {showtext && ( <div className="anwers">
        {answer}
    </div>)

    }
   
    </div>
    </>
  )
}

export default Questions