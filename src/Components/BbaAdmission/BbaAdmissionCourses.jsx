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

const specializations = [
  {
    name: "Marketing Management",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: marketingImage,
    description:
      "Develop expertise in digital marketing strategies, brand management, consumer behavior, and market research. This marketing degree programme covers sales management, advertising, marketing analytics, social media marketing, and content strategy. Learn SEO, SEM, marketing automation, and CRM while working on real marketing campaigns. Graduate ready for roles as Brand Manager, Marketing Executive, Product Manager, or Market Research Analyst with skills in integrated marketing communications and customer engagement strategies. ",
    careerOutcomes: [
      "Brand Manager",
      "Digital Marketing Manager",
      "Marketing Research Analyst",
      "Product Manager",
      "Sales Manager",
      "Market Development Manager",
    ],
  },
  {
    name: "Financial Management",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: financialImage,
    description:
      "Learn corporate finance, investment analysis, financial planning, and portfolio management. This finance-focused programme covers financial accounting, financial markets, risk management, financial modeling, and investment banking. Gain expertise in financial statement analysis, budgeting, capital budgeting, and stock market analysis. Prepare for careers as Financial Analyst, Investment Banker, Financial Planner, or Treasury Manager with training in financial software, derivatives trading, and wealth management. ",
    careerOutcomes: [
      "Financial Analyst",
      "Investment Banker",
      "Portfolio Manager",
      "Financial Planning & Analysis",
      "Risk Management Analyst",
      "Corporate Finance Manager ",
    ],
  },
  {
    name: "Human Resource Management",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: hrImage,
    description:
      "Learn talent acquisition, employee engagement, performance management, and organizational behavior. This HR-focused programme covers recruitment strategies, training and development, compensation and benefits, labor laws, and HR analytics. Master HRIS systems, workforce planning, talent management, and employee relations. Graduate ready for roles as HR Manager, Talent Acquisition Specialist, Training Manager, or HR Business Partner with expertise in performance appraisal systems and change management. ",
    careerOutcomes: [
      "HR Manager",
      "Talent Acquisition Manager",
      "Learning & Development Manager",
      "Compensation & Benefits Manager",
      "HR Business Partner",
      "Employee Engagement Manager ",
    ],
  },
  {
    name: "Digital Marketing Management",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: digitalMarketingImage,
    description:
      "Learn SEO, SEM, social media marketing, content marketing, and marketing automation in this tech-driven programme. Gain hands-on experience with Google Analytics, Google Ads, Facebook Ads, Instagram marketing, and e-commerce marketing. Learn conversion rate optimization, influencer marketing, email marketing, and digital advertising strategies. Includes certifications in Google Digital Marketing and HubSpot. Graduate as Digital Marketing Manager, SEO Specialist, Social Media Manager, or Content Strategist. ",
    careerOutcomes: [
      "SEO/SEM Specialist",
      "Social Media Manager",
      "Content Marketing Manager",
      "Performance Marketing Manager",
      "E-commerce Marketing Manager",
      "Growth Hacking Specialist",
    ],
  },

  {
    name: "Banking and Financial Services",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: bankingImage,
    description:
      "Specialize in retail banking, corporate banking, investment banking, and digital banking operations. This industry-aligned programme covers credit management, loan processing, banking regulations, RBI guidelines, and fintech innovations. Learn core banking solutions, mobile banking, treasury operations, trade finance, and banking compliance. Graduate ready for positions in public sector banks, private banks, NBFCs, or fintech companies with expertise in banking technology and relationship management. ",
    careerOutcomes: [
      "Relationship Manager",
      "Credit Analyst",
      "Branch Manager",
      "Treasury Manager",
      "Loan Officer",
      "Wealth Management Advisor",
    ],
  },
  {
    name: "International Business Management",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: internationalBusinessImage,
    description:
      "Integrate international marketing, global finance, international HRM, and cross-border strategy in this comprehensive programme. Study multinational business strategies, global market entry modes, foreign direct investment, and international business ethics. Explore emerging markets, BRICS economies, global entrepreneurship, and international negotiations. Prepare for roles as International Business Manager, Global Strategy Consultant, or Trade Analyst with cultural intelligence and global leadership skills. ",
    careerOutcomes: [
      "International Operations Manager",
      "Global Strategy Consultant",
      "Foreign Trade Analyst",
      "International Procurement Manager",
      "Global Business Development Manager",
      "Regional Business Manager (Asia-Pacific/Middle East/Europe)",
    ],
  },
  {
    name: "Logistics and Supply Chain Management",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: logisticsImage,
    description:
      "Learn supply chain planning, inventory management, warehouse management, procurement, and logistics optimization. This operations-focused programme covers demand forecasting, supply chain analytics, ERP systems, transportation management, and vendor management. Gain training in SAP, lean management, Six Sigma, and supply chain risk management. Graduate as Supply Chain Manager, Logistics Coordinator, Procurement Manager, or Operations Analyst specializing in e-commerce logistics and distribution management. ",
    careerOutcomes: [
      "Supply Chain Manager",
      "Logistics Coordinator",
      "Procurement Manager",
      "Warehouse Manager",
      "Operation Manager",
      "Demand Planning Manager",
    ],
  },
  {
    name: "Innovation and Entrepreneurship",
    duration: "3 Years",
    fees: "₹1,50,000/year",
    image: innovationImage,
    description:
      "Turn business ideas into reality with training in design thinking, lean startup methodology, business model innovation, and venture capital. This startup-focused programme covers entrepreneurial finance, new venture creation, startup funding, and pitch development. Access incubation centers, mentorship from successful entrepreneurs, and startup networking events. Graduate ready to become an entrepreneur, startup founder, innovation consultant, or business development manager with expertise in fundraising strategies and scalable business models. ",
    careerOutcomes: [
      "Startup Founder/Entrepreneur",
      "Business Development Manager",
      "Innovation Consultant",
      "Venture Capital Analyst",
      "Product Innovation Manager",
      "Corporate Innovation Manager",
    ],
  },
];

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeSide = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

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
          Choose from India's most comprehensive range of BBA courses
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

              <p className="text-gray-700 leading-7 mb-8">
                {current.description}
              </p>

              <div className="grid lg:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-semibold mb-4 text-[#b1124a]">
                    Career Opportunities
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {current.careerOutcomes.map((c, i) => (
                      <li key={i} className="flex gap-2">
                        ✔ {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-56 sm:h-64 object-contain"
                />
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
