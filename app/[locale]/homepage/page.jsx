import HeroSection2 from "../components/HeroSection2";
import "../styles/page.scss";
import Genre from "./Genre";
import HomeCaption from "./HomeCaption";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("page_for_homepage");
  return (
    <div>
      <nav className="Navbar">
        <HeroSection2 />
      </nav>
      <hr className="breakline" />

      <h1 className="watch">{t("page_text")}</h1>

      <main className="main">
        <Genre />
      </main>
      <HomeCaption />
    </div>
  );
}
