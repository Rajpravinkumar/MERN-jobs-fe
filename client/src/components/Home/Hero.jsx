import React, { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Handle search action (optimized with useCallback)
  const handleSearch = useCallback(() => {
    if (query.trim() !== " ") {
      navigate(`/search?query=${query}`);
    }
  }, [query, navigate]);

  // Trigger search when Enter key is pressed
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="relative flex justify-between items-center bg-gradient-to-r from-white to-purple-100 mt-16 px-16 py-20">
      <div className="max-w-lg">
        {/* <h1 className="font-bold text-5xl">
          <span className="bg-clip-text bg-gradient-to-r from-[#9F62FD] to-[#CA7BF7] text-transparent">
            Search Apply
          </span>{" "}
          & Get Your <span className="text-[#828EDC]">Dream</span> Jobs
        </h1> */}
        { <p className="mt-4 text-gray-600">
          {/* Discover endless opportunities with ease. Find, apply, and secure your
          ideal job through our seamless platform, designed to connect you with
          employers. */}
          Your dream job is closer than you think with HireUp. Our intuitive platform connects you with opportunities that align with your skills and aspirations. From easy applications to personalized job suggestions, we’re here to make your job search effortless.
        </p> }

        {/* Search Bar and Button Wrapper */}
        <div className="flex items-center space-x-4 mt-4">
          {/* Search Bar */}
          <div className="flex flex-grow items-center bg-gray-100 shadow-sm px-4 py-2 rounded-full max-w-[600px]">
            {/* <input
              type="text"
              placeholder="Find your dream jobs"
              className="flex-grow bg-transparent px-2 outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            /> */}
            {/* <button className="text-purple-500" onClick={handleSearch}>
              <FaSearch />
            </button> */}
          </div>

          {/* No. 1 Job Hunt Button (Shrunk) */}
         {/*  <button className="hover:bg-purple-700 bg-gradient-to-r from-[#D280F7] to-[#8A52FF] shadow-lg px-4 py-2 rounded-full font-medium text-white text-sm whitespace-nowrap">
            No. 1 Job Hunt Website
          </button> */}
        </div>
      </div>

      {/* Hero Image */}
      <div>
        <img src="/hero/image.svg" alt="Hero Illustration" className="w-96" />
      </div>

      {/* Gradient Fade-Out Effect */}
      <div className="bottom-0 left-0 absolute bg-gradient-to-b from-transparent to-white w-full h-20"></div>
    </section>
  );
};

export default Hero;
