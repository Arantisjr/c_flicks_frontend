'use client'
import Button from "../components/Button";
import "../styles/NavBar.scss";
import Link from "next/link";
import Language from "../components/Language";
const Home_nav = () => {
  return (
      <>
      <div className="NavBarMainContainer">
        <p className="logo_name"> C-FLICKS </p>
        <div className="Nav_left_section">
         <Language />
          <Link href="/homepage">
            {" "}
            <Button text="Sign out" />{" "}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home_nav