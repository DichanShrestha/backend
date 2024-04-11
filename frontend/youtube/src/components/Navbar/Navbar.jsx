import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar({ user }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(true);
  let userAvatar;
  if (user !== null) {
    userAvatar = user.data.data.avatar;
    //coverimg same
  }

  const navigateToSignIn = () => {
    navigate("/signin");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const closeDropdown = () => {
      setDropdownOpen(false);
    };

    if (dropdownOpen) {
      document.addEventListener("click", closeDropdown);
    } else {
      document.removeEventListener("click", closeDropdown);
    }

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [dropdownOpen]);

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to='/'>
                <img
                  className="h-8 w-auto"
                  src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
                  alt="YouTube Logo"
                />
              </Link>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-900 hover:text-gray-500 hover:border-gray-500 focus:outline-none focus:text-gray-500 focus:border-gray-500"
              >
                Home
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-900 hover:text-gray-500 hover:border-gray-500 focus:outline-none focus:text-gray-500 focus:border-gray-500"
              >
                Trending
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-900 hover:text-gray-500 hover:border-gray-500 focus:outline-none focus:text-gray-500 focus:border-gray-500"
              >
                Subscriptions
              </a>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="relative">
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-3a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            <button
              onClick={navigateToSignIn}
              className="ml-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-full text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:border-red-700 focus:ring-red active:bg-red-700 transition ease-in-out duration-150"
            >
              Sign in
            </button>
            <div
              id="img"
              className="relative ml-3"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown();
              }}
            >
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <img
                    className="object-cover w-10 h-10 rounded-full cursor-pointer"
                    src={
                      userAvatar
                        ? userAvatar
                        : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                    }
                    alt="user"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" mr-20 w-52">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Update Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/signout">Sign Out</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
