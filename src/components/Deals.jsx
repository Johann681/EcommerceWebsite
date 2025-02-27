import React from "react";
import img2 from "../assest/dol.jpg";

export default function Deals() {
  return (
    <div className="w-full py-12 px-6 md:px-12 bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="flex flex-col justify-center text-left md:pl-12">
          <h1 className="text-4xl md:text-5xl text-slate-800">
            Deals of the Month
          </h1>
          <p className="calibri text-slate-600 mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            nulla, minus quidem ipsam ad iusto! Perferendis officia repellendus
            recusandae consequatur similique, odio iste itaque enim mollitia.
            Ullam, doloremque. Iusto?
          </p>
          <button className="bg-black w-[150px] rounded-md font-medium my-6 py-3 text-white md:ml-0 mx-auto">
            View All Products
          </button>
        </div>
        <img className="w-[350px] mx-auto my-4" src={img2} alt="/" />
      </div>
    </div>
  );
}
