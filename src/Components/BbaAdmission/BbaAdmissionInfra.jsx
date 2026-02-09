import { useEffect, useState, useRef } from "react";
import img1 from "../../assets/club.jpg";
import img2 from "../../assets/Event.jpg";
import img3 from "../../assets/Facilities.jpg";
import img4 from "../../assets/Event.jpg";
import img5 from "../../assets/Event.jpg";
import img6 from "../../assets/Event.jpg";
import { Link } from 'react-scroll';

const data = [
  {
    id: 1,
    title: "Events",
    description:
      "Experience exciting Annual Fest with diverse cultural activities, concerts, Industry Events including corporate conclaves, executive talks, placement drives, and workshops on leadership, industry readiness, skill development, and Cultural Celebrations featuring festivals, talent shows, fresher's induction, farewell parties, and sports tournaments that create well-rounded BBA professionals.",
    images: [img1, img2, img3, img4, img5], // 5 images for 2-1-2 pattern
    contentSide: "left", // First: content left, image right
  },
  {
    id: 2,
    title: "Facilities",
    description:
      "Smart classrooms, computer labs, library with e-resources, Innovation and Entrepreneurship Center for startups, AC hostels with Wi-Fi, cafeteria, sports complex, gymnasium, medical center, placement cell, and modern auditorium for comprehensive BBA education in Pune.",
    images: [img2, img3, img4, img5, img6], // 5 images for 2-1-2 pattern
    contentSide: "left", // Second: content right, image left
  },
  {
    id: 3,
    title: "Student Clubs",
    description:
      "Marketing Club, Finance Club, HR Club, Digital Marketing Club, Innovation & Entrepreneurship Club, International Business Club, Current Affairs Club, IT Club, Sync Cultural Club, Music Club, Media Club and many more; these clubs offer leadership opportunities, industry networking, skill development, and resume-building experience for BBA students.",
    images: [img3, img4, img5, img6, img1], // 5 images for 2-1-2 pattern
    contentSide: "left", // Third: content left, image right
  },
];

