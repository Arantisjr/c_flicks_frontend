import HeroSection2 from "../components/HeroSection2";
import '../styles/page.scss'
import Genre from "./Genre";
import HomeCaption from "./HomeCaption";


export default function Home() {
  return (
    <div >
      <nav className="Navbar">
        <HeroSection2 />
      </nav>
      <hr className="breakline"/>

      <h1 className="watch">Watch your Favorite Cameroonian movies</h1>

      <main className="main">
        <Genre />
      </main>
        <HomeCaption />
     
    </div>
  );
}