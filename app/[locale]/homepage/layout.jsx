import Footer from "../components/Footer";
import "../globals.scss";
import Home_nav from "./Home_nav";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../../i18n/routing";

export const metadata = {
  title: "C-Flicks",
  description:
    "C-flicks is a movie app for Cameroonians, providing a platform to discover and enjoy local and international films.",
  keywords:
    "movies, Cameroonian films, film discovery, local cinema, international films, C-Flicks",
};

export default async function RootLayout({ children, params }) {
    const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="en">
      <body>
         <NextIntlClientProvider>
        <nav>
          <Home_nav />
        </nav>
        {children}
        <footer className="footer">
          <Footer />
        </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
