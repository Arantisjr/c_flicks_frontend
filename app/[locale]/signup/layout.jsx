import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../../i18n/routing";
import '../globals.scss';
export const metadata = {
  title: "C-Flicks",
  description: "Signup to C-flicks to enjoy the best movies and series",     
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  } 
  
  
  return (

    <html lang="en">
      <NextIntlClientProvider >
      <body>
        {children}
        
      </body>
      </NextIntlClientProvider>
    </html>
  );
}