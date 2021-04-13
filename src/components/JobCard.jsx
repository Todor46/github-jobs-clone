import React from "react";
import formatJobDate from "../utils/formatJobDate";

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
      <div className="w-22 h-22 flex items-center">
        <img src={company_logo} alt={company} className="w-full" />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="text-xs font-bold mb-2">
          <a href={company_url} target="blank">
            {company}
          </a>
        </div>
        <div className="text-lg leading-5 mb-3">
          <a href={`/${id}`}>{title}</a>
        </div>
        <div className="flex justify-between">
          <div className="border border-gray-dark rounded-4 py-1 px-2 text-xs font-bold w-min whitespace-nowrap flex-none">
            {type}
          </div>
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
