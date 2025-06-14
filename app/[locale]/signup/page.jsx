import LoginForm from "./LoginForm";
import { Suspense } from "react";
import '../globals.scss'
import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav>
      <h1 className="Slogo_name"> 
        <Link className="Link" href='/'>
       C-FLICKS 
      </Link> 
       </h1>
    </nav>
     <Suspense fallback={<div>Loading signup form...</div>}>
     
    <LoginForm />
     </Suspense>
    <footer>
      <p className="login_footer">© 2025 C-Flicks. All rights reserved.</p>
    </footer>
    </>
  );
}