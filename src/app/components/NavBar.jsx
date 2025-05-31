import React from 'react'
import Image from 'next/image'
import logo from '../images/C-flicks.png'
import Button from './Button'
import '../styles/NavBar.scss'
import { FaChevronDown } from "react-icons/fa";



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
                    <Button text= 'Sign up' />

            </div>

    </div>
    </>
  )
}

export default NavBar