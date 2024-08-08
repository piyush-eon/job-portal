import { useUser } from "@clerk/clerk-react";

const MyJobs = () => {
  const { user } = useUser();
  return (
    <div>
      <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
        {user?.unsafeMetadata?.role === "candidate"
          ? "My Applications"
          : "My Jobs"}
      </h1>
    </div>
  );
};

export default MyJobs;
