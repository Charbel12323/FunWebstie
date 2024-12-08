import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogArticle from "./pages/BlogArticle";
import AboutMe from "./components/AboutMe";
import PrivacyPolicy from "./components/privacyPolicy";
const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white px-10 py-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-extrabold tracking-wide hover:text-yellow-300 transition duration-300">
              Charbel Tech Enthusiast Blog
            </h1>
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-300 transition duration-300 font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-yellow-300 transition duration-300 font-semibold"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-yellow-300 transition duration-300 font-semibold">
                  Privacy Policy
                </Link>
              </li>


            </ul>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          {/* AboutMe Component on the Homepage */}
          <Route
            path="/"
            element={
              <div>
                <AboutMe />
                <BlogList />
              </div>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogArticle />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
