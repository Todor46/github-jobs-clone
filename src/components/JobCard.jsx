import React from "react";
import formatJobDate from "../utils/formatJobDate";
import Badge from "./Badge";

const JobCard = ({ job }) => {
  const {
    id,
    type,
    company,
    company_url,
    location,
    title,
    company_logo,
    created_at,
  } = job;

  return (
    <div className="bg-white w-full rounded-4 p-3 flex space-x-4 shadow-sm">
      <div className="w-22 h-22 flex items-center justify-center">
        <img
          src={company_logo}
          alt={company}
          className="max-w-full max-h-full"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="text-xs font-bold mb-2">
          <a href={company_url} target="blank" className="text-gray-dark">
            {company}
          </a>
        </div>
        <div className="text-lg leading-5 mb-3">
          <a href={`/job/${id}`} className="text-gray-dark">
            {title}
          </a>
        </div>
        <div className="md:flex space-y-6 md:space-y-0 justify-between">
          <Badge text={type} />
          <div className="flex text-gray-light space-x-7 text-xs">
            <div className="flex items-center">
              <span className="material-icons text-lg mr-1 leading-3">
                public
              </span>
              {location}
            </div>
            <div className="flex items-center">
              <span className="material-icons text-lg mr-1  leading-3">
                schedule
              </span>
              {formatJobDate(created_at)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
