import React from "react";

// Import images
import logo from "../assets/IULogo.png";

function Navbar() {
  const pulseKeyframes = `
    @keyframes pulseText {
      0% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7);
      }
      50% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.8);
      }
      100% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7);
      }
    }
  `;

  return (
    <>
      <style>{pulseKeyframes}</style>

      <nav className="bg-gray-900 shadow-lg w-full">
        {/* Mobile/Tablet Layout (md se chhota) */}
        <div className="md:hidden">
          <div className="flex flex-col items-center py-3 px-4">
            
            {/* Top Row - Logos */}
            <div className="flex justify-between w-full items-center mb-2">
              {/* Left Logo */}
              <div className="flex-shrink-0">
                <a href="/">
                  <img
                    src={logo}
                    alt="Left Logo"
                    className="h-auto w-20"
                  />
                </a>
              </div>

          
            </div>

            {/* Center Text - Mobile */}
            <div className="text-center w-full">
              <h1 className="text-white text-xl font-bold animate-pulseText px-2 leading-tight">
                  SCHOOL OF BUSINESS<br />(INDIRA UNIVERSITY)
              </h1>
            </div>
          </div>
        </div>

        {/* Desktop Layout (md aur bada) */}
        <div className="hidden md:block">
          <div className="mx-auto flex items-center justify-between px-4 md:px-8 lg:px-16 py-3 md:py-4">
            
            {/* LEFT LOGO */}
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  src={logo}
                  alt="Left Logo"
                  className="h-auto w-28 lg:w-36 xl:w-42"
                />
              </a>
            </div>

            {/* CENTER TEXT */}
            <div className="flex-grow flex items-center justify-center text-center px-2 md:px-4">
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold animate-pulseText whitespace-nowrap">
                SCHOOL OF BUSINESS (INDIRA UNIVERSITY)
              </h1>
            </div>


          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;