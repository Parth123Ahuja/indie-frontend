import React, { useState } from "react";

const CircleHover = ({ category }) => {
  // const [isRotating, setIsRotating] = useState(false);

  // const handleMouseEnter = () => setIsRotating(true);
  // const handleMouseLeave = () => setIsRotating(false);

  return (
    <div className="text-center space-y-2">
      {/* <div className="relative w-40 h-40 flex justify-center items-center">
        <div>
          <img
            src={imageSrc}
            alt="image"
            className="m-2 absolute w-full h-full object-cover rounded-full "
          />
          <div
            className={`relative w-44 h-44 flex justify-center items-center rounded-full overflow-hidden border-4 border-dotted border-black transition-transform duration-500 ease-in-out ${
              isRotating ? "animate-spin" : ""
            }`}
            style={{
              animation: isRotating ? "spin 10s linear infinite" : "none",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="relative w-full h-full rounded-full">
              +
            </button>
          </div>
          
          
        </div>
      </div> */}
      <div className="flex justify-center items-center">
      <div className="relative group w-40 h-40">
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-pink-500 transition-transform duration-500 group-hover:animate-spin-slow-reverse"></div>
        <img
          src={category.href}
          alt="Profile"
          className="rounded-full w-full h-full object-cover p-2"
        />
        <button className="text-2xl absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-full m-2">
          +
        </button>
      </div>
    </div>
      <h2>{category.name}</h2>
      <p>{category.size} </p>
    </div>
  );
};

export default CircleHover;
