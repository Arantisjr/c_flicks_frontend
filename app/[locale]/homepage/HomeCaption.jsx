import React from 'react'
import '../styles/HomeCaption.scss';
import { useTranslations } from "next-intl";

const HomeCaption = () => {
  const t = useTranslations("Home_nav");
  
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