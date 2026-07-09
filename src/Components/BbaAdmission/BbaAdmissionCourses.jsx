import React, { useState, useEffect, useCallback } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";

// Images
import marketingImage from "../../assets/one.avif";
import financialImage from "../../assets/two.avif";
import hrImage from "../../assets/three.avif";
import logisticsImage from "../../assets/four.avif";
import internationalBusinessImage from "../../assets/five.avif";
import bankingImage from "../../assets/six.avif";
import digitalMarketingImage from "../../assets/sev.avif";
import innovationImage from "../../assets/eight.avif";

// Logos
import logo1 from "../../assets/BBA – Marketing/logo/1.avif";
import logo2 from "../../assets/BBA – Marketing/logo/2.avif";
import logo3 from "../../assets/BBA – Marketing/logo/3.avif";
import logo4 from "../../assets/BBA – Marketing/logo/4.avif";
import logo5 from "../../assets/BBA – Marketing/logo/5.avif";
import logo6 from "../../assets/BBA – Marketing/logo/6.avif";
import logo7 from "../../assets/BBA – Marketing/logo/7.avif";
import logo8 from "../../assets/BBA – Marketing/logo/8.avif";
import logo9 from "../../assets/BBA – Marketing/logo/9.avif";
import logo10 from "../../assets/BBA – Marketing/logo/10.avif";
import logo11 from "../../assets/BBA – Finance/logo/1.avif";
import logo12 from "../../assets/BBA – Finance/logo/2.avif";
import logo13 from "../../assets/BBA – Finance/logo/3.avif";
import logo14 from "../../assets/BBA – Finance/logo/4.avif";
import logo15 from "../../assets/BBA – Finance/logo/5.avif";
import logo16 from "../../assets/BBA – Finance/logo/6.avif";
import logo17 from "../../assets/BBA – Finance/logo/7.avif";
import logo18 from "../../assets/BBA – Finance/logo/8.avif";
import logo19 from "../../assets/BBA – Finance/logo/9.avif";
import logo20 from "../../assets/BBA – Finance/logo/10.avif";
import logo21 from "../../assets/BBA International Business/logo/1.avif";
import logo22 from "../../assets/BBA International Business/logo/2.avif";
import logo23 from "../../assets/BBA International Business/logo/3.avif";
import logo24 from "../../assets/BBA International Business/logo/4.avif";
import logo25 from "../../assets/BBA International Business/logo/5.avif";
import logo26 from "../../assets/BBA International Business/logo/6.avif";
import logo27 from "../../assets/BBA International Business/logo/7.avif";
import logo28 from "../../assets/BBA International Business/logo/8.avif";
import logo29 from "../../assets/BBA International Business/logo/9.avif";
import logo30 from "../../assets/BBA International Business/logo/10.avif";
import logo31 from "../../assets/BBA HR/logo/1.avif";
import logo32 from "../../assets/BBA HR/logo/2.avif";
import logo33 from "../../assets/BBA HR/logo/3.avif";
import logo34 from "../../assets/BBA HR/logo/4.avif";
import logo35 from "../../assets/BBA HR/logo/5.avif";
import logo36 from "../../assets/BBA HR/logo/6.avif";
import logo37 from "../../assets/BBA HR/logo/7.avif";
import logo38 from "../../assets/BBA HR/logo/8.avif";
import logo39 from "../../assets/BBA HR/logo/9.avif";
import logo40 from "../../assets/BBA HR/logo/10.avif";
import logo41 from "../../assets/BBA Logistics & Supply Chain Management/logo/1.avif";
import logo42 from "../../assets/BBA Logistics & Supply Chain Management/logo/2.avif";
import logo43 from "../../assets/BBA Logistics & Supply Chain Management/logo/3.avif";
import logo44 from "../../assets/BBA Logistics & Supply Chain Management/logo/4.avif";
import logo45 from "../../assets/BBA Logistics & Supply Chain Management/logo/5.avif";
import logo46 from "../../assets/BBA Logistics & Supply Chain Management/logo/6.avif";
import logo47 from "../../assets/BBA Logistics & Supply Chain Management/logo/7.avif";
import logo48 from "../../assets/BBA Logistics & Supply Chain Management/logo/8.avif";
import logo49 from "../../assets/BBA Logistics & Supply Chain Management/logo/9.avif";
import logo50 from "../../assets/BBA Logistics & Supply Chain Management/logo/10.avif";

