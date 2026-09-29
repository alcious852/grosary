import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="fluid-container ">
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between  items-center">
        <h1 className="text-2xl font-bold">
          My Website
        </h1>
         
         
        <div className=" text-white flex gap-6 ">

          <Link className='text-white text-decoration-none' to="/">Home</Link>

          <Link className='text-white text-decoration-none' to="/Login">Login</Link>

            <Link
            className="text-white text-decoration-none hover:text-gray-200"
            to="/profile"
          >
            Profile
          </Link>

        </div>

      </nav>


      <nav className="bg-gray-600 text-white px-6 py-4 flex justify-between  items-center my-4">
        <h1 className="text-2xl font-bold">
          My Website
        </h1>
         
        <div className=" text-white flex gap-6 ">

       <li className="inline-block px-2 py-3 mx-1 rounded">
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? "bg-blue-600 text-white font-bold px-2 py-3 rounded"
        : "text-black"
    }
  >
    Home
  </NavLink>
</li>

         <li className="inline-block px-2 py-3 bg-blue-600 mx-1 rounded"><NavLink className='text-white text-decoration-none' to="/Login">Login</NavLink></li> 

      <li  className="inline-block px-2 py-3 bg-blue-600 mx-1 rounded"><NavLink
            className="text-white text-decoration-none hover:text-gray-200"
            to="/profile"
          >
            Profile
          </NavLink></li>      



        </div>
             
      </nav>
      <Outlet/>
    </div>
    
  )
}

export default Home