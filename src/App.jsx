import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import LocationRadioInput from "./components/locationRadioInput/LocationRadioInput";
import JobCard from "./components/JobCard";

function App() {
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
            <span class="material-icons text-base text-gray-light ml-3.5">
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
                groupName="location"
                value={city.value}
                label={city.label}
              />
            ))}
          </div>
        </div>
        <div className="col-span-8">
          <JobCard />
        </div>
      </div>
    </div>
  );
}

export default App;
