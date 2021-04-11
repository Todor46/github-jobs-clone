import React from "react";

const Search = () => {
  return (
    <div
      className="search-container rounded-lg w-full py-10 bg-cover"
      style={{ backgroundImage: 'url("backgroundImg.png")' }}
    >
      <div className="search-bar w-2/3 mx-auto p-1 bg-white rounded-lg flex items-center">
        <span class="material-icons text-lg text-gray-400 ml-4 mr-2">
          work_outline
        </span>
        <input
          placeholder="Title, companies, expertise or benefits"
          type="text"
          className="focus:outline-none w-full text-xs"
        />
        <button className="text-white font-medium focus:outline-none leading-4 bg-blue-500 rounded-md py-3.5 px-12">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
