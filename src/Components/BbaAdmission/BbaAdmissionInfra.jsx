import { useEffect, useState, useRef } from "react";
import img1 from "../../assets/event2.jpg";
import img2 from "../../assets/event3.jpg";
import img3 from "../../assets/event5.jpg";
import img4 from "../../assets/event4.jpg";
import img5 from "../../assets/event1.jpg";
import img6 from "../../assets/facilities2.jpg";
import img7 from "../../assets/facilities3.jpg";
import img8 from "../../assets/facilities5.jpg";
import img9 from "../../assets/facilities4.jpg";
import img10 from "../../assets/facilities1.jpg";
import img11 from "../../assets/club2.jpg";
import img12 from "../../assets/club3.jpg";
import img13 from "../../assets/club5.jpg";
import img14 from "../../assets/club4.jpg";
import img15 from "../../assets/club1.jpg";

const data = [
  {
    id: 1,
    title: "Events",
    description:
      "Experience exciting Annual Fest with diverse cultural activities, concerts, Industry Events including corporate conclaves, executive talks, placement drives, and workshops on leadership, industry readiness, skill development, and Cultural Celebrations featuring festivals, talent shows, fresher's induction, farewell parties, and sports tournaments that create well-rounded BBA professionals.",
    images: [img1, img2, img3, img4, img5],
    contentSide: "left",
  },
  {
    id: 2,
    title: "Facilities",
    description:
      "Smart classrooms, computer labs, library with e-resources, Innovation and Entrepreneurship Center for startups, AC hostels with Wi-Fi, cafeteria, sports complex, gymnasium, medical center, placement cell, and modern auditorium for comprehensive BBA education in Pune.",
    images: [img6, img7, img8, img9, img10],
    contentSide: "left",
  },
  {
    id: 3,
    title: "Student Clubs",
    description:
      "Marketing Club, Finance Club, HR Club, Digital Marketing Club, Innovation & Entrepreneurship Club, International Business Club, Current Affairs Club, IT Club, Sync Cultural Club, Music Club, Media Club and many more; these clubs offer leadership opportunities, industry networking, skill development, and resume-building experience for BBA students.",
    images: [img11, img12, img13, img14, img15],
    contentSide: "left",
  },
];

