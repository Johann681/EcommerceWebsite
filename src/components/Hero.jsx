import React, { useState, useEffect } from "react";
import img1 from "../assest/ghghhg.jpg";

export default function Hero() {
  const [hoverText, setHoverText] = useState("Shop Now!");

  // Adds a fade-in effect when the component mounts
  useEffect(() => {
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.classList.add("opacity-100", "scale-100");
    }
  }, []);

  return (
    <div className="w-full p-5 md:p-10 bg-gray-100">
      <div className="max-w-[1340px] mx-auto bg-white p-10 rounded-lg shadow-lg transition-all hero-section opacity-0 scale-95 duration-700 ease-in-out">

        <div className="grid md:grid-cols-2 items-center gap-8 mt-4">
          {/* Image Section */}
          <img
            className="w-[400px] mx-auto my-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
            src={img1}
            alt="Men's Collection"
          />

          {/* Text Content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-gray-700 text-2xl font-medium uppercase tracking-wide">
              Classic Exclusive.
            </p>
            <h1 className="md:text-7xl text-4xl font-extrabold py-5">
              Men's Collection
            </h1>
            <p className="text-gray-700 text-2xl font-semibold">
              UP TO <span className="text-red-500">40% OFF</span>
            </p>

            {/* Button */}
            <div className="flex md:justify-start justify-center my-10">
              <button
                className="bg-black w-full md:w-auto px-8 py-3 rounded-md font-medium text-white hover:bg-gray-800 transition-all duration-300"
                onMouseEnter={() => setHoverText("🔥 Limited Offer!")}
                onMouseLeave={() => setHoverText("Shop Now!")}
              >
                {hoverText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
