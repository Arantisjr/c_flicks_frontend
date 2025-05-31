import HeroSection2 from "../components/HeroSection2";
import NavBar from "../components/NavBar";
import '../styles/page.scss'
import Genre from "./Genre";


export default function Home() {
  return (
    <div >
      <nav className="Navbar">
        <NavBar />
        <HeroSection2 />
      </nav>
      <hr className="breakline"/>

      <h1 className="watch">Watch your Favorite Cameroonian movies</h1>

      <main className="main">
        <Genre />
  
      </main>
     
    </div>
  );
}