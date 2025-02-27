import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


import { IoLogoDeviantart } from "react-icons/io5";
    

export default function Footer() {
  return (
    <div className="max-w-full mx-auto px-4 lg:px-20 py-10 bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* First Column */}
        <div className="mt-5">
          <h1 className="text-3xl flex font-semibold text-white items-center space-x-3">
            <IoLogoDeviantart size={40} />
            <span>Krist</span>
          </h1>
          <ul className="mt-5 space-y-4">
            <li className="flex items-center text-gray-300 font-medium text-sm">
              <FiPhoneCall size={20} />
              <span className="ml-2">08139388141</span>
            </li>
            <li className="flex items-center text-gray-300 font-medium text-sm">
              <MdOutlineMail size={20} />
              <span className="ml-2">John@gmail.com</span>
            </li>
            <li className="flex items-center text-gray-300 font-medium text-sm">
              <IoLocationOutline size={20} />
              <span className="ml-2">A bunch of text that's supposed to be an address</span>
            </li>
          </ul>
        </div>

        {/* Solutions & Support Section */}
        <div className="lg:col-span-2 flex flex-wrap justify-center gap-10 sm:gap-20 text-sm space-y-8 sm:space-y-0">
          <div className="flex flex-col">
            <h6 className="font-medium text-white mb-3">Solutions</h6>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-gray-200 cursor-pointer">Analytics</li>
              <li className="text-gray-400 hover:text-gray-200 cursor-pointer">Marketing</li>
              <li className="text-gray-400 hover:text-gray-200 cursor-pointer">Ecommerce</li>
              <li className="text-gray-400 hover:text-gray-200 cursor-pointer">Insights</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h6 className="font-medium text-white mb-3">Support</h6>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-gray-200 cursor-pointer">Pricing</li>
              <li className="text-gray-400 hover:text-gray-200 cursor-pointer">Documentation</li>
              <li className="text-gray-400 hover:text-gray-200 cursor-pointer">Guides</li>
              <li className="text-gray-400 hover:text-gray-200 cursor-pointer">API status</li>
            </ul>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-xs">
          <h6 className="font-medium text-white mb-3">Subscribe</h6>
          <p className="py-3 text-sm text-gray-400">
            Enter your email below to be the first to know about new collections and product launches.
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="bg-black text-white p-3 rounded border-2 border-gray-600 w-full mt-2 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}