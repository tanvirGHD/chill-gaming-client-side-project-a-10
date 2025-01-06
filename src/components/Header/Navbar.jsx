import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allReviews">All Reviews</NavLink>
      </li>
      <li className="relative">
        <button
          className="hover:bg-black hover:text-white px-2 pt-2 rounded-md"
          tabIndex={0}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          More
        </button>
        {isDropdownOpen && (
          <ul className="dropdown-content absolute menu bg-[#161b3d] dark:bg-pink-500 dark:text-white rounded-box z-[1] w-52 p-2 shadow top-full mt-2 left-0">
            <li>
              <NavLink to="/upcomingGames">Upcoming Games</NavLink>
            </li>
            <li>
              <NavLink to="/latestReviews">Latest Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/popularGames">Popular Games</NavLink>
            </li>
          </ul>
        )}
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/addReview">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/myReviews">My Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/watchList">My WatchList</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar dark:bg-pink-400 sticky z-50 top-0 bg-[#222747] px-7 dark:text-black text-white">
      <div className="navbar-start flex items-center gap-4">
        {/* Dropdown Menu for Small Devices */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo Section */}
        <a className=" text-lg font-bold text-pink-600 md:text-3xl">
          <img className="h-14 w-24 object-cover" src={logo} alt="Logo" />
        </a>
      </div>

      {/* Navbar Links for Large Devices */}
      <div className="navbar-center hidden lg:flex flex-grow">
        <ul className="menu menu-horizontal px-1 flex gap-4">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded flex items-center hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? (
            <FaMoon className="text-lg" />
          ) : (
            <FaSun className="text-lg" />
          )}
        </button>

        {/* User Info */}
        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
              data-tooltip-id="user-tooltip"
            />
            <Tooltip id="user-tooltip" place="top">
              {user.displayName || "Guest"}
            </Tooltip>
            <button
              onClick={handleLogout}
              className="btn bg-pink-600 text-white text-xs md:text-sm lg:text-base px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="login"
              className="btn bg-pink-600 text-white text-xs md:text-sm lg:text-base px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-2"
            >
              Login
            </Link>
            <Link
              to="register"
              className="btn bg-pink-600 text-white text-xs md:text-sm lg:text-base px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-2"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
