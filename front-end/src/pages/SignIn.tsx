import { Navbar } from "../components/Layout/Navbar";
import { Footer } from "../components/Layout/Footer";
import { SignInForm } from "../components/SignInForm";

export const SignIn = () => {
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </>
  );
};