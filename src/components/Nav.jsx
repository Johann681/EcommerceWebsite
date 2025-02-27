import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FaClover } from "react-icons/fa6";
import { IoBagHandle, IoLogoDeviantart, IoMenu, IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the menu if clicking outside
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <nav className="max-w-[1340px] mx-auto flex items-center justify-between p-5 md:p-6 rounded-lg relative bg-white bg-opacity-80 backdrop-blur-lg shadow-sm">
        
        {/* Logo */}
        <div className="flex items-center text-3xl font-bold text-gray-900">
          <IoLogoDeviantart size={40} className="mr-2 text-[#00df9a]" />
          Krist
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-700">
          {["Home", "Shop", "Our Story", "Blog", "Contact Us"].map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-[#00df9a] hover:underline hover:underline-offset-4 transition-all flex items-center">
              {item} {item === "Shop" && <IoIosArrowDown className="ml-1" />}
            </li>
          ))}
        </ul>

        {/* Icons & Login Button */}
        <div className="hidden md:flex items-center gap-6">
          <CiSearch size={24} className="cursor-pointer text-gray-600 hover:text-[#00df9a] transition" />
          <FaClover size={24} className="cursor-pointer text-gray-600 hover:text-[#00df9a] transition" />
          <IoBagHandle size={24} className="cursor-pointer text-gray-600 hover:text-[#00df9a] transition" />
          <button className="bg-black px-6 py-2 rounded-md font-semibold text-white hover:bg-[#00bf87] transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl text-gray-700 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-white bg-opacity-95 shadow-lg flex flex-col items-center pt-24 z-50 transition-all duration-500"
        >
          {/* Close Icon inside the menu */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl text-gray-700"
          >
            <IoClose />
          </button>

          <ul className="flex flex-col gap-8 text-lg font-semibold text-gray-800">
            {["Home", "Shop", "Our Story", "Blog", "Contact Us"].map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-[#00df9a] transition-all flex items-center">
                {item} {item === "Shop" && <IoIosArrowDown className="ml-1" />}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4">
            <button className="bg-black w-40 py-3 rounded-md font-medium text-white hover:bg-[#00bf87] transition">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
