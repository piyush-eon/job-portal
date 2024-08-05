import {
  SignedIn,
  SignedOut,
  SignIn,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { userId, getToken } = useAuth();
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    const test = async () => {
      const token = await getToken({ template: "supabase" });
      console.log(user, token, userId);
    };

    test();
  }, [isSignedIn]);

  return (
    <header>
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <button
        onClick={async () => {
          await user
            .update({ unsafeMetadata: { role: "recruiter" } })
            .then((res) => console.log(res));
        }}
      >
        recruiter
      </button>
    </header>
  );
}

export default App;
