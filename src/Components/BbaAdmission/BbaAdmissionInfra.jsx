import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import NPFWidget from "../NPFWidget";

import img1 from "../../assets/event2.avif";
import img2 from "../../assets/event3.avif";
import img3 from "../../assets/event5.avif";
import img4 from "../../assets/event4.avif";
import img5 from "../../assets/event1.avif";
import img6 from "../../assets/facilities2.avif";
import img7 from "../../assets/facilities3.avif";
import img8 from "../../assets/facilities5.avif";
import img9 from "../../assets/facilities4.avif";
import img10 from "../../assets/facilities1.avif";
import img11 from "../../assets/club2.avif";
import img12 from "../../assets/club3.avif";
import img13 from "../../assets/club5.avif";
import img14 from "../../assets/club4.avif";
import img15 from "../../assets/club1.avif";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: "12px",
};

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
  const [isDesktop, setIsDesktop] = useState(false);
  const [open, setOpen] = useState(false);
  const sectionRef = useRef(null);

  // Detect screen size properly
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Track scroll position to change slides naturally without scroll-hijacking
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Calculate how far the section has scrolled relative to the viewport
      const totalScrollableHeight = rect.height - viewHeight;
      const currentScroll = -rect.top;
      
      if (currentScroll >= 0 && currentScroll <= totalScrollableHeight) {
        // Calculate progress ratio (from 0 to 1)
        const progress = currentScroll / totalScrollableHeight;
        
        // Map progress to active index (0 to data.length - 1)
        const rawIndex = Math.floor(progress * data.length);
        const newIndex = Math.max(0, Math.min(data.length - 1, rawIndex));
        
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58] py-10"
      style={{
        height: isDesktop ? `${data.length * 100}vh` : "auto",
      }}
    >
      {/* ================= DESKTOP ================= */}
      {isDesktop && (
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-6 py-6">
          {/* Main Section Header */}
          <div className="text-center mb-4 z-30">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Campus <span className="text-[#FCC409]">Highlights</span>
            </h2>
          </div>

          <div className="container mx-auto w-full max-w-7xl relative flex-grow flex items-center">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-700 w-full ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="flex items-center justify-between gap-8 min-h-[60vh]">
                  {/* Content */}
                  <div className="w-5/12">
                    <h2 className="text-4xl font-bold mb-3 text-white">
                      {item.title}
                    </h2>

                    <div className="w-20 h-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] mb-5 rounded-full"></div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
                      <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <button
                        onClick={() => setOpen(true)}
                        className="px-6 py-3 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black font-semibold rounded-lg shadow-lg"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Images */}
                  <div className="w-7/12 space-y-4">
                    <div className="flex gap-4">
                      <img src={item.images[0]} className="w-1/2 h-36 object-cover rounded-xl" />
                      <img src={item.images[1]} className="w-1/2 h-36 object-cover rounded-xl" />
                    </div>

                    <img
                      src={item.images[2]}
                      className="w-full h-52 object-cover rounded-2xl"
                      style={{ objectPosition: 'top' }}
                    />

                    <div className="flex gap-4">
                      <img src={item.images[3]} className="w-1/2 h-36 object-cover rounded-xl" />
                      <img
                        src={item.images[4]}
                        className="w-1/2 h-36 object-cover rounded-xl"
                        style={item.id === 1 ? { objectPosition: 'top' } : undefined}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= MOBILE ================= */}
      {!isDesktop && (
        <div className="container mx-auto px-4 py-6 space-y-12">
          {/* Main Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white">
              Campus <span className="text-[#FCC409]">Highlights</span>
            </h2>
          </div>

          {data.map((item) => (
            <div key={item.id} className="flex flex-col gap-5">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {item.title}
                </h3>

                <div className="w-16 h-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] mb-4 rounded-full"></div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 shadow-xl">
                  <p className="text-sm text-white/90 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <button
                    onClick={() => setOpen(true)}
                    className="w-full px-5 py-2.5 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black font-semibold rounded-lg shadow-lg"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                {item.images.map((img, idx) => {
                  const isTargetImage = idx === 2 || (item.id === 1 && idx === 4);
                  return (
                    <img
                      key={idx}
                      src={img}
                      alt={`${item.title}-${idx}`}
                      className="w-48 h-32 flex-shrink-0 object-cover rounded-lg shadow-md"
                      style={isTargetImage ? { objectPosition: 'top' } : undefined}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <NPFWidget />
        </Box>
      </Modal>
    </section>
  );
}