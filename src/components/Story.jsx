import React from "react";
import img2 from "../assest/dol-img2.jpeg";
import img3 from "../assest/cart3.jpg";
import img4 from "../assest/cart4.jpg";
import { IoBagHandle } from "react-icons/io5";

export default function InstagramStories() {
  return (
    <div className="w-full px-4 mt-20">
      <div className="max-w-[1240px] mx-auto">
        
        <div className="my-10">
          <h1 className="text-5xl text-slate-800 text-center">Our Instagram Stories</h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[img2, img3, img4, img2].map((image, index) => (
            <div key={index} className="w-full sm:w-24 md:w-48 mx-auto"> {/* Smaller width for small screens (sm:w-24) */}
              <img
                className="w-full h-auto rounded-lg transition-all duration-300 transform hover:scale-110"
                src={image}
                alt="Story"
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-10 my-10 text-center">
          {Array(4).fill("").map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <IoBagHandle size={24} className="my-2 text-gray-700" />
              <h3 className="font-bold text-slate-900 my-1">Free Shipping</h3>
              <p className="text-sm text-slate-500">Free shipping for orders above $30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

