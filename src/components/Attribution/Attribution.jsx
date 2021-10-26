import React from "react";
import "./Attribution.scss";

const Attribution = () => {
  return (
    <div className="attribution">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/mmtakeuchi/job-listings">Michael Takeuchi</a>.
    </div>
  );
};

export default Attribution;
