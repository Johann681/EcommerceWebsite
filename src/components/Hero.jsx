import React from "react";
import img1 from "../assest/ghghhg.jpg";
export default function Hero() {
  return (
    <div className="w-full p-5 md:p-1 bg-transparent">
      <div className="max-w-[1340px] mx-auto bg-[#f0eded] p-10 rounded-lg shadow-lg">

        <div className="grid md:grid-cols-2 items-center gap-8">

          <img
            className="w-[400px] mx-auto my-4"
            src={img1}
            alt="Men's Collection"
          />
  

          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-slate-600 text-2xl">Classic Exclusive.</p>
            <h1 className="md:text-7xl text-4xl font-bold py-5">
              Men's Collection
            </h1>
            <p className="text-slate-600 text-2xl">UP TO 40% OFF</p>
  

            <div className="flex md:justify-start justify-center my-10">
              <button className="bg-black w-full md:w-auto px-8 py-3 rounded-md font-medium text-white hover:bg-gray-800 transition">
                Shop Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  