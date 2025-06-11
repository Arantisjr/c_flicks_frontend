
import HeroSection from "../components/HeroSection";
import "../globals.scss";
import Slider_component from "../components/Slider_component";
import Join from "../components/Join";
import QuestionSection from "../components/QuestionSection";
import { useTranslations } from 'next-intl';


export default function Home() {
  const t = useTranslations();

  return (
    <div>
      <nav className="Navbar">
        {/* <NavBar /> */}
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
