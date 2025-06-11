import LoginForm from "./LoginForm";
import '../globals.scss'
import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav>
      <h1 className="Slogo_name"> <Link href='/'>
       C-FLICKS 
      </Link> 
       </h1>
    </nav>
    <LoginForm />
    <footer>
      <p className="login_footer">© 2025 C-Flicks. All rights reserved.</p>
    </footer>
    </>
  );
}