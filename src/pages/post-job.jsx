import { State } from "country-state-city";

const PostJob = () => {
  // use select component for location
  console.log(State.getStatesOfCountry("IN"));

  return <div>PostJob</div>;
};

export default PostJob;
