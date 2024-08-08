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

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold">{job.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            {/* <BriefcaseBusiness size={16} /> {job.company.name} */}
            <img src={job.company.logo_url} className="h-6" />
          </div>
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
        <Button variant="outline" className="w-15">
          {job.saved.length > 0 ? (
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
