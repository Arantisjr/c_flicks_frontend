import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../globals.scss";

 



export const metadata = {
  title: "C-Flicks",
  description: "A movie app for Cameroonians",
};

export default async function RootLayout({ children }) {
  
  
  
  return (

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
  );
}
