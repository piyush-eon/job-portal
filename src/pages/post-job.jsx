import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const PostJob = () => {
  const { user } = useUser();

  if (user?.unsafeMetadata?.role !== "recruiter") {
    return <Navigate to="/jobs" />;
  }

  // title
  // description
  // requirents - MDEditor
  // location - Select - State.getStatesOfCountry("IN"));
  // Company - Select
  // Switch for open / close

  return (
    <div>
      PostJob
      {/* <MDEditor preview={false} /> */}
    </div>
  );
};

export default PostJob;
