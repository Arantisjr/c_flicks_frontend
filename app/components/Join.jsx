import React from "react";
import "../styles/Join.scss";
import Reason_div from "./Reason_div";

const Join = () => {
  return (
    <>
    <div className="join_container">
    <h1 className='r_heading'>More reasons to join</h1>
    <div className="join_reasons">
      <Reason_div text="C-Flicks is a vibrant
       digital platform dedicated to showcasing the rich 
       and diverse culture of Cameroon through the power of film"
        />
         <Reason_div text="C-Flicks is a vibrant
       digital platform dedicated to showcasing the rich 
       and diverse culture of Cameroon through the power of film"
        />
         <Reason_div text="C-Flicks is a vibrant
       digital platform dedicated to showcasing the rich 
       and diverse culture of Cameroon through the power of film"
        />
         <Reason_div text="C-Flicks is a vibrant
       digital platform dedicated to showcasing the rich 
       and diverse culture of Cameroon through the power of film"
        />
        </div>
        </div>
    </>
  );
};

export default Join;
