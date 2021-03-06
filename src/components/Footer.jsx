import React from "react";

const Footer = () => {
  return (
    <div className="w-full text-center text-gray-light mt-16 text-sm text-montserrat font-medium bottom-0">
      created by{" "}
      <a
        className="font-bold hover:underline text-gray-light"
        target="blank"
        href="https://github.com/Todor46/github-jobs-clone"
      >
        Todor Konjevic
      </a>{" "}
      - devChallenges.io
    </div>
  );
};

export default Footer;