export default function CampusFacilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef(0);
  const lastScrollTimeRef = useRef(0);

  // Function for dot click navigation
  const handleDotClick = (index) => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;
    setActiveIndex(index);

    // Smooth scroll to section
    if (sectionRef.current) {
      const section = sectionRef.current;
      const sectionHeight = section.clientHeight;
      const targetScroll =
        section.offsetTop + (index * sectionHeight) / data.length;

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const now = Date.now();
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      // Only update if section is in view and enough time has passed
      if (now - lastScrollTimeRef.current < 800) return;

      if (rect.top <= 0 && rect.bottom >= 0) {
        const scrollProgress = -rect.top / rect.height;
        const newIndex = Math.min(
          data.length - 1,
          Math.max(0, Math.floor(scrollProgress * data.length))
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

  // Handle wheel scroll
  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      // Check if we're inside the section
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const delta = Math.sign(e.deltaY);
        const direction = delta > 0 ? "down" : "up";

        // Prevent default only when at boundaries to avoid locking
        if (
          (direction === "down" && activeIndex === data.length - 1) ||
          (direction === "up" && activeIndex === 0)
        ) {
          return; // Allow normal scroll at boundaries
        }

        e.preventDefault();

        // Calculate next index
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

  // Handle touch events for mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchStartYRef.current - touchEndY;

        // Minimum swipe distance
        if (Math.abs(deltaY) < 50) return;

        const direction = deltaY > 0 ? "down" : "up";

        // Calculate next index
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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
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

  // Reset scrolling flag on mount
  useEffect(() => {
    isScrollingRef.current = false;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58]"
      style={{ height: `${data.length * 100}vh` }}
    >
      {/* Sticky container that stays in view */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Content Container - Inside sticky div */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full">
          <div className="max-w-7xl mx-auto">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-700 ease-out ${
                  activeIndex === index
                    ? "opacity-100 visible"
                    : "opacity-0 invisible absolute inset-x-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh] gap-8 md:gap-12">
                  
                  {/* Content Section - Mobile First: Full width, Desktop: 5/12 */}
                  <div className="w-full lg:w-5/12 order-1 lg:order-1">
                    <div className="max-w-xl mx-auto lg:mx-0">
                      {/* Badge */}
                      <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black text-sm font-semibold rounded-full mb-4 md:mb-6 shadow-lg">
                        Campus Highlights
                      </span>

                      {/* Title */}
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
                        {item.title}
                      </h2>

                      {/* Divider */}
                      <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] mb-6 md:mb-8 rounded-full lg:mr-auto"></div>

                      {/* Content Card */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10 shadow-xl">
                        <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-5 md:mb-6">
                          {item.description}
                        </p>
                        
                        {/* Features list - Mobile: smaller, Desktop: normal */}
                        {/* <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 md:mb-8">
                          {item.id === 1 && (
                            <>
                              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#FCC409]/20 to-[#FFD700]/20 text-white rounded-full text-xs sm:text-sm border border-[#FCC409]/30">Annual Fest</span>
                              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#FCC409]/20 to-[#FFD700]/20 text-white rounded-full text-xs sm:text-sm border border-[#FCC409]/30">Workshops</span>
                              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#FCC409]/20 to-[#FFD700]/20 text-white rounded-full text-xs sm:text-sm border border-[#FCC409]/30">Cultural Events</span>
                            </>
                          )}
                          {item.id === 2 && (
                            <>
                              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#FCC409]/20 to-[#FFD700]/20 text-white rounded-full text-xs sm:text-sm border border-[#FCC409]/30">Smart Classrooms</span>
                              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#FCC409]/20 to-[#FFD700]/20 text-white rounded-full text-xs sm:text-sm border border-[#FCC409]/30">Library</span>
                              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#FCC409]/20 to-[#FFD700]/20 text-white rounded-full text-xs sm:text-sm border border-[#FCC409]/30">Sports Complex</span>
                            </>
                          )}
                          {item.id === 3 && (
                            <>
                              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#FCC409]/20 to-[#FFD700]/20 text-white rounded-full text-xs sm:text-sm border border-[#FCC409]/30">Marketing Club</span>
                              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#FCC409]/20 to-[#FFD700]/20 text-white rounded-full text-xs sm:text-sm border border-[#FCC409]/30">Finance Club</span>
                              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#FCC409]/20 to-[#FFD700]/20 text-white rounded-full text-xs sm:text-sm border border-[#FCC409]/30">Cultural Club</span>
                            </>
                          )}
                        </div> */}
                        
                        {/* Button */}
                     <button 
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black font-semibold rounded-lg hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg text-sm sm:text-base cursor-pointer"
>
  Learn More
</button>
                      </div>
                    </div>
                  </div>

                  {/* Image Grid Section - Mobile First: Full width, Desktop: 7/12 */}
                  <div className="w-full lg:w-7/12 order-2 lg:order-2">
                    <div className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] w-full">
                      
                      {/* Top Row - 2 Images */}
                      <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                        {/* Image 1 */}
                        <div className="relative w-1/2 h-40 sm:h-44 md:h-48 overflow-hidden rounded-lg sm:rounded-xl shadow-lg group">
                          <img
                            src={item.images[0]}
                            alt={`${item.title} 1`}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        {/* Image 2 */}
                        <div className="relative w-1/2 h-40 sm:h-44 md:h-48 overflow-hidden rounded-lg sm:rounded-xl shadow-lg group">
                          <img
                            src={item.images[1]}
                            alt={`${item.title} 2`}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>

                      {/* Middle Row - 1 Big Image */}
                      <div className="relative h-48 sm:h-56 md:h-64 mb-3 sm:mb-4 overflow-hidden rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl group">
                        <img
                          src={item.images[2]}
                          alt={`${item.title} 3`}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white font-semibold text-sm sm:text-base md:text-lg">
                          Featured Image
                        </div>
                      </div>

                      {/* Bottom Row - 2 Images */}
                      <div className="flex gap-3 sm:gap-4">
                        {/* Image 4 */}
                        <div className="relative w-1/2 h-40 sm:h-44 md:h-48 overflow-hidden rounded-lg sm:rounded-xl shadow-lg group">
                          <img
                            src={item.images[3]}
                            alt={`${item.title} 4`}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        {/* Image 5 */}
                        <div className="relative w-1/2 h-40 sm:h-44 md:h-48 overflow-hidden rounded-lg sm:rounded-xl shadow-lg group">
                          <img
                            src={item.images[4]}
                            alt={`${item.title} 5`}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>

                      {/* Decorative elements - Hide on mobile, show on tablet+ */}
                      <div className="hidden md:block absolute -z-10 w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-[#FCC409]/10 to-[#FFD700]/5 blur-2xl md:blur-3xl -left-10 md:-left-20 -top-10 md:-top-20" />
                      <div className="hidden md:block absolute -z-10 w-40 h-40 md:w-60 md:h-60 rounded-full bg-gradient-to-r from-[#990000]/20 to-[#011E5A]/20 blur-xl md:blur-2xl right-5 md:right-10 bottom-5 md:bottom-10" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots - Desktop Only (Right Side) */}
        <div className="hidden lg:flex absolute right-6 xl:right-8 top-1/2 transform -translate-y-1/2 z-30 flex-col gap-3 xl:gap-4">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 xl:w-4 xl:h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                activeIndex === index
                  ? "bg-gradient-to-r from-[#FCC409] to-[#FFD700] scale-125 ring-3 xl:ring-4 ring-[#FCC409]/30"
                  : "bg-white/30 hover:bg-white/50 ring-1 xl:ring-2 ring-white/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {activeIndex === index && (
                <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 bg-black rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Dots - Bottom Center */}
        <div className="lg:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-r from-[#FCC409] to-[#FFD700] scale-125 ring-2 ring-[#FCC409]/50"
                  : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Section Counter - Desktop Only */}
        <div className="hidden lg:block absolute top-6 left-6 xl:top-8 xl:left-8 z-30">
          <div className="text-white/80">
            <span className="text-2xl xl:text-3xl font-bold text-[#FCC409]">
              {activeIndex + 1}
            </span>
            <span className="text-white/60 mx-1 xl:mx-2">/</span>
            <span className="text-base xl:text-lg">{data.length}</span>
          </div>
          <div className="text-white/60 text-xs xl:text-sm mt-0.5">Campus Features</div>
        </div>

        {/* Mobile Section Counter - Top Right */}
        <div className="lg:hidden absolute top-5 right-5 z-30">
          <div className="text-white/80 flex items-center">
            <span className="text-xl font-bold text-[#FCC409]">
              {activeIndex + 1}
            </span>
            <span className="text-white/60 mx-1">/</span>
            <span className="text-sm">{data.length}</span>
          </div>
        </div>
      </div>

      {/* Scroll hint - Mobile & Tablet */}
      <div
        className={`lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-300 flex flex-col items-center ${
          activeIndex === data.length - 1
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-xs sm:text-sm mb-1.5 animate-pulse">
            Swipe up
          </span>
          <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-white/30 rounded-full flex justify-center relative">
            <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-gradient-to-b from-[#FCC409] to-[#FFD700] rounded-full mt-2 sm:mt-3 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Scroll hint - Desktop */}
      <div
        className={`hidden lg:block fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-300 flex flex-col items-center ${
          activeIndex === data.length - 1
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2 animate-pulse">
            Scroll down
          </span>
          <div className="w-7 h-12 xl:w-8 xl:h-14 border-2 border-white/30 rounded-full flex justify-center relative">
            <div className="w-1.5 h-4 xl:w-1.5 xl:h-4 bg-gradient-to-b from-[#FCC409] to-[#FFD700] rounded-full mt-3 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}