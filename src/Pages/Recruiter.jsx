import React, { useEffect, useState } from "react";

import logo1 from "../assets/Images/bba-logo/1.jpg";
import logo2 from "../assets/Images/bba-logo/2.jpg";
import logo3 from "../assets/Images/bba-logo/3.jpg";
import logo4 from "../assets/Images/bba-logo/4.jpg";
import logo5 from "../assets/Images/bba-logo/5.jpg";
import logo6 from "../assets/Images/bba-logo/6.jpg";
import logo7 from "../assets/Images/bba-logo/7.jpg";
import logo8 from "../assets/Images/bba-logo/8.jpg";
import logo9 from "../assets/Images/bba-logo/9.jpg";
import logo10 from "../assets/Images/bba-logo/10.jpg";
import logo11 from "../assets/Images/bba-logo/11.jpg";
import logo12 from "../assets/Images/bba-logo/12.jpg";
import logo13 from "../assets/Images/bba-logo/13.jpg";
import logo14 from "../assets/Images/bba-logo/14.jpg";
import logo15 from "../assets/Images/bba-logo/15.jpg";
import logo16 from "../assets/Images/bba-logo/16.jpg";
import logo17 from "../assets/Images/bba-logo/17.jpg";
import logo18 from "../assets/Images/bba-logo/18.jpg";
import logo19 from "../assets/Images/bba-logo/19.jpg";
import logo20 from "../assets/Images/bba-logo/20.jpg";
import logo21 from "../assets/Images/bba-logo/21.jpg";
import logo22 from "../assets/Images/bba-logo/22.jpg";
import logo23 from "../assets/Images/bba-logo/23.jpg";
import logo24 from "../assets/Images/bba-logo/24.jpg";
import logo25 from "../assets/Images/bba-logo/24.jpg";
import logo26 from "../assets/Images/bba-logo/26.jpg";
import logo27 from "../assets/Images/bba-logo/27.jpg";

