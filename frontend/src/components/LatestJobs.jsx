import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// const jobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  const {allJobs} = useSelector(store => store.job);
  
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6838C2]">Latest & Top </span>Job Openings
      </h1>
      {/* job mutiple card */}

      <div className="grid grid-cols-3 gap-5 my-5">
        { allJobs && allJobs.length<=0 ? <span>No Job Available</span> :  allJobs.slice(0,6).map((job) => (
            <LatestJobCards  key={job._id} job={job}/>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
