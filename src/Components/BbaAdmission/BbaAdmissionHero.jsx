import { useState, useEffect, useMemo } from "react";
import backgroundImage2 from "../../assets/IUBanner.avif";
import NPFWidget from "../NPFWidget";

function CompHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = useMemo(() => ["Lead.", "Excel.", "Inspire."], []);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div
      className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat text-white py-12 md:py-0 flex items-center"
      style={{ backgroundImage: `url(${backgroundImage2})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex w-full flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 gap-8 md:gap-10">
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#FCC409]">BBA</span> at Indira University Pune
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-200">
            31 Years of Legacy Giving You the Education You Can Trust
          </p>
          <p className="mt-4 text-xs sm:text-sm md:text-base border border-[#FCC409]/40 bg-[#FCC409]/15 text-[#FCC409] px-3 py-1 font-bold rounded-md inline-block uppercase tracking-wider">
            Admissions Open for 2026-27
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-md bg-black/40 p-4 sm:p-6 rounded-xl shadow-lg border border-white/10 backdrop-blur-sm">
            <NPFWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompHero;
