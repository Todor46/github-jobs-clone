import React from "react";

const LocationRadioInput = ({ groupName, value, label, onChange }) => {
  return (
    <div className="flex items-center">
      <label
        htmlFor={value}
        className="text-gray-dark font-medium flex items-center cursor-pointer "
      >
        <input
          type="radio"
          name={groupName}
          value={value}
          id={value}
          className="hidden"
          onChange={onChange}
        />
        <span className="w-4.5 h-4.5 inline-block mr-3 rounded-full border border-gray-light checked-sibling:bg-brand checked-sibling:border-brand ring-2 ring-gray-lighter ring-inset"></span>
        {label}
      </label>
    </div>
  );
};

export default LocationRadioInput;
