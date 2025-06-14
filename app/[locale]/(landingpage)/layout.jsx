import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../globals.scss";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../../i18n/routing";

export const metadata = {
  title: "C-Flicks",
  description: "A movie app for Cameroonians",
};

export default async function RootLayout({ children, params }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <nav>
            <NavBar />
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
