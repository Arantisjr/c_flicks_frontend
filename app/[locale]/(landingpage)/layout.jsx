import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../globals.scss";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export const metadata = {
  title: "C-Flicks",
  description: "A movie app for Cameroonians",
};

export default async function RootLayout({ children, params }) {
  let messages;
  try {
    messages = (await import(`../../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
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