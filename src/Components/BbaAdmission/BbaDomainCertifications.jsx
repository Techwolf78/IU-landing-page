import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";

const certifications = [
  { id: 1, title: "Executive Programme on GST" },
  { id: 2, title: "Certification on Financial Modelling & Financial Analyst" },
  { id: 3, title: "Digital Marketing with AI" },
  { id: 4, title: "Certification course in Import & Export" },
  { id: 5, title: "Stock Techniques" },
  { id: 6, title: "Global Patenting & Product Licensing" },
  { id: 7, title: "Investment Banking" },
  { id: 8, title: "Design Thinking for Innovation" },
  { id: 9, title: "Fintech" },
  { id: 10, title: "Business Analytics" },
  { id: 11, title: "NISM Certifications" },
];

const DomainCertifications = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gray-50   py-12 md:py-16 relative overflow-hidden"
    >
      {/* LOGO */}
      <div className="absolute top-13 right-4 sm:top-6 sm:right-6 lg:top-20 lg:right-10
        w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 opacity-90 z-20">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>

      <div className="w-full mx-auto relative z-10">
        {/* ================= HEADER (GRADIENT ONLY HERE) ================= */}
        <div
          className="w-full text-center mb-10 md:mb-16
          bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F]
          py-10 md:py-14  "
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white
            text-xs sm:text-sm font-semibold rounded-full
            border border-white/20 mb-4">
            CERTIFICATION PROGRAMMES
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3">
            Domain Specific{" "}
            <span className="text-yellow-400">Certifications</span>
          </h2>

          <p className="text-white text-sm sm:text-base max-w-2xl mx-auto">
            Industry-recognized certifications to validate your expertise and
            accelerate your career growth.
          </p>
        </div>

        {/* ================= FIRST 8 CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
          {certifications.slice(0, 8).map((cert, index) => (
            <div
              key={cert.id}
              className={`group relative rounded-full p-[2px]
              bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F]
              hover:shadow-2xl transition-all duration-300
              ${inView ? "animate-slide-in-right" : "opacity-0 translate-x-16"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className=" rounded-full w-full h-full
                flex items-center justify-center text-center
                p-4 min-h-[90px]
                group-hover:scale-[1.03] transition-transform"
              >
                <h3
                  className="text-sm sm:text-base font-semibold text-white
                 "
                >
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ================= LAST 3 CARDS ================= */}
        <div className="flex justify-center mt-6 md:mt-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full">
            {certifications.slice(8).map((cert, index) => (
              <div
                key={cert.id}
                className={`group relative rounded-full p-[2px]
                bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F]
                hover:shadow-2xl transition-all duration-300
                ${inView ? "animate-slide-in-right" : "opacity-0 translate-x-16"}`}
                style={{ animationDelay: `${(index + 8) * 0.1}s` }}
              >
                <div
                  className=" rounded-full w-full h-full
                  flex items-center justify-center text-center
                  p-4 min-h-[80px]
                  group-hover:scale-[1.03] transition-transform"
                >
                  <h3
                    className="text-sm sm:text-base font-semibold text-white
                    "
                  >
                    {cert.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default DomainCertifications;
