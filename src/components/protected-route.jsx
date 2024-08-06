/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname } = useLocation();

  if (!isLoaded)
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;

  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  if (!user?.unsafeMetadata?.role && pathname !== "/onboarding")
    return <Navigate to="/onboarding" />;

  return children;
};

export default ProtectedRoute;
