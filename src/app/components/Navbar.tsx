import React from 'react'

import { IoHeart } from "react-icons/io5";
import { BiSolidBell } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5"; // Corrected settings icon
import { CiSearch } from "react-icons/ci";
import { MdTune } from "react-icons/md";
import {Plus_Jakarta_Sans} from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans ({subsets:["latin"]})
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-[1440px] h-[110px] gap-0  border-t-[1px]  bg-white shadow-md">
      {/* Logo */}
      <div className={`${plusJakartaSans.className} text-[#3563E9] text-2xl font-bold ml-8`}>MORENT</div>
      {/* Search Bar */}
      <div className="relative flex items-center w-[492px] ml-[-300px]"> {/* Adjust left position with margin */}
  {/* Search Input */}
  <input
    type="text"
    placeholder="Search something here"
    className={`${plusJakartaSans.className} w-[492px] px-10 pr-12 py-2 border text-[#596780] border-gray-300 rounded-full focus:outline-none`}
  />
  {/* Search Icon */}
  <CiSearch className="absolute left-4 text-[#596780] w-5 h-5 top-1/2 transform -translate-y-1/2" />
  {/* Filter Icon */}
  <MdTune className="absolute right-4 text-[#C3D4E966] w-5 h-5 top-1/2 transform -translate-y-1/2" />
</div>


      {/* Icon Group */}
      <div className="flex items-center space-x-2 px-3">
        {/* Heart Icon with Border */}
        <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full">
          <IoHeart className="text-[#596780] w-5 h-5" />
        </div>
        {/* Bell Icon with Notification Dot and Border */}
        <div className="relative flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full">
          <BiSolidBell className="text-[#596780] w-5 h-5" />
          <span className="absolute top-1 right-1 inline-flex items-center justify-center w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>
        {/* Settings Icon with Border */}
        <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full">
          <IoSettingsSharp className="text-[#596780] w-5 h-5" />
        </div>
        {/* Profile Picture */}
        <img
          src="/profile.png"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border border-gray-300"
        />
      </div>
    </nav>
  );
}
export default Navbar