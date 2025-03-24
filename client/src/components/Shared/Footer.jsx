import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#0F0F14] mt-20 px-6 py-10 overflow-hidden text-white">
      {/* Curved Background Shape on the Right */}
      <div className="top-0 right-0 absolute bg-[#0F0F14] w-[50%] h-full clip-path-custom"></div>

      <div className="relative gap-8 grid grid-cols-1 md:grid-cols-5 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="z-10 relative">
          <img src="/blogo.svg" alt="Brand Logo" />
        </div>

        {/* About Section */}
        <div className="z-10 relative">
          <h3 className="font-semibold text-lg">About Section</h3>
          <Link
            to="/about"
            className="block mt-2 text-gray-400 hover:text-white"
          >
            About Us
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="z-10 relative">
          <h3 className="font-semibold text-lg">Navigation Links</h3>
          <Link to="/" className="block mt-2 text-gray-400 hover:text-white">
            Home
          </Link>
          <Link
            to="/jobs"
            className="block mt-2 text-gray-400 hover:text-white"
          >
            Browse Jobs
          </Link>
          <Link
            to="/admin/jobs"
            className="block mt-2 text-gray-400 hover:text-white"
          >
            Post a Job
          </Link>
          <Link
            to="/admin/companies"
            className="block mt-2 text-gray-400 hover:text-white"
          >
            Create a Company
          </Link>
        </div>

        {/* Tools */}
        <div className="z-10 relative">
          <h3 className="font-semibold text-lg">Tools</h3>
          <p className="mt-2 text-gray-400">React</p>
          <p className="mt-2 text-gray-400">MongoDB</p>
          <p className="mt-2 text-gray-400">Express JS</p>
          <p className="mt-2 text-gray-400">Node JS</p>
          <p className="mt-2 text-gray-400">Redux</p>
        </div>

        {/* Members */}
        <div className="z-10 relative">
          <h3 className="font-semibold text-lg">Members</h3>
          <p className="mt-2 text-gray-400">kumar</p>
          <p className="mt-2 text-gray-400">vijay</p>
          <p className="mt-2 text-gray-400">kavin</p>
          <p className="mt-2 text-gray-400">prakash</p>
          <p className="mt-2 text-gray-400">arun</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="z-10 relative mt-6">
        <div className="flex gap-4">
          <img
            src="/social/twitter.svg"
            alt="Twitter"
            className="w-8 h-8 cursor-pointer"
          />
          <img
            src="/social/youtube.svg"
            alt="YouTube"
            className="w-8 h-8 cursor-pointer"
          />
          <img
            src="/social/facebook.svg"
            alt="Facebook"
            className="w-8 h-8 cursor-pointer"
          />
          <img
            src="/social/instagram.svg"
            alt="Instagram"
            className="w-8 h-8 cursor-pointer"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="z-10 relative flex md:flex-row flex-col justify-between mt-6 pt-4 border-gray-600 border-t text-gray-400 text-sm">
        <p>@2025-2030, All rights Reserved</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-white">
            Terms of Service
          </Link>
          <Link to="/help-center" className="hover:text-white">
            Help Center
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
