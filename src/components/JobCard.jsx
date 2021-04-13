import React from "react";

const JobCard = () => {
  return (
    <div className="bg-white w-full rounded-4 p-3 flex space-x-3">
      <div className="w-22 h-22">
        <img src="devchallenges.png" alt="job" className="w-full" />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="text-xs font-bold mb-2">Kasisto</div>
        <div className="text-lg leading-5 mb-4">Front-End Engineer</div>
        <div className="flex justify-between">
          <div className="border border-gray-dark rounded-4 py-1 px-2 text-xs font-bold w-min whitespace-nowrap flex-none">
            Full time
          </div>
          <div className="flex text-gray-light space-x-7 text-xs">
            <div className="flex items-center">
              <span className="material-icons text-lg mr-1 leading-3">
                public
              </span>
              New York
            </div>
            <div className="flex items-center">
              <span className="material-icons text-lg mr-1  leading-3">
                schedule
              </span>
              5 days ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
