import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FaClover } from "react-icons/fa6";
import { IoBagHandle, IoLogoDeviantart, IoMenu, IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the menu if you click outside
  useEffect(() => {
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
    <div className="w-full p-6 md:p-8 bg-transparent">
      <nav className="max-w-[1340px] mx-auto flex items-center justify-between p-4 bg-white rounded-lg relative">
        
        {/* Logo */}
        <div className="flex items-center text-3xl font-medium">
          <IoLogoDeviantart size={40} className="mr-2 text-[#00df9a]" />
          Krist
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold tracking-wide">
          {["Home", "Shop", "Our Story", "Blog", "Contact Us"].map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-[#00df9a] hover:underline hover:underline-offset-4 transition-all flex items-center">
              {item} {item === "Shop" && <IoIosArrowDown className="ml-1" />}
            </li>
          ))}
        </ul>

        {/* Icons & Login Button */}
        <div className="hidden md:flex items-center gap-5">
          <CiSearch size={22} className="cursor-pointer hover:text-[#00df9a] transition" />
          <FaClover size={22} className="cursor-pointer hover:text-[#00df9a] transition" />
          <IoBagHandle size={22} className="cursor-pointer hover:text-[#00df9a] transition" />
          <button className="bg-black px-5 py-2 rounded-md font-medium text-white hover:bg-[#00bf87] transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-lg flex flex-col items-center pt-20  z-10 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Icon inside the menu */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-3xl"
        >
          <IoClose />
        </button>

        <ul className="flex flex-col gap-8 text-lg font-semibold">
          {["Home", "Shop", "Our Story", "Blog", "Contact Us"].map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-[#00df9a] transition-all flex items-center">
              {item} {item === "Shop" && <IoIosArrowDown className="ml-1" />}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-4">
          <button className="bg-black w-40 py-2 rounded-md font-medium text-white hover:bg-[#00bf87] transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
