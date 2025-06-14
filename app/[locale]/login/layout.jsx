
import '../globals.scss';
export const metadata = {
  title: "C-Flicks",
  description: "Login to C-flicks to enjoy the best movies and series",     
};

export default async function RootLayout({ children }) {
  
  
  
  return (

    <html lang="en">
      <body>
        {children}
        
      </body>
    </html>
  );
}