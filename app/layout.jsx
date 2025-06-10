import { NextIntlClientProvider } from "next-intl";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.scss";
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
 



export const metadata = {
  title: "C-Flicks",
  description: "A movie app for Cameroonians",
};

export default async function RootLayout({ children }) {
  
  const messages = await getMessages();
    const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  eturn (
    <NextIntlClientProvider messages={messages}>

    <html lang="en">
      <body>
        <nav>
          <NavBar />
        </nav>
        {children}
         <footer className="footer">
        <Footer />
      </footer>
      </body>
    </html>
    </NextIntlClientProvider>
  );
}
