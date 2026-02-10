import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";

// Images
import marketingImage from "../../assets/one.jpg";
import financialImage from "../../assets/two.jpg";
import hrImage from "../../assets/three.jpg";
import logisticsImage from "../../assets/four.jpg";
import internationalBusinessImage from "../../assets/five.jpg";
import bankingImage from "../../assets/six.jpg";
import digitalMarketingImage from "../../assets/sev.jpg";
import innovationImage from "../../assets/eight.jpg";

// Logos
import logo1 from "../../assets/BBA – Marketing/logo/1.jpg";
import logo2 from "../../assets/BBA – Marketing/logo/2.jpg";
import logo3 from "../../assets/BBA – Marketing/logo/3.jpg";
import logo4 from "../../assets/BBA – Marketing/logo/4.jpg";
import logo5 from "../../assets/BBA – Marketing/logo/5.jpg";
import logo6 from "../../assets/BBA – Marketing/logo/6.jpg";
import logo7 from "../../assets/BBA – Marketing/logo/7.jpg";
import logo8 from "../../assets/BBA – Marketing/logo/8.jpg";
import logo9 from "../../assets/BBA – Marketing/logo/9.jpg";
import logo10 from "../../assets/BBA – Marketing/logo/10.jpg";
import logo11 from "../../assets/BBA – Finance/logo/1.jpg";
import logo12 from "../../assets/BBA – Finance/logo/2.jpg";
import logo13 from "../../assets/BBA – Finance/logo/3.jpg";
import logo14 from "../../assets/BBA – Finance/logo/4.jpg";
import logo15 from "../../assets/BBA – Finance/logo/5.jpg";
import logo16 from "../../assets/BBA – Finance/logo/6.jpg";
import logo17 from "../../assets/BBA – Finance/logo/7.jpg";
import logo18 from "../../assets/BBA – Finance/logo/8.jpg";
import logo19 from "../../assets/BBA – Finance/logo/9.jpg";
import logo20 from "../../assets/BBA – Finance/logo/10.jpg";
import logo21 from "../../assets/BBA International Business/logo/1.jpg"
import logo22 from "../../assets/BBA International Business/logo/2.jpg"
import logo23 from "../../assets/BBA International Business/logo/3.jpg"
import logo24 from "../../assets/BBA International Business/logo/4.jpg"
import logo25 from "../../assets/BBA International Business/logo/5.jpg"
import logo26 from "../../assets/BBA International Business/logo/6.jpg"
import logo27 from "../../assets/BBA International Business/logo/7.jpg"
import logo28 from "../../assets/BBA International Business/logo/8.jpg"
import logo29 from "../../assets/BBA International Business/logo/9.jpg"
import logo30 from "../../assets/BBA International Business/logo/10.jpg"
import logo31 from "../../assets/BBA HR/logo/1.jpg";
import logo32 from "../../assets/BBA HR/logo/2.jpg";
import logo33 from "../../assets/BBA HR/logo/3.jpg";
import logo34 from "../../assets/BBA HR/logo/4.jpg";
import logo35 from "../../assets/BBA HR/logo/5.jpg";
import logo36 from "../../assets/BBA HR/logo/6.jpg";
import logo37 from "../../assets/BBA HR/logo/7.jpg";
import logo38 from "../../assets/BBA HR/logo/8.jpg";
import logo39 from "../../assets/BBA HR/logo/9.jpg";
import logo40 from "../../assets/BBA HR/logo/10.jpg";

import logo41 from "../../assets/BBA Logistics & Supply Chain Management/logo/1.jpg";
import logo42 from "../../assets/BBA Logistics & Supply Chain Management/logo/2.jpg";
import logo43 from "../../assets/BBA Logistics & Supply Chain Management/logo/3.jpg";
import logo44 from "../../assets/BBA Logistics & Supply Chain Management/logo/4.jpg";
import logo45 from "../../assets/BBA Logistics & Supply Chain Management/logo/5.jpg";
import logo46 from "../../assets/BBA Logistics & Supply Chain Management/logo/6.jpg";
import logo47 from "../../assets/BBA Logistics & Supply Chain Management/logo/7.jpg";
import logo48 from "../../assets/BBA Logistics & Supply Chain Management/logo/8.jpg";
import logo49 from "../../assets/BBA Logistics & Supply Chain Management/logo/9.jpg";
import logo50 from "../../assets/BBA Logistics & Supply Chain Management/logo/10.jpg";
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
  },
];

function BbaAdmissionCourses() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const current = specializations[selectedIndex];

  return (
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

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* LEFT LIST */}
        <div className="md:col-span-4 flex md:flex-col md:gap-8 overflow-x-auto md:overflow-visible pb-2">
          {specializations.map((item, index) => {
            const active = index === selectedIndex;
            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`whitespace-nowrap px-5 py-3 rounded-full cursor-pointer transition ${
                  active
                    ? "bg-[#fcc409] font-semibold"
                    : "text-gray-600 hover:text-black text-lg"
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
                <span className="bg-gray-100 px-4 py-1 rounded-lg text-sm">
                  Duration: {current.duration}
                </span>
                <span className="bg-gray-100 px-4 py-1 rounded-lg text-sm">
                  Fees: {current.fees}
                </span>
              </div>

              <p className="text-gray-700 leading-7 mb-8">{current.description}</p>

              <div className="mb-10">
                {/* CAREER OPPORTUNITIES – TOP */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-[#b1124a]">
                    Career Opportunities
                  </h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                    {current.careerOutcomes.map((c, i) => (
                      <li key={i} className="flex gap-2 items-center">
                        ✔ {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TOP RECRUITERS */}
                <h4 className="font-semibold mb-4 text-[#b1124a]">
                  Recruiters for {current.name}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
                  {current.logos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center border rounded-xl border-gray-400"
                    >
                      <img
                        src={logo}
                        alt={`logo-${index}`}
                        className="h-14 object-contain hover:grayscale-0 transition "
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="w-full bg-[#b1124a] text-white py-3 rounded-lg font-semibold hover:bg-[#90103d]"
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
  );
}

export default BbaAdmissionCourses;
