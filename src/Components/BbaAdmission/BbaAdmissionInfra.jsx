import { useEffect, useState, useRef } from "react";
import img1 from "../../assets/club.jpg";
import img2 from "../../assets/Event.jpg";
import img3 from "../../assets/Facilities.jpg";

const data = [
  {
    id: 1,
    title: "Events",
    description:
      "Experience exciting Annual Fest with diverse cultural activities, concerts, Industry Events including corporate conclaves, executive talks, placement drives, and workshops on leadership, industry readiness, skill development, and Cultural Celebrations featuring festivals, talent shows, fresher's induction, farewell parties, and sports tournaments that create well-rounded BBA professionals.",
    image: img2,
    contentSide: "left", // First: content left, image right
  },
  {
    id: 2,
    title: "Facilities",
    description:
      "Smart classrooms, computer labs, library with e-resources, Innovation and Entrepreneurship Center for startups, AC hostels with Wi-Fi, cafeteria, sports complex, gymnasium, medical center, placement cell, and modern auditorium for comprehensive BBA education in Pune.",
    image: img3,
    contentSide: "right", // Second: content right, image left
  },
  {
    id: 3,
    title: "Student Clubs",
    description:
      "Marketing Club, Finance Club, HR Club, Digital Marketing Club, Innovation & Entrepreneurship Club, International Business Club, Current Affairs Club, IT Club, Sync Cultural Club, Music Club, Media Club and many more; these clubs offer leadership opportunities, industry networking, skill development, and resume-building experience for BBA students.",
    image: img1,
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
          Math.max(0, Math.floor(scrollProgress * data.length)),
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
        <div className="relative container mx-auto px-4 lg:px-8 z-20 w-full">
          <div className="max-w-7xl mx-auto">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-700 ease-out ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-0 absolute inset-x-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh]">
                  {/* Content Section */}
                  <div
                    className={`w-full lg:w-5/12 mb-10 lg:mb-0 ${
                      item.contentSide === "left"
                        ? "lg:order-1"
                        : "lg:order-2"
                    }`}
                  >
                    <div className="max-w-xl">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black text-sm font-semibold rounded-full mb-4">
                        Campus Highlights
                      </span>

                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                        {item.title}
                      </h2>

                      <div
                        className={`w-24 h-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] mb-8 ${
                          item.contentSide === "left"
                            ? "lg:mr-auto"
                            : "lg:ml-auto"
                        }`}
                      ></div>

                      <div className="max-w-2xl">
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div
                    className={`w-full lg:w-6/12 ${
                      item.contentSide === "left"
                        ? "lg:order-2"
                        : "lg:order-1"
                    }`}
                  >
                    <div className="relative">
                      <div className="relative overflow-hidden  shadow-2xl transform transition-transform duration-700 ease-out hover:scale-[1.02]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[400px] lg:h-[500px] object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      </div>
                      
                      {/* Decorative element */}
                      <div
                        className={`absolute -z-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#FCC409]/20 to-[#FFD700]/10 blur-3xl ${
                          item.contentSide === "left"
                            ? "-left-10 -top-10"
                            : "-right-10 -top-10"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 hidden md:flex flex-col gap-4">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-r from-[#FCC409] to-[#FFD700] scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3 md:hidden">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-r from-[#FCC409] to-[#FFD700] scale-125"
                  : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-300 flex flex-col items-center ${
          activeIndex === data.length - 1
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <span className="text-white/70 text-sm mb-2">Scroll down</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-[#FCC409] to-[#FFD700] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}