const CompRecruiter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo11,
    logo12,
    logo13,
    logo10,
    logo18,
    logo22,
    logo14,
    logo15,
    logo16,
    logo17,
    logo19,
    logo20,
    logo21,
    logo23,
    logo24,
    // logo25,
    logo26,
    logo27,
  ];

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    // Initial check
    handleResize();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Dynamic rows - always 3 rows for all screen sizes
  const getRows = () => {
    const logosPerRow = Math.ceil(logos.length / 3);
    return [
      logos.slice(0, logosPerRow),
      logos.slice(logosPerRow, logosPerRow * 2),
      logos.slice(logosPerRow * 2)
    ];
  };

  // Render a single row of logos
  const renderLogoRow = (logosArray, rowIndex, animationDirection = "left") => {
    const isReverse = animationDirection === "right";

    return (
      <div 
        key={`row-${rowIndex}`}
        className="logo-row relative w-full mb-4 md:mb-6 lg:mb-8"
      >
        <div
          className={`logo-row-track flex ${isVisible ? "animate" : ""} ${
            isReverse ? "reverse-animation" : ""
          }`}
        >
          {/* Original logos */}
          {logosArray.map((logo, index) => (
            <div
              key={`row-${rowIndex}-${index}`}
              className="logo-slide flex-none mx-1.5 sm:mx-2 md:mx-3 lg:mx-4
                         bg-white rounded-lg sm:rounded-xl md:rounded-2xl
                         border border-[#2899A4]/30 sm:border-[#2899A4]/40
                         shadow-[0_4px_12px_rgba(40,153,164,0.15)] sm:shadow-[0_6px_20px_rgba(40,153,164,0.25)]
                         transition-all duration-300 ease-in-out
                         hover:shadow-[0_8px_25px_rgba(40,153,164,0.35)] lg:hover:shadow-[0_12px_35px_rgba(40,153,164,0.45)]
                         hover:-translate-y-0.5 sm:hover:-translate-y-1
                         active:scale-95"
            >
              <img
                src={logo}
                alt={`Recruiter Logo ${rowIndex * logosArray.length + index + 1}`}
                className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 
                           max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] xl:max-w-[180px]
                           object-contain p-2 sm:p-3 md:p-4"
                loading="lazy"
              />
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {logosArray.map((logo, index) => (
            <div
              key={`row-${rowIndex}-duplicate-${index}`}
              className="logo-slide flex-none mx-1.5 sm:mx-2 md:mx-3 lg:mx-4
                         bg-white rounded-lg sm:rounded-xl md:rounded-2xl
                         border border-[#2899A4]/30 sm:border-[#2899A4]/40
                         shadow-[0_4px_12px_rgba(40,153,164,0.15)] sm:shadow-[0_6px_20px_rgba(40,153,164,0.25)]
                         transition-all duration-300 ease-in-out
                         hover:shadow-[0_8px_25px_rgba(40,153,164,0.35)] lg:hover:shadow-[0_12px_35px_rgba(40,153,164,0.45)]
                         hover:-translate-y-0.5 sm:hover:-translate-y-1
                         active:scale-95"
            >
              <img
                src={logo}
                alt={`Recruiter Logo ${rowIndex * logosArray.length + index + 1}`}
                className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 
                           max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] xl:max-w-[180px]
                           object-contain p-2 sm:p-3 md:p-4"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const rows = getRows();
  const animationDirections = ["left", "right", "left"];

  return (
    <div className="logo-slider-section py-6 sm:py-8 md:py-10 lg:py-12 roboto-regular overflow-hidden bg-white">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                       font-bold text-[#011E5A] mb-2 md:mb-3 lg:mb-4">
          Top Recruiters
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl 
                     max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto
                     px-2 sm:px-4 md:px-6 lg:px-8">
          Three decades of excellence, thousands of successful careers, and a
          proven track record of transforming students into business leaders.
        </p>
      </div>

      {/* Logo Slider */}
      <div className="logo-slider-container relative w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Render all 3 rows */}
        {rows.map((rowLogos, index) => (
          renderLogoRow(
            rowLogos, 
            index + 1, 
            animationDirections[index]
          )
        ))}

        {/* Fade edges for each row */}
        <div className="absolute left-0 top-0 h-full w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 
                       bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 
                       bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

     
      {/* CSS */}
      <style>{`
        .logo-slider-container {
          padding: 0 8px;
        }

        @media (min-width: 640px) {
          .logo-slider-container {
            padding: 0 12px;
          }
        }

        @media (min-width: 768px) {
          .logo-slider-container {
            padding: 0 16px;
          }
        }

        @media (min-width: 1024px) {
          .logo-slider-container {
            padding: 0 20px;
          }
        }

        .logo-row-track {
          width: fit-content;
          will-change: transform;
        }

        .logo-row-track.animate {
          animation: slideLeft linear infinite;
        }

        .logo-row-track.reverse-animation.animate {
          animation: slideRight linear infinite;
        }

        .logo-row:hover .logo-row-track {
          animation-play-state: paused;
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Mobile (xs - sm) */
        @media (max-width: 639px) {
          .logo-row-track.animate {
            animation-duration: 30s;
          }
          
          .logo-row-track.reverse-animation.animate {
            animation-duration: 28s;
          }
          
          /* Reduce margin for mobile */
          .logo-row {
            margin-bottom: 8px;
          }
        }

        /* Small devices (sm - md) */
        @media (min-width: 640px) and (max-width: 767px) {
          .logo-row:nth-child(1) .logo-row-track.animate {
            animation-duration: 35s;
          }
          
          .logo-row:nth-child(2) .logo-row-track.reverse-animation.animate {
            animation-duration: 32s;
          }
          
          .logo-row:nth-child(3) .logo-row-track.animate {
            animation-duration: 38s;
          }
        }

        /* Tablets (md - lg) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .logo-row:nth-child(1) .logo-row-track.animate {
            animation-duration: 45s;
          }
          
          .logo-row:nth-child(2) .logo-row-track.reverse-animation.animate {
            animation-duration: 42s;
          }
          
          .logo-row:nth-child(3) .logo-row-track.animate {
            animation-duration: 48s;
          }
        }

        /* Desktop (lg - xl) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .logo-row:nth-child(1) .logo-row-track.animate {
            animation-duration: 60s;
          }
          
          .logo-row:nth-child(2) .logo-row-track.reverse-animation.animate {
            animation-duration: 55s;
          }
          
          .logo-row:nth-child(3) .logo-row-track.animate {
            animation-duration: 65s;
          }
        }

        /* Large Desktop (xl+) */
        @media (min-width: 1280px) {
          .logo-row:nth-child(1) .logo-row-track.animate {
            animation-duration: 70s;
          }
          
          .logo-row:nth-child(2) .logo-row-track.reverse-animation.animate {
            animation-duration: 65s;
          }
          
          .logo-row:nth-child(3) .logo-row-track.animate {
            animation-duration: 75s;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .logo-row-track.animate,
          .logo-row-track.reverse-animation.animate {
            animation-duration: 120s !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .logo-slide {
            touch-action: pan-y;
          }
          
          .logo-slide:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
};

export default CompRecruiter;