import React from "react";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const subjectHandler = (e) => setSubject(e.target.value);

  const [body, setBody] = useState("");
  const bodyHandler = (e) => setBody(e.target.value);

  return (
    <section className="bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-white ">
          Contact Us
        </h2>

        <form
          action={`
            mailto: mohamadhasan0711@gmail.com?subject=${subject}&body=${body}
          `}
          method="post"
          encType="text/plain"
          className="space-y-8"
        >
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              value={subject}
              onChange={subjectHandler}
              type="Subject"
              id="subject"
              className="bg-gray-700 text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Your message
            </label>
            <textarea
              value={body}
              onChange={bodyHandler}
              id="message"
              rows="6"
              className="bg-gray-700 text-white text-sm rounded-lg block w-full p-2"
              placeholder="Leave a comment..."
              name="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-button py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-primary-700 border"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
