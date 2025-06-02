'use client'
import React from 'react'
import Button from './Button'
import '../styles/NavBar.scss'
import { FaChevronDown } from "react-icons/fa";
import Link from 'next/link'



const NavBar = () => {
  return (
    <>
    <div className="NavBarMainContainer">
    <p className='logo_name'> C-FLICKS </p>
            <div className="Nav_left_section">
                    <p className='nav_lang'>English <FaChevronDown /></p>
              <Link href ='/homepage' > <Button text= 'Sign up' /> </Link>

            </div>

    </div>
    </>
  )
}

export default NavBar