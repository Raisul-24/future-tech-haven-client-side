// import React from 'react';


import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);
   // console.log(user)
   // console.log(user.photoURL)
   const handleLogOut = () => {
      logOut()
         .then()
      Swal.fire({
         position: 'top-end',
         icon: 'success',
         title: 'LogOut Successfully',
         showConfirmButton: false,
         timer: 1500
      })
   }
   const links = <>
      <li className="block p-1 text-sm md:text-lg font-medium"><NavLink to="/">Home</NavLink></li>
      <li className="block p-1 text-sm md:text-lg font-medium"><NavLink to="/addProduct">Add Products</NavLink></li>
      <li className="block p-1 text-sm md:text-lg font-medium"><NavLink to="/myCart">My Cart</NavLink></li>
      <li className="block p-1 text-sm md:text-lg font-medium">
         {
            user ?
               <button onClick={handleLogOut}>
                  <NavLink to="">Log Out</NavLink>
               </button>
               :
               <button>
                  <NavLink to="/login">Log In</NavLink>
               </button>
         }
      </li>
   </>
   return (
      <div>
         <div className="navbar bg-white text-black px-4 md:px-10">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {links}
                  </ul>
               </div>
               <div className="flex items-center">
                  <img src="/logo.jpeg" alt="" className="w-8 h-8"/>
               <Link to="/" className="normal-case text-xl md:text-3xl font-bold ">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">FutureTech</span>Haven</Link>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {links}

               </ul>
            </div>
            <div className="navbar-end ">
               <div className="dropdown dropdown-end">
                  {
                     user &&
                     <div className="flex items-center">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                           <div className="w-10 rounded-full">
                              <img src={user.photoURL} />

                           </div>
                        </label>
                        <div className="hidden md:flex md:flex-col">
                           <p className="text-xs font-medium mr-1">{user.displayName}</p>
                           <p className="text-xs font-medium mr-1">{user.email}</p>

                        </div>
                     </div>
                  }
               </div>
            </div>
         </div>
      </div>
   );
};


export default Navbar;

