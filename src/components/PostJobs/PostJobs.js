import { useState, useEffect } from "react";

import JobPostList from "../../DATA/JobPostList";

import "./PostJobs.css";

const PostJobs = () => {
  const [name, setName] = useState("");
  const nameHandler = (e) => setName(e.target.value);

  const [company, setCompany] = useState("");
  const companyHandler = (e) => setCompany(e.target.value);

  const [email, setEmail] = useState("");
  const emailHandler = (e) => setEmail(e.target.value);

  const [title, setTitle] = useState("");
  const titleHandler = (e) => setTitle(e.target.value);

  const [context, setContext] = useState("");
  const contextHandler = (e) => setContext(e.target.value);

  const PostJob = (e) => {
    e.preventDefault();

    const obj = {
      Name: name,
      Title: title,
      Company: company,
      Context: context,
      ProviderEmail: email,
    };

    if (name === "") {
      console.log("ERROR");
    } else {
      JobPostList.unshift(obj);
      console.log("Job Posted");
    }
  };

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-black ">
          Post a Job
        </h2>

        <form className="space-y-8 " onSubmit={PostJob}>
          <div>
            <label className="Name">Name</label>
            <input
              value={name}
              onChange={nameHandler}
              type="Subject"
              id="Name"
              className="bg-gray-700 text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="What is the name of the owner of this post"
              required
            />
          </div>

          <div>
            <label htmlFor="" className="Company">
              Company
            </label>
            <input
              value={company}
              onChange={companyHandler}
              type="Subject"
              id="Job Title"
              className="bg-gray-700 text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="Name the Company the needs employees"
              required
            />
          </div>

          <div>
            <label htmlFor="" className="Email">
              Contact Email
            </label>
            <input
              value={email}
              onChange={emailHandler}
              type="Email"
              id="Contact Email"
              className="bg-gray-700 text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="What is the email for the companies HR"
              required
            />
          </div>

          <div>
            <label htmlFor="" className="Title">
              Job Title
            </label>
            <input
              value={title}
              onChange={titleHandler}
              type="Subject"
              id="Job Title"
              className="bg-gray-700 text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="Describe the seeking title"
              required
            />
          </div>

          <div>
            <label htmlFor="" className="Context">
              Job Context
            </label>
            <textarea
              value={context}
              onChange={contextHandler}
              id="Context"
              rows="6"
              className="bg-gray-700 text-white text-sm rounded-lg block w-full p-2"
              placeholder="Job Description..."
              name="Context"
            ></textarea>
          </div>

          <div className="post-button w-1/6 flex justify-center rounded-xl p-2">
            <button type="submit">Send message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PostJobs;
