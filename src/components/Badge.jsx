import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="border border-gray-dark rounded-4 py-1 px-2 text-xs font-bold w-min whitespace-nowrap flex-none">
      {text}
    </div>
  );
};

export default Badge;
