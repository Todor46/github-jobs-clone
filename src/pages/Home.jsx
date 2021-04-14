import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import getJobs from "../services/getJobs";
import LocationRadioInput from "../components/locationRadioInput/LocationRadioInput";
import Search from "../components/Search";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // const { search } = useLocation();
  // console.log(search);

  useEffect(() => {
    setTimeout(() => {
      setJobs(getJobs());
      setLoading(false);
    }, 0);
  }, []);

  const slicedJobs = jobs.slice(0, 5);

  const cities = [
    {
      label: "London",
      value: "london",
    },
    {
      label: "Amsterdam",
      value: "amsterdam",
    },
    {
      label: "New York",
      value: "newyork",
    },
    {
      label: "Berlin",
      value: "berlin",
    },
  ];

  return (
    <>
      <Search />
      <div className="grid grid-cols-12 gap-8 mt-10.5 text-gray-dark">
        <div className="col-span-4">
          <div className="flex space-x-3 font-medium">
            <input
              type="checkbox"
              name="fullTime"
              id="fullTime"
              className="w-4.5 h-4.5 rounded-sm text-brand bg-transparent border-gray-light"
            />
            <label
              htmlFor="fullTime"
              className="text-sm font-medium text-poppins"
            >
              Full time
            </label>
          </div>
          <label
            className="mt-7 inline-block font-bold text-gray-light text-sm uppercase text-poppins tracking-wide"
            htmlFor="location"
          >
            Location
          </label>
          <div className="bg-white rounded-4 shadow-sm w-full mt-3.5 flex flex-row items-center">
            <span className="material-icons text-base text-gray-light ml-3.5">
              public
            </span>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="City, state, zip code or country"
              className="border-none w-full text-sm text-gray-dark placeholder-gray-light py-4 focus:ring-0"
            />
          </div>
          <div className="space-y-4 mt-6 pl-3.5 text-poppins text-sm">
            {cities.map((city) => (
              <LocationRadioInput
                key={city.value}
                groupName="location"
                value={city.value}
                label={city.label}
              />
            ))}
          </div>
        </div>
        <div className="col-span-8 space-y-8">
          {loading
            ? "loading"
            : slicedJobs.map((job) => <JobCard key={job.id} job={job} />)}

          <Pagination numOfPages={5} activePage={2} />
        </div>
      </div>
    </>
  );
};

export default Home;
