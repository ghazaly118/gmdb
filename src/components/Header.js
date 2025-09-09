import React from 'react';
import logo from "../assets/Movies.png"
import { Link,NavLink,useNavigate } from 'react-router-dom';

export function Header() {
const [hidden,sethidden]=React.useState(true)
const [darkMode, setDarkMode] = React.useState(JSON.parse(localStorage.getItem("theme") )|| false);
const navigator= useNavigate();
 function handle_submit(event){
event.preventDefault()
const query=event.target.search.value
event.target.reset()
return navigator(`/search?q=${query}`)

 }
  // Toggle dark mode on <html> element
  
  React.useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(darkMode))
    
    document.documentElement.classList.toggle("dark", !darkMode);
},[darkMode])

  const Active ="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
  const inActive="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-7 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  return (
      <nav className="bg-white border-b-2 dark:border-b-0 border-gray-200 dark:bg-gray-900  dark:border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to=""
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={logo}
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            GIMDB
          </span>
        </Link>

        {/* Right side buttons */}
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={()=>sethidden(!hidden)}
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 
              focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 
              rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          {/* Sun Icon Button */}
  <button
  onClick={()=>setDarkMode(!darkMode)}
  type="button"
  className="text-gray-500 dark:text-gray-400 mr-4 hover:bg-gray-100 dark:hover:bg-gray-700 
    focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 
    rounded-lg text-sm p-2.5"
>
  {darkMode ? (
  // Sun icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  ) : (
      // Moon icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
    
  )}
  </button>
        

          {/* Search input (hidden on mobile) */}
        <div className={`relative hidden md:block`}>

            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <form onSubmit={handle_submit}>

            <input
              type="text"
              name='search'
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 
                rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
            </form>
          </div>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
                onClick={()=>sethidden(!hidden)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
              text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
              focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
              dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar links */}
      <div
  className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${hidden ? "hidden" : ""}`}
  id="navbar-search"
>

          {/* Search input for mobile */}
          <div className={`relative mt-3 md:hidden`}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div><form onSubmit={handle_submit}>

             <input
             name='search'
    type="text"
    id="search-navbar"
    className={` w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 
      rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
      dark:focus:ring-blue-500 dark:focus:border-blue-500`}
    placeholder="Search..."
  />
            </form>
          </div>

          {/* Nav list */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 
            rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 
            md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <NavLink
                to="/"
                className={({isActive})=>isActive ? Active : inActive} end
                
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="movies/top"
                className={({isActive})=>isActive ? Active : inActive}
              >
                Top
              </NavLink>
            </li>
            <li>
              <NavLink
                to="movies/upcomming"
                className={({isActive})=>isActive ? Active : inActive}
              >
                Upcomming
              </NavLink>
            </li>
              <li>
              <NavLink
                to="movies/popular"
                className={({isActive})=>isActive ? Active : inActive}
              >
                Popular
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
}

