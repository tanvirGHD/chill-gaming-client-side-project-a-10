

import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  // State to manage the dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allReviews">All Reviews</NavLink>
      </li>
      <div className="dropdown">
        <li>
          <button
            className="hover:bg-black hover:text-white"
            tabIndex={0}
            role="button"
            onClick={() => setDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
          >
            More
          </button>
        </li>
        {isDropdownOpen && (
          <ul
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
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
      </div>

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
      </>
  );

  return (
    <div className="navbar bg-pink-100 sticky z-50 top-0 backdrop-blur bg-opacity-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Chill Gamer</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">{user.displayName || user.displayName}</span>
            <button onClick={handleLogout} className="btn bg-pink-600 text-white">
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="login" className="btn bg-pink-600 text-white">
              Login
            </Link>
            <Link to="register" className="btn bg-pink-600 text-white">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
