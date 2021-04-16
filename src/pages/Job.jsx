import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getJobsById } from "../services/getJobs";
import ReactHtmlParser from "react-html-parser";
import Badge from "../components/Badge";
import formatJobDate from "../utils/formatJobDate";

const Job = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setData(getJobsById(id));
  }, [id]);

  return (
    <div className="md:grid grid-cols-12 gap-8 text-gray-dark">
      <div className="text-sm md:col-span-3">
        <a
          href="/"
          className="text-brand font-medium text-poppins mb-9 flex items-center"
        >
          <span className="material-icons mr-4">keyboard_backspace</span>
          Back to search
        </a>
        <div className="text-gray-light font-bold uppercase text-poppins">
          How to apply
        </div>
        <div className="mt-4 text-poppins font-medium break-words">
          {ReactHtmlParser(data?.how_to_apply)}
        </div>
      </div>
      <div className="md:col-span-9">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <Badge text={data.type} />
        </div>
        <div className="flex items-center space-x-2 text-gray-light mt-2">
          <span className="material-icons text-base">schedule</span>
          <span className="text-xs">{formatJobDate(data.created_at)}</span>
        </div>
        <div className="flex mt-8 space-x-3 mb-8">
          <div className="w-11 h-11 flex items-center justify-center">
            <img
              src={data.company_logo}
              alt={data.company}
              className="max-w-full max-h-full"
            />
          </div>
          <div>
            <div className="font-bold text-lg">{data.company}</div>
            <div className="text-gray-light flex items-center text-xs">
              <span className="material-icons text-base mr-2">public</span>{" "}
              {data.location}
            </div>
          </div>
        </div>
        <div className="text-base">{ReactHtmlParser(data.description)}</div>
      </div>
    </div>
  );
};

export default Job;