// MUI
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// Widget
import NPFWidget from "../../Components/NPFWidget";

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

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeSide = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const specializations = [
  {
    name: "Marketing Management",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: marketingImage,
    description:
      "Develop expertise in digital marketing strategies, brand management, consumer behavior, and market research...",
    careerOutcomes: [
      "Brand Manager",
      "Digital Marketing Manager",
      "Marketing Research Analyst",
      "Product Manager",
      "Sales Manager",
      "Market Development Manager",
    ],
    logos: [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10],
    showGlobalComponents: false,
  },
  {
    name: "Financial Management",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: financialImage,
    description: "Learn corporate finance, investment analysis, financial planning...",
    careerOutcomes: [
      "Financial Analyst",
      "Investment Banker",
      "Portfolio Manager",
      "Financial Planning & Analysis",
      "Risk Management Analyst",
      "Corporate Finance Manager",
    ],
    logos: [logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20],
    showGlobalComponents: false,
  },
  {
    name: "Human Resource Management",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: hrImage,
    description: "Learn talent acquisition, employee engagement, performance management...",
    careerOutcomes: [
      "HR Manager",
      "Talent Acquisition Manager",
      "Learning & Development Manager",
      "Compensation & Benefits Manager",
      "HR Business Partner",
      "Employee Engagement Manager",
    ],
    logos: [logo31, logo32, logo33, logo34, logo35, logo36, logo37, logo38, logo39, logo40],
    showGlobalComponents: false,
  },
  {
    name: "Digital Marketing Management",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: digitalMarketingImage,
    description: "Learn SEO, SEM, social media marketing, content marketing...",
    careerOutcomes: [
      "SEO/SEM Specialist",
      "Social Media Manager",
      "Content Marketing Manager",
      "Performance Marketing Manager",
      "E-commerce Marketing Manager",
      "Growth Hacking Specialist",
    ],
    logos: [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10],
    showGlobalComponents: false,
  },
  {
    name: "Banking and Financial Services",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: bankingImage,
    description: "Specialize in retail banking, corporate banking, investment banking...",
    careerOutcomes: [
      "Relationship Manager",
      "Credit Analyst",
      "Branch Manager",
      "Treasury Manager",
      "Loan Officer",
      "Wealth Management Advisor",
    ],
    logos: [logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20],
    showGlobalComponents: false,
  },
  {
    name: "International Business Management",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: internationalBusinessImage,
    description: "Integrate international marketing, global finance, international HRM...",
    careerOutcomes: [
      "International Operations Manager",
      "Global Strategy Consultant",
      "Foreign Trade Analyst",
      "International Procurement Manager",
      "Global Business Development Manager",
      "Regional Business Manager",
    ],
    logos: [logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30],
    showGlobalComponents: false,
  },
  {
    name: "Logistics and Supply Chain Management",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: logisticsImage,
    description: "Learn supply chain planning, inventory management, warehouse management...",
    careerOutcomes: [
      "Supply Chain Manager",
      "Logistics Coordinator",
      "Procurement Manager",
      "Warehouse Manager",
      "Operation Manager",
      "Demand Planning Manager",
    ],
    logos: [logo41, logo42, logo43, logo44, logo45, logo46, logo47, logo48, logo49, logo50],
    showGlobalComponents: false,
  },
  {
    name: "Innovation and Entrepreneurship",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: innovationImage,
    description: "Turn business ideas into reality with training in design thinking...",
    careerOutcomes: [
      "Startup Founder/Entrepreneur",
      "Business Development Manager",
      "Innovation Consultant",
      "Venture Capital Analyst",
      "Product Innovation Manager",
      "Corporate Innovation Manager",
    ],
    logos: [logo41, logo42, logo43, logo44, logo45, logo46, logo47, logo48, logo49, logo50],
    showGlobalComponents: false,
  },
  /* {
    name: "Global Immersion Programme",
    duration: "3 Years",
    fees: "Year 1: ₹3,50,000 | Year 2 & 3: ₹1,75,000/year",
    image: internationalBusinessImage,
    description: "Experience international business education with our exclusive Global Immersion Programme",
    careerOutcomes: [
      "Consulting and Advisory",
      "Financial Services",
      "Entrepreneurship",
      "Further Education Pathways",
      "International Business Roles",
      "Multinational Corporation Positions",
    ],
    logos: [logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30],
    showGlobalComponents: true,
    globalComponents: {
      title: "Exclusive Global Immersion Programme Components",
      items: [
        "Korean Language Training",
        "International Internship at Korea University"
      ],
      included: [
        "International Travel: Airfare to and from South Korea",
        "Visa Processing: Complete visa documentation and charges",
        "Accommodation: Two weeks' comfortable lodging near Korea University",
        "Academic Materials: Programme documentation and resources",
        "Certification: Official Korea University internship completion certificate",
        "Professional Networking: Access to Korea University alumni networks"
      ],
      importantNote: "Food expenses during the South Korea internship are to be borne by the student, allowing flexibility in dining choices."
    }
  }, */
];

