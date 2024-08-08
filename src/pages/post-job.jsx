import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const PostJob = () => {
  // use select component for location
  // console.log(State.getStatesOfCountry("IN"));
  const { user } = useUser();

  if (user?.unsafeMetadata?.role !== "recruiter") {
    return <Navigate to="/jobs" />;
  }

  return (
    <div>
      PostJob
      {/* <MDEditor preview={false} /> */}
    </div>
  );
};

export default PostJob;
