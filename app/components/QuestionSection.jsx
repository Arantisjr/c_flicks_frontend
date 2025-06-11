'use client'
import React from 'react'
import '../styles/QuestionSection.scss'
import Questions from './Questions'

const QuestionSection = () => {
  return (
    <>
    <div className="Question_main_div">
        <Questions 
        question={'Where Can I Watch C-Flicks Movies?'}
         answer='You can watch C-flicks movies directly on our platform
          anytime and anywhere. Whether your 
          are on a Laptop, Tablet or Mobile device' />
         <Questions 
        question={'What can i watch on C-flicks?'}
         answer='C-flicks offers a vaibriant collection of Cameroonians
          movies that celebrate our culture, 
          creativity and story telling heritage' />
         <Questions 
        question={'Is C-flicks free?'}
         answer='Yes!, C-flicks is free, Watch your favourite Cameroonian movies with no stress' />
         <Questions 
        question={'Why use C-flicks?'}
         answer='C-flicks provides the best Cameroonian Cultural movies for free, No Subscription required , ' />
         <Questions 
        question={'Is there a Mobile or Desktop app for C-flicks? '}
         answer='No!, not yet, there is no mobile or Desktop app for C-flicks but will be in future' />
         <Questions 
        question={'Who can use C-flicks?'}
         answer='Any cameroonian or an outsider who want to enjoy Cameroonian movies at it finest' />
    </div>
    
    </>
  )
}

export default QuestionSection