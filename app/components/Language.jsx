'use client'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Language = () => {
  return (
   <>
    <div className="nav_lang">
            English
             <FaChevronDown /> 
            <div     >
              <ul className="nav_links">
                <li>French</li>
                <li>Pidgin</li>
              </ul>
            </div>
          </div></>
  )
}

export default Language