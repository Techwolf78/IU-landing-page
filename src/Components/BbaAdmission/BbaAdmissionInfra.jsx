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
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef(null);
  const isScrollingRef = useRef(false);

  // Detect screen size properly
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Smooth desktop wheel scroll
  useEffect(() => {
    if (!isDesktop) return;

    const handleWheel = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        e.preventDefault();

        let newIndex = activeIndex;
        if (e.deltaY > 0) {
          newIndex = Math.min(data.length - 1, activeIndex + 1);
        } else {
          newIndex = Math.max(0, activeIndex - 1);
        }

        if (newIndex !== activeIndex) {
          isScrollingRef.current = true;
          setActiveIndex(newIndex);
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 700);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex, isDesktop]);

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
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6">
          <div className="container mx-auto w-full max-w-7xl relative">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-700 ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="flex items-center justify-between gap-8 min-h-[70vh]">
                  {/* Content */}
                  <div className="w-5/12">
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black text-sm font-semibold rounded-full mb-4 shadow-lg">
                      Campus Highlights
                    </span>

                    <h2 className="text-5xl font-bold mb-4 text-white">
                      {item.title}
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] mb-6 rounded-full"></div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                      <p className="text-lg text-white/90 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <button className="px-6 py-3 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black font-semibold rounded-lg shadow-lg">
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Images */}
                  <div className="w-7/12 space-y-4">
                    <div className="flex gap-4">
                      <img src={item.images[0]} className="w-1/2 h-40 object-cover rounded-xl" />
                      <img src={item.images[1]} className="w-1/2 h-40 object-cover rounded-xl" />
                    </div>

                    <img src={item.images[2]} className="w-full h-60 object-cover rounded-2xl" />

                    <div className="flex gap-4">
                      <img src={item.images[3]} className="w-1/2 h-40 object-cover rounded-xl" />
                      <img src={item.images[4]} className="w-1/2 h-40 object-cover rounded-xl" />
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
        <div className="container mx-auto px-4 space-y-16">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col gap-6">
              <div>
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black text-sm font-semibold rounded-full mb-4 shadow-lg">
                  Campus Highlights
                </span>

                <h2 className="text-3xl font-bold mb-4 text-white">
                  {item.title}
                </h2>

                <div className="w-20 h-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] mb-6 rounded-full"></div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 shadow-xl">
                  <p className="text-base text-white/90 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <button className="w-full px-5 py-2.5 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black font-semibold rounded-lg shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <img src={item.images[0]} className="w-1/2 h-32 object-cover rounded-lg" />
                  <img src={item.images[1]} className="w-1/2 h-32 object-cover rounded-lg" />
                </div>

                <img src={item.images[2]} className="w-full h-44 object-cover rounded-xl" />

                <div className="flex gap-3">
                  <img src={item.images[3]} className="w-1/2 h-32 object-cover rounded-lg" />
                  <img src={item.images[4]} className="w-1/2 h-32 object-cover rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}