import React from "react";

const Loader = () => {
  return (
    <div className="flex space-x-2 h-22 w-22">
      <span className="h-3 w-3 bg-brand rounded-full animate-bounce"></span>
      <span className="h-3 w-3 bg-brand rounded-full animate-bounce200"></span>
      <span className="h-3 w-3 bg-brand rounded-full animate-bounce400"></span>
    </div>
  );
};

export default Loader;
