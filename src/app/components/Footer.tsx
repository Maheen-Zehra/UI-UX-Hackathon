import React from "react";
import {Plus_Jakarta_Sans} from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans ({subsets:["latin"]})

const Footer = () => {
    return (
      <footer className={`${plusJakartaSans.className}bg-white border-t border-gray-300 w-[1440px] h-[110px]`}>
        <div className="w-[1440px] mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-8 sm:mb-0">
            <h1 className="text-blue-600 text-2xl font-bold">MORENT</h1>
            <p className="text-gray-600 mt-2 w-[285px] h-[48px]">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
  
          {/* Links Section */}
          <div className="flex flex-wrap justify-between sm:gap-x-16 px-28">
            {/* About Links */}
            <div>
              <h2 className="text-[#1A202C] font-semibold">About</h2>
              <ul className="text-[#13131399] mt-5 space-y-5">
                <li>
                  <a href="/how-it-works" className="hover:text-blue-600">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/featured" className="hover:text-blue-600">
                    Featured
                  </a>
                </li>
                <li>
                  <a href="/partnership" className="hover:text-blue-600">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="/business-relation" className="hover:text-blue-600">
                    Business Relation
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Community Links */}
            <div>
              <h2 className="text-[#1A202C] font-semibold">Community</h2>
              <ul className="text-[#13131399] mt-5 space-y-5">
                <li>
                  <a href="/events" className="hover:text-blue-600">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-blue-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/podcast" className="hover:text-blue-600">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="/invite" className="hover:text-blue-600">
                    Invite a friend
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Socials Links */}
            <div>
              <h2 className="text-[#1A202C] font-semibold">Socials</h2>
              <ul className="text-[#13131399] mt-5 space-y-5">
                <li>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="border-t mr-14 ml-14 border-gray-300">
          <div className="w-[1440px] font-normal mx-auto  py-4 flex flex-col sm:flex-row justify-between text-[#1A202C] text-sm">
            <p>©2022 MORENT. All rights reserved</p>
            <div className="flex space-x-11  font-semibold">
              <a href="/privacy-policy" className="font-normal hover:text-blue-600">
                Privacy & Policy
              </a>
              <a href="/terms-condition" className=" font-normal pr-28 hover:text-blue-600">
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
export default Footer  