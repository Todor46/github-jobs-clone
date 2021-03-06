import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import getJobs from "../services/getJobs";
import LocationRadioInput from "../components/locationRadioInput/LocationRadioInput";
import Search from "../components/Search";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numOfPages, setNumOfPages] = useState(1);
  const [locationQuery, setLocationQuery] = useState("");
  const pageSize = 5;
  const history = useHistory();

  useEffect(() => {
    // Here we mock the fetching time
    setTimeout(() => {
      setJobs(getJobs());
      setLoading(false);
    }, 2000);
  }, []);

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const keyword = params.get("keyword");
  const fullTime = params.get("fullTime");
  const location = params.get("location");
  const page = params.get("page") || 1; // If no page is specified in the URL default to 1

  let filteredJobs = [...jobs];

  if (keyword) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  if (fullTime === "true") {
    filteredJobs = filteredJobs.filter((job) => job.type === "Full Time");
  }

  if (location) {
    filteredJobs = filteredJobs.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  useEffect(() => {
    setNumOfPages(Math.ceil(filteredJobs.length / pageSize));
  }, [filteredJobs.length]);

  const slicedJobs = filteredJobs.slice(
    (page - 1) * pageSize,
    (page - 1) * pageSize + pageSize
  );

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
    {
      label: "None",
      value: null,
    },
  ];

  const handleFiltering = (e, type) => {
    if (type !== "page") params.delete("page");
    if (e) {
      params.set(type, e);
    } else {
      params.delete(type);
    }

    history.push({ search: params.toString() });
  };

  return (
    <>
      <Search handleFiltering={handleFiltering} keyword={keyword} />
      <div className="md:grid md:grid-cols-12 gap-8 mt-10.5 text-gray-dark">
        <div className="md:col-span-4 mb-8">
          <div className="flex space-x-3 font-medium">
            <input
              type="checkbox"
              name="fullTime"
              id="fullTime"
              className="w-4.5 h-4.5 rounded-sm text-brand bg-transparent border-gray-light"
              onChange={(e) => handleFiltering(e.target.checked, "fullTime")}
              defaultChecked={fullTime}
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
              onChange={(e) => {
                handleFiltering(e.target.value, "location");
                setLocationQuery(e.target.value);
              }}
              value={locationQuery}
            />
          </div>
          <div className="space-y-4 mt-6 pl-3.5 text-poppins text-sm">
            {cities.map((city) => (
              <LocationRadioInput
                key={city.value}
                groupName="location"
                value={city.value}
                label={city.label}
                onChange={(e) => {
                  handleFiltering(e.target.value, "location");
                  setLocationQuery("");
                }}
                checked={city.value === location}
              />
            ))}
          </div>
        </div>
        <div className="col-span-8 space-y-8">
          {loading ? (
            <div className="w-full h-full flex items-center justify-center">
              <Loader />
            </div>
          ) : slicedJobs.length ? (
            <>
              {slicedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
              <Pagination
                numOfPages={numOfPages}
                activePage={parseInt(page)}
                handleFiltering={handleFiltering}
              />
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="text-2xl font-bold">Nothing found</div>
              <div
                className="text-brand text-sm font-medium hover:underline cursor-pointer"
                onClick={() => history.push({ search: "" })}
              >
                Reset filters
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
