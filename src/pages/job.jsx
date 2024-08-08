import { getSingleJob } from "@/api/apiJobs";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import MDEditor from "@uiw/react-md-editor";
import { Briefcase, DoorClosed, DoorOpen, MapPinIcon } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const JobPage = () => {
  // - Can show a status bar for candidates ( if closed or not)
  // - CTA will contain "Apply" or "Applies" for candidates and "Show Candidates" for recruiter
  // - Edit button for recuiter who posted the job
  // - Wishlist button for Candidate

  const { id } = useParams();
  const { isLoaded, user } = useUser();

  const {
    loading: loadingJob,
    data: job,
    fn: fnJob,
  } = useFetch(getSingleJob, {
    job_id: id,
  });

  useEffect(() => {
    if (isLoaded) fnJob();
  }, [isLoaded]);

  if (!isLoaded || loadingJob) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="flex flex-col gap-8 mt-5">
      <div className="flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
        <h1 className="gradient-title font-extrabold pb-3 text-4xl sm:text-6xl">
          {job?.title}
        </h1>
        <img src={job?.company?.logo_url} className="h-12" alt={job?.title} />
      </div>

      <div className="flex justify-between ">
        <div className="flex gap-2">
          <MapPinIcon /> {job?.location}
        </div>
        <div className="flex gap-2">
          <Briefcase /> {job?.applications?.length} Applicants
        </div>
        <div className="flex gap-2">
          {job?.isOpen ? (
            <>
              <DoorOpen /> Open
            </>
          ) : (
            <>
              <DoorClosed /> Closed
            </>
          )}
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold">About the job</h2>
      <p className="sm:text-lg">{job?.description}</p>

      <h2 className="text-2xl sm:text-3xl font-bold">
        What we are looking for
      </h2>
      <MDEditor.Markdown
        source={job?.requirements}
        className="bg-transparent sm:text-lg" // add global ul styles
      />
      <div className="flex flex-col gap-2">
        <Button
          size="lg"
          variant={job?.isOpen ? "blue" : "destructive"}
          disabled={!job?.isOpen || job?.recruiter_id === user?.id}
        >
          {job?.isOpen ? "Apply" : "Closed"}
        </Button>
        {job?.recruiter_id === user?.id && (
          <Link to={`/edit-job/${id}`}>
            <Button
              size="lg"
              className="w-full"
              variant="destructive"
              disabled={!job?.isOpen}
            >
              Edit
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default JobPage;
