import React from 'react'
import Button_genre from './Button_genre'
import { GiLoveMystery } from "react-icons/gi";
import { LiaNimblr } from "react-icons/lia";
import { RiMovie2AiFill } from "react-icons/ri";
import '../styles/Genre.scss'

const Genre = () => {
  return (
    <>
    <div className="genre-div" >
        <Button_genre genre_img ={<LiaNimblr />} genre_type= 'Biography'  />
        <Button_genre genre_img ={<RiMovie2AiFill />} genre_type= 'Adverture'  />
        <Button_genre genre_img ={<LiaNimblr />} genre_type= 'Action'  />
        <Button_genre genre_img ={<LiaNimblr />} genre_type= 'Music'  />
        
        <Button_genre genre_img ={<GiLoveMystery />} genre_type= 'Anime'  />
    </div>
    </>
  )
}

export default Genre