import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import LocationRadioInput from "./components/locationRadioInput/LocationRadioInput";
import JobCard from "./components/JobCard";
import { useEffect, useState } from "react";
import getJobs from "./services/getJobs";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setJobs(getJobs());
      setLoading(false);
    }, 0);
  }, []);

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
    <div className="App container mx-auto px-10">
      <Header />
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
            : jobs.map((job) => <JobCard key={job.id} job={job} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
