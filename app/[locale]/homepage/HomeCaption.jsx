'use client';

import React from 'react'
import '../styles/HomeCaption.scss';
import { useTranslations } from "next-intl";
import { useEffect } from 'react';

const HomeCaption = () => {
  const t = useTranslations("Home_nav");
  //animation
    useEffect(() => {
      const hiddenElements = document.querySelectorAll('.caption_div');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            
            entry.target.classList.add('show');
            // Unobserve after first intersection so it animates only once
          observerInstance.unobserve(entry.target);
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
   <div className="caption_div">
    <p className='caption_text'>
        {t("caption_text")}
    </p>
        <span>{t("other_text")}</span>
    <button className='captionAbout'>{t("about_text")}</button>
   </div>
   </>
  )
}

export default HomeCaption