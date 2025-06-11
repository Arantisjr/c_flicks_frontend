import '../globals.scss'
import SignInForm from './SignInForm';

export default function Home() {
  return (
    <>
    <nav>
      <h1 className="Slogo_name"> C-FLICKS </h1>
    </nav>
    <main>
        <SignInForm />
    </main>
    <footer>
      <p className="login_footer">© 2025 C-Flicks. All rights reserved.</p>
    </footer>
    </>
  );
}


