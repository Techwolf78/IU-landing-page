import React, { useEffect } from "react";
import Image1 from "../../assets/Building.jpg";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaBullhorn,
  FaHandshake,
  FaChartLine,
  FaRegCalendarAlt,
  FaUsers,
  FaRegClipboard,
  FaUserTie,
  FaGraduationCap,
} from "react-icons/fa";

import { gsap } from "gsap";

function BbaAdmissionOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const circles = document.querySelectorAll(".circle");
    const icons = document.querySelectorAll(".icon");

    circles.forEach((circle, index) => {
      const icon = icons[index];

      gsap.set(circle, { opacity: 0, x: -40 });

      circle.parentElement.addEventListener("mouseenter", () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 360, duration: 0.5 });
      });

      circle.parentElement.addEventListener("mouseleave", () => {
        gsap.to(circle, { opacity: 0, x: -40, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.5 });
      });
    });
  }, []);

  const cardData = [
    { icon: FaBullhorn, title: "Industry-Ready Curriculum" },
    { icon: FaHandshake, title: "Consistent Placement Record" },
    { icon: FaRegCalendarAlt, title: "Expert Faculty & Mentorship" },
    { icon: FaChartLine, title: "Guest Lectures & Industry Sessions" },
    { icon: FaUsers, title: "Advanced Infrastructure" },
    { icon: FaRegClipboard, title: "Industry Readiness Programme" },
    { icon: FaUserTie, title: "Widespread Alumni Network" },
    { icon: FaGraduationCap, title: "Experiential Learning Methodology" },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full px-6 md:px-16 py-10 poppins-regular">
        {/* Background Image (Desktop & Tablet only) */}
        <div
          className="hidden md:block absolute inset-0 bg-right bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${Image1})` }}
        />

        {/* Overlay */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F] to-transparent" />

        {/* Content */}
        <div
          className="relative z-10 md:w-2/3 text-[#011E5A] md:text-white"
          data-aos="fade-right"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Top BBA College in{" "}
            <span className="text-[#FECD46] md:text-[#FECD46]">
              India
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 md:text-gray-200 mb-4 leading-relaxed">
            Indira University – SOB Pune stands among the{" "}
              top BBA colleges in India
            , offering an industry-curated curriculum under the Bachelor of
            Business Administration (BBA) programme.
          </p>

          <p className="text-base md:text-lg text-gray-700 md:text-gray-200 leading-relaxed">
            Designed for aspiring students, entrepreneurs, and
            management professionals, our BBA course after 12th provides the
            perfect foundation for future.
          </p>
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden mt-6">
          <img
            src={Image1}
            alt="BBA Programme"
            className="w-full h-[240px] object-container  shadow-md"
          />
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="px-6 md:px-16 py-10 bg-white" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#135883]">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-[#011E5A] p-5 rounded-xl relative
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <item.icon
                size={42}
                className="text-[#FECD46] mb-4 icon"
              />

              <p className="text-white font-semibold text-base md:text-lg">
                {item.title}
              </p>

              <div className="circle absolute -bottom-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BbaAdmissionOverview;
