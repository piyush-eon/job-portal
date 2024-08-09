/* eslint-disable react/prop-types */
import { Heart, MapPinIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/use-fetch";
import { saveJob } from "@/api/apiJobs";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const JobCard = ({ job }) => {
  const [saved, setSaved] = useState(job.saved.length > 0);

  const { user } = useUser();

  const {
    loading: loadingSavedJob,
    data: savedJob,
    fn: fnSavedJob,
  } = useFetch(saveJob, {
    alreadySaved: saved,
  });

  const handleSaveJob = async () => {
    await fnSavedJob({
      user_id: user.id,
      job_id: job.id,
    });
  };

  useEffect(() => {
    if (savedJob !== undefined) setSaved(savedJob?.length > 0);
  }, [savedJob]);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="font-bold">{job.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between">
          <img src={job.company.logo_url} className="h-6" />
          <div className="flex gap-2 items-center">
            <MapPinIcon size={15} /> {job.location}
          </div>
        </div>
        <hr />
        {job.description.substring(0, job.description.indexOf("."))}.
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link to={`/job/${job.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">
            More Details
          </Button>
        </Link>
        <Button
          variant="outline"
          className="w-15"
          onClick={handleSaveJob}
          disabled={loadingSavedJob}
        >
          {saved ? (
            <Heart size={20} fill="red" stroke="red" />
          ) : (
            <Heart size={20} />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
