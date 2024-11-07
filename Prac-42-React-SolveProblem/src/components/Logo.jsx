import React, { useState, useEffect } from "react";
// import { FaRocket } from "react-icons/fa";

const SwiftLogixLogo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-600 to-purple-700">
      <div
        className={`transition-all duration-1000 ease-in-out transform ${isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-180"}`}
      >
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-yellow-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative px-8 py-6 bg-black rounded-lg leading-none flex items-center">
            {/* <FaRocket className="text-white text-5xl mr-4 transition-all duration-500 ease-in-out transform hover:scale-110" /> */}
            <span className="flex flex-col">
              <span className="text-pink-400 uppercase text-lg font-semibold tracking-wider">SwiftLogix</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiftLogixLogo;