import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

/* ---------------- FAQ DATA ---------------- */
const FAQ_DATA = [
  {
    question: " What is the eligibility for BBA admission at Indira University?",
    answer: "You need to have passed 10+2 from any recognized board with minimum 45% aggregate. All streams (Commerce, Science, Arts) are eligible.",
  },
  {
    question: " Which entrance exams are accepted for BBA admission?",
    answer: "We accept CUET and conduct our own Indira University Common Entrance Test (IU-CET).",
  },
  {
    question: " What is the BBA course fee at Indira University Pune?",
    answer: "The total fee for the BBA programme is ₹1.5 Lakh, and scholarships are also available.",
  },
  {
    question: " What is the average placement package for BBA graduates?",
    answer: "The average package is ₹4 LPA with highest going up to ₹9 LPA.",
  },
  {
    question: " Can I pursue MBA after BBA from Indira University?",
    answer: "Yes! Our BBA graduates have been placed in top B-schools including and international universities.",
  },
  
  {
    question: " Is work experience required for BBA admission?",
    answer: "No, BBA is an undergraduate programme for students directly after 12th. No work experience is required.",
  },
];

/* ---------------- SUB-COMPONENT ---------------- */

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`h-full border border-gray-100 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col ${
        isOpen ? "shadow-md ring-1 ring-blue-100" : ""
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between px-5 py-4 text-left focus:outline-none flex-shrink-0"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base font-semibold pr-8 transition-colors duration-300 flex-1 ${
            isOpen
              ? "text-[#990000]"
              : "text-gray-800 group-hover:text-[#990000]"
          }`}
        >
          {item.question}
        </span>

        {/* Icon Container */}
        <span
          className={`flex-shrink-0 ml-2 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#990000] text-white rotate-180"
              : "bg-gray-50 text-[#990000] group-hover:bg-[#990000]/10"
          }`}
        >
          <FaArrowDown size={10} />
        </span>
      </button>

      {/* CSS Grid Trick for Height Animation */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out flex-1 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-dashed border-gray-100 pt-3">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

function BbaAdmissionFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-12 py-16 bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-100 blur-3xl mix-blend-multiply filter" />
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-indigo-100 blur-3xl mix-blend-multiply filter" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-white max-w-3xl mx-auto">
            Get answers to the most common questions about BBA admissions
          </p>
        </div>

        {/* 3 Column Grid for FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BbaAdmissionFAQ;