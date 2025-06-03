import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import "../app/globals.scss";
import Slider_component from "./components/Slider_component";
import Join from "./components/Join";
import QuestionSection from "./components/QuestionSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <nav className="Navbar">
        <NavBar />
        <HeroSection />
      </nav>
      <hr className="breakline" />
      <main className="main">
        <Slider_component />
        <Join />
        <QuestionSection />
      </main>
    </div>
  );
}
