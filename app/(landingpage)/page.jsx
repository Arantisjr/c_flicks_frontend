
import HeroSection from "../components/HeroSection";
import "../globals.scss";
import Slider_component from "../components/Slider_component";
import Join from "../components/Join";
import QuestionSection from "../components/QuestionSection";

export default function Home() {
  return (
    <div>
      <nav className="Navbar">
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
