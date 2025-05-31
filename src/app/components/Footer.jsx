import React from 'react'
import '../styles/Footer.scss'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="main_footer">
        <div className="left_link">
            <ul>
                <li className='company'> <Link href = '/'> <a>Company</a> </Link> </li>

               <li> <Link href = '/'> <a>About</a> </Link> </li>
                <li> <Link href = '/'> <a>Start Watching</a> </Link> </li>
                <li> <Link href = '/'> <a>Support</a> </Link> </li>
            </ul>
        </div>
        <div className="right_link">
            <ul>
                <li> <Link href = '/'> <a>connect</a> </Link> </li>
                <li> <Link href = '/'> <a href="">Contact us</a></Link> </li>
                <div className="socials">
                    <FaFacebookF />
                    <FaXTwitter />
                    <MdOutlineAttachEmail />
                    <FaLinkedin />

                </div>
                &copy; <span>Copyright {new Date().getFullYear()}</span>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer