import React from "react";

const Search = () => {
  return (
    <div
      className="search-container rounded-lg w-full py-10.5 bg-cover"
      style={{ backgroundImage: 'url("backgroundImg.png")' }}
    >
      <div className="search-bar w-2/3 mx-auto p-1 bg-white rounded-4 flex items-center">
        <span class="material-icons text-lg text-gray-light ml-4">
          work_outline
        </span>
        <input
          placeholder="Title, companies, expertise or benefits"
          type="text"
          className="w-full text-xs border-none focus:ring-0 placeholder-gray-light"
        />
        <button className="text-white font-medium focus:outline-none leading-4 bg-brand hover:bg-brand-light rounded-4 py-3.5 px-12">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
