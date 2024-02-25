import React from "react";

import "./BrowseJobs.css";

import JobPostList from "../../DATA/JobPostList";

import JobsPost from "./innerComponent/JobsPost";

const BrowseJobs = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        {JobPostList?.map((content, index) => (
          <JobsPost
            key={index}
            name={content?.Name}
            title={content?.Title}
            context={content?.Context}
            company={content?.Company}
            email={content?.ProviderEmail}
          />
        ))}
      </div>
    </>
  );
};

export default BrowseJobs;