function BbaAdmissionCourses() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const current = specializations[selectedIndex];
  const logosToShow = current.logos;
  const itemsPerSlide = 5; // Show 5 logos per slide on desktop, adjust with CSS for mobile

  // Calculate total slides
  const totalSlides = Math.ceil(logosToShow.length / itemsPerSlide);

  // Auto slide interval
  useEffect(() => {
    if (!current.showGlobalComponents) return; // Only for global immersion
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [current.showGlobalComponents, totalSlides]);

  // Reset slide when specialization changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedIndex]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  return (
    <>
    <motion.div className="px-4 sm:px-8 md:px-16 py-12 bg-white poppins-regular">
      {/* Heading */}
      <motion.div variants={fadeUp} className="mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Explore BBA Specializations
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Choose from the range of most comprehensive BBA courses available in
          Maharashtra.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        {/* LEFT LIST */}
        <div className="md:col-span-4 flex md:flex-col md:gap-4 overflow-x-auto md:overflow-visible pb-2 scrollbar-none">
          {specializations.map((item, index) => {
            const active = index === selectedIndex;
            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`whitespace-nowrap px-4 py-2 md:px-5 md:py-3 rounded-full cursor-pointer transition text-sm md:text-lg ${
                  active
                    ? "bg-[#fcc409] font-semibold text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.name}
              </div>
            );
          })}
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              variants={fadeSide}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              <h3 className="text-xl sm:text-3xl font-bold text-[#b1124a] mb-4">
                {current.name}
              </h3>

              <div className="flex flex-wrap gap-3 mb-5">
                <span className="bg-gray-100 px-4 py-1 rounded-lg text-xs sm:text-sm">
                  Duration: {current.duration}
                </span>
                <span className="bg-gray-100 px-4 py-1 rounded-lg text-xs sm:text-sm">
                  Fees: {current.fees}
                </span>
              </div>

              <p className="text-gray-700 leading-7 m-1 text-sm sm:text-base">{current.description}</p>

              {/* Global Immersion Programme Components */}
              {current.showGlobalComponents && (
                <div className="mb-8">
                  <h4 className="font-semibold text-lg sm:text-xl mb-4 text-[#b1124a]">
                    {current.globalComponents.title}
                  </h4>
                  
                  {/* Components List */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-3">
                      {current.globalComponents.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-[#b1124a]/10 px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-base sm:text-lg mb-2">
                      What's Included in Global Immersion Fee?
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                      {current.globalComponents.included.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold mt-1">✔</span>
                          <span className="text-xs sm:text-sm md:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important Note */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-md">
                    <p className="text-xs sm:text-sm text-gray-700">
                      <span className="font-semibold">Important Note:</span> {current.globalComponents.importantNote}
                    </p>
                  </div>
                </div>
              )}

              <div className="mb-10">
                {/* CAREER OPPORTUNITIES – TOP */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-[#b1124a] text-base sm:text-lg">
                    Career Opportunities
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm md:text-base">
                    {current.careerOutcomes.map((c, i) => (
                      <li key={i} className="flex gap-2 items-center">
                        ✔ {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TOP RECRUITERS */}
                <h4 className="font-semibold mb-4 text-[#b1124a] text-base sm:text-lg">
                  Recruiters for {current.name}
                </h4>
                <div className="overflow-hidden relative">
                  {current.showGlobalComponents ? (
                    // 🔥 GLOBAL IMMERSION → DOT SLIDER
                    <div className="relative">
                      <div className="overflow-hidden">
                        <div 
                          className="flex transition-transform duration-500 ease-in-out"
                          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div 
                              key={slideIndex} 
                              className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-1"
                            >
                              {logosToShow
                                .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                                .map((logo, idx) => (
                                  <div
                                    key={idx}
                                    className="flex justify-center items-center border rounded-xl border-gray-300 px-4 py-2 bg-white min-w-0"
                                  >
                                    <img
                                      src={logo}
                                      alt={`recruiter-${slideIndex}-${idx}`}
                                      className="h-8 md:h-12 object-contain"
                                    />
                                  </div>
                                ))}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Dot Indicators */}
                      {totalSlides > 1 && (
                        <div className="flex justify-center gap-2 mt-4">
                          {Array.from({ length: totalSlides }).map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => goToSlide(idx)}
                              className={`transition-all duration-300 rounded-full ${
                                currentSlide === idx
                                  ? "w-8 h-2 bg-[#b1124a]"
                                  : "w-2 h-2 bg-gray-400 hover:bg-gray-500"
                              }`}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // ✅ NORMAL COURSES → RESPONSIVE ROW / GRID
                    <div className="flex md:grid md:grid-cols-5 overflow-x-auto md:overflow-visible gap-3 pb-2 scrollbar-none">
                      {current.logos.map((logo, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-28 md:w-auto flex justify-center items-center border rounded-xl border-gray-300 px-3 py-2 bg-white"
                        >
                          <img
                            src={logo}
                            alt={`recruiter-${index}`}
                            className="h-8 md:h-12 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="w-full bg-[#b1124a] text-white py-3 rounded-lg font-semibold hover:bg-[#90103d] transition-colors text-sm sm:text-base"
              >
                Apply Now for {current.name}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <NPFWidget />
        </Box>
      </Modal>

      <ToastContainer position="top-center" autoClose={3000} />
    </motion.div>
    </>
  );
}

export default BbaAdmissionCourses;