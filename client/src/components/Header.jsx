import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Avatar, Dropdown, Flowbite } from "flowbite-react";
import {useSelector,useDispatch} from 'react-redux'
import {toggleTheme} from '../redux/theme/themeSlice'

const NavBar = () => {
  const dispatch = useDispatch()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // To get the current route
  const {currentUser} = useSelector(state => state.user)
  const {theme} = useSelector(state => state.theme)

 
  // Function to add active class based on current route
  const isActive = (path) => location.pathname === path;

  return (
    <Flowbite >
      <nav className="border-b dark:bg-gray-800 dark:border-gray-700 bg-white px-4 py-2.5 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-semibold whitespace-nowrap dark:text-white">
            Logo
          </Link>

          {/* Search box (responsive width based on screen size) */}
          <div className="relative hidden md:flex items-center w-1/2 lg:w-1/3">
            <input
              type="text"
              className="w-full py-2 px-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 transition dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:border-indigo-400"
              placeholder="Search..."
            />
            <HiSearch className="absolute right-4 top-2.5 text-gray-400 dark:text-gray-200" />
          </div>

          {/* Right section with Dark Mode, Sign-in button and Hamburger */}
          <div className="flex items-center space-x-4">
            {/* NavLinks for larger screens */}
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className={`${
                  isActive("/") ? "text-indigo-600 font-bold" : "text-gray-800 dark:text-gray-200"
                } hover:text-indigo-600`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  isActive("/about") ? "text-indigo-600 font-bold" : "text-gray-800 dark:text-gray-200"
                } hover:text-indigo-600`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`${
                  isActive("/contact") ? "text-indigo-600 font-bold" : "text-gray-800 dark:text-gray-200"
                } hover:text-indigo-600`}
              >
                Contact Us
              </Link>
              <Link
                to="/dashboard"
                className={`${
                  isActive("/dashboard") ? "text-indigo-600 font-bold" : "text-gray-800 dark:text-gray-200"
                } hover:text-indigo-600`}
              >
                Dashboard
              </Link>
            </div>

            {/* Dark Mode Icon */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {theme === 'light' ? <BsSun size={20} /> : <BsFillMoonFill size={20} />}
            </button>

            {/* Sign In button */}
            {currentUser ? (
              <Dropdown
              arrowIcon= {false}
               inline 
              label= {
                <Avatar 
                img= {currentUser.profilePicture}
                 onError={(e) =>e.target.src = 'https://imgs.search.brave.com/1uh1A9oseaF2rvQeTqMZ-oi9wp24kNMwo-D_71DQDyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Ivc3R5bGlzaC1k/ZWZhdWx0LXVzZXIt/cHJvZmlsZS1waG90/by1hdmF0YXItdmVj/dG9yLWlsbHVzdHJh/dGlvbl82NjQ5OTUt/MzUyLmpwZz9zaXpl/PTYyNiZleHQ9anBn'  } 
                rounded/>
              }
              >
                <Dropdown.Header>
                  <span className="block text-sm ">@{currentUser.username}</span>
                  <span className="block text-md truncate">@{currentUser.email}</span>
                </Dropdown.Header>
                <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider/>
                <Dropdown.Item>
                  Sign Out
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <>
              <Link
              to="/signin"
              className="hidden md:inline text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Sign In
            </Link>
            </>
            )}

            {/* Hamburger Menu Icon for Small Screens */}
            <button
              className="text-gray-800 dark:text-white md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Small Screens */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-14 left-0 w-full bg-white dark:bg-gray-800 shadow-md py-2 z-10`}
        >
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-indigo-600 font-bold" : "text-gray-800 dark:text-gray-200"
              } hover:text-indigo-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-indigo-600 font-bold" : "text-gray-800 dark:text-gray-200"
              } hover:text-indigo-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-indigo-600 font-bold" : "text-gray-800 dark:text-gray-200"
              } hover:text-indigo-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/dashboard"
              className={`${
                isActive("/dashboard") ? "text-indigo-600 font-bold" : "text-gray-800 dark:text-gray-200"
              } hover:text-indigo-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/login"
              className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Search Bar for Small Screens (visible in small screens) */}
        <div className="flex md:hidden items-center justify-center mt-3">
          <div className="relative w-3/4">
            <input
              type="text"
              className="w-full py-2 px-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 transition dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:border-indigo-400"
              placeholder="Search..."
            />
            <HiSearch className="absolute right-4 top-2.5 text-gray-400 dark:text-gray-200" />
          </div>
        </div>
      </nav>
    </Flowbite>
  );
};

export default NavBar;