export default function CampusFacilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef(0);
  const lastScrollTimeRef = useRef(0);

  const handleDotClick = (index) => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;
    setActiveIndex(index);

    if (sectionRef.current) {
      const section = sectionRef.current;
      const sectionHeight = window.innerHeight;
      const targetScroll = section.offsetTop + (index * sectionHeight);

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const now = Date.now();
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      if (now - lastScrollTimeRef.current < 800) return;

      if (rect.top <= 100 && rect.bottom >= 100) {
        const scrollProgress = -rect.top / window.innerHeight;
        const newIndex = Math.min(
          data.length - 1,
          Math.max(0, Math.floor(scrollProgress))
        );

        if (newIndex !== activeIndex) {
          lastScrollTimeRef.current = now;
          setActiveIndex(newIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top <= 100 && rect.bottom >= 100) {
        const delta = Math.sign(e.deltaY);
        const direction = delta > 0 ? "down" : "up";

        if (
          (direction === "down" && activeIndex === data.length - 1) ||
          (direction === "up" && activeIndex === 0)
        ) {
          return;
        }

        e.preventDefault();

        let newIndex = activeIndex;
        if (delta > 0) {
          newIndex = Math.min(data.length - 1, activeIndex + 1);
        } else if (delta < 0) {
          newIndex = Math.max(0, activeIndex - 1);
        }

        if (newIndex !== activeIndex) {
          handleDotClick(newIndex);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);

  useEffect(() => {
    const handleTouchStart = (e) => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top <= 100 && rect.bottom >= 100) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top <= 100 && rect.bottom >= 100) {
        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchStartYRef.current - touchEndY;

        if (Math.abs(deltaY) < 30) return;

        const direction = deltaY > 0 ? "down" : "up";

        let newIndex = activeIndex;
        if (direction === "down") {
          newIndex = Math.min(data.length - 1, activeIndex + 1);
        } else {
          newIndex = Math.max(0, activeIndex - 1);
        }

        if (newIndex !== activeIndex) {
          handleDotClick(newIndex);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top <= 100 && rect.bottom >= 100) {
        let newIndex = activeIndex;

        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          newIndex = Math.min(data.length - 1, activeIndex + 1);
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          newIndex = Math.max(0, activeIndex - 1);
        } else {
          return;
        }

        if (newIndex !== activeIndex) {
          handleDotClick(newIndex);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  useEffect(() => {
    isScrollingRef.current = false;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58]"
      style={{ height: `${data.length * 100}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-y-auto">
        {/* Content Container */}
        <div className="relative container mx-auto z-20 w-full h-full px-4 sm:px-6 py-4 sm:py-6">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ease-out h-full flex items-center ${
                activeIndex === index
                  ? "opacity-100 visible"
                  : "opacity-0 invisible absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center w-full h-full gap-4 md:gap-12">
                {/* Content Section */}
                <div
                  className={`w-full lg:w-5/13 ${
                    item.contentSide === "right" ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="max-w-xl mx-auto lg:mx-0">
                    {/* Badge */}
                    <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black text-xs sm:text-sm font-semibold rounded-full mb-2 sm:mb-3 md:mb-4 shadow-lg">
                      Campus Highlights
                    </span>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight">
                      {item.title}
                    </h2>

                    {/* Divider */}
                    <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] mb-3 sm:mb-4 md:mb-5 lg:mb-6 rounded-full lg:mr-auto"></div>

                    {/* Content Card - Full text visible on mobile */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-white/10 shadow-xl">
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed whitespace-normal break-words">
                        {item.description}
                      </p>

                      {/* Button */}
                      <button
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="w-full sm:w-auto mt-3 sm:mt-4 px-4 sm:px-5 py-2 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black font-semibold rounded-lg hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg text-xs sm:text-sm md:text-base lg:text-lg cursor-pointer"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image Grid Section - Smaller on mobile */}
                <div
                  className={`w-full lg:w-7/16 ${
                    item.contentSide === "right" ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative h-[180px] sm:h-[220px] md:h-[300px] lg:h-[450px] xl:h-[500px] w-full">
                    {/* Top Row - 2 Images */}
                    <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                      <div className="relative w-1/2 h-14 sm:h-16 md:h-20 lg:h-32 xl:h-36 overflow-hidden rounded-md sm:rounded-lg md:rounded-xl shadow-lg group">
                        <img
                          src={item.images[0]}
                          alt={`${item.title} 1`}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="relative w-1/2 h-14 sm:h-16 md:h-20 lg:h-32 xl:h-36 overflow-hidden rounded-md sm:rounded-lg md:rounded-xl shadow-lg group">
                        <img
                          src={item.images[1]}
                          alt={`${item.title} 2`}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Middle Row - 1 Big Image */}
                    <div className="relative h-20 sm:h-24 md:h-32 lg:h-44 xl:h-48 mb-1 sm:mb-2 md:mb-3 lg:mb-4 overflow-hidden rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg group">
                      <img
                        src={item.images[2]}
                        alt={`${item.title} 3`}
                        className="w-full h-full object-container transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Bottom Row - 2 Images */}
                    <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                      <div className="relative w-1/2 h-14 sm:h-16 md:h-20 lg:h-32 xl:h-36 overflow-hidden rounded-md sm:rounded-lg md:rounded-xl shadow-lg group">
                        <img
                          src={item.images[3]}
                          alt={`${item.title} 4`}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="relative w-1/2 h-14 sm:h-16 md:h-20 lg:h-32 xl:h-36 overflow-hidden rounded-md sm:rounded-lg md:rounded-xl shadow-lg group">
                        <img
                          src={item.images[4]}
                          alt={`${item.title} 5`}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots - Desktop */}
        <div className="hidden lg:flex absolute right-4 xl:right-8 2xl:right-12 top-1/2 transform -translate-y-1/2 z-30 flex-col gap-3 xl:gap-4">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 rounded-full transition-all duration-300 flex items-center justify-center ${
                activeIndex === index
                  ? "bg-gradient-to-r from-[#FCC409] to-[#FFD700] scale-125 ring-3 xl:ring-4 ring-[#FCC409]/30"
                  : "bg-white/30 hover:bg-white/50 ring-1 xl:ring-2 ring-white/20"
              }`}
            >
              {activeIndex === index && (
                <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 2xl:w-2.5 2xl:h-2.5 bg-black rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Dots */}
        <div className="lg:hidden absolute bottom-3 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-r from-[#FCC409] to-[#FFD700] scale-125 ring-2 ring-[#FCC409]/50"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Mobile Counter */}
        <div className="lg:hidden absolute top-3 right-3 sm:top-4 sm:right-4 z-30">
          <div className="text-white/80 flex items-center">
            <span className="text-sm sm:text-base font-bold text-[#FCC409]">
              {activeIndex + 1}
            </span>
            <span className="text-white/60 mx-1">/</span>
            <span className="text-xs sm:text-sm">{data.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}