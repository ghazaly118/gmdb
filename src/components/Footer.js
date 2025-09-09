import React from 'react';
import logo from "../assets/Movies.png"
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-900 mt-auto ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8"
              alt=" Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              GIMDB
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="movies/top" className="hover:underline me-4 md:me-6">
                Top
              </Link>
            </li>
            <li>
              <Link to="movies/upcomming" className="hover:underline me-4 md:me-6">
                Upcomming
              </Link>
            </li>
            <li>
              <Link to="movies/popular" className="hover:underline">
                Popular
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="" className="hover:underline">
            Flowbite™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
