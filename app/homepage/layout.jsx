import Footer from "../components/Footer";
import "../globals.scss";
import Home_nav from "./Home_nav";

 



export const metadata = {
  title: "C-Flicks",
  description: "C-flicks is a movie app for Cameroonians, providing a platform to discover and enjoy local and international films.",
  keywords: "movies, Cameroonian films, film discovery, local cinema, international films, C-Flicks",
};

export default async function RootLayout({ children }) {
  
  
  
  return (

    <html lang="en">
      <body>
        <nav>
          <Home_nav/>
        </nav>
        {children}
         <footer className="footer">
        <Footer />
      </footer>
      </body>
    </html>
  );
}
