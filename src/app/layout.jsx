import Footer from "./components/Footer";
import "./globals.scss";



export const metadata = {
  title: "C-Flicks",
  description: "A movie app for Cameroonians",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
         <footer className="footer">
        <Footer />
      </footer>
      </body>
    </html>
  );
}
