'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../images/C-flicks.jpg'
import Button from './Button'
import '../styles/NavBar.scss'
import { FaChevronDown } from "react-icons/fa";
import Link from 'next/link'



const NavBar = () => {
  return (
    <>
    <div className="NavBarMainContainer">
            <Image
             src={logo}
             alt='logo image'
             width={100}
             height={40}
            />
            <div className="Nav_left_section">
               
                    <p className='nav_lang'>English <FaChevronDown /></p>
              <Link href ='/homepage' >      <Button text= 'Sign up' /></Link>

            </div>

    </div>
    </>
  )
}

export default NavBar