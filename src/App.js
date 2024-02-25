import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Navbar,
  Home,
  SignIn,
  SignUp,
  Contact,
  BrowseJobs,
  PostJobs,
} from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="browse-jobs" element={<BrowseJobs />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="post-a-job" element={<PostJobs />} />
      </Routes>
    </Router>
  );
};

export default App;

// git test 2
