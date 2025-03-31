import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {FaTv, FaFilm, FaUser, FaSearch } from 'react-icons/fa';


const navigation = [
  {
    label: 'Home',
    href: '/home',  
   
  },
  {
    label: 'Overview',
    href: '/overview',
   
  },
  {
    label: 'Info',
    href: '/info',
  
  },
];
const Header = () => {
const navigate = useNavigate();


  return (
    <div className='bg-black w-full'>
      {/* navbar */}
      <div className=' sm:flex sm:p-3 sm:text-lg text-white w-full'>
        <nav className="  w-full flex justify-center gap-4 bg-black p-4 text-4xl">
          {navigation.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.href}
              className="text-white text-xl hover:text-gray transition-colors px-2"
            >
              {nav.label}
            </NavLink>
          
          ))}
        </nav>

        </div>
      
    </div>
  )
}

export default Header
