import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleLoginClick = () => {
    setShowSignIn(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  };

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" className="h-20" alt="Hirrd Logo" />
        </Link>

        <SignedOut>
          <Button variant="outline" onClick={handleLoginClick}>
            Login
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>

      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn />
        </div>
      )}
    </>
  );
};

export default Header;
