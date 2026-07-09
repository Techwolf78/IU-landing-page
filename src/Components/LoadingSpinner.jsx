import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-8">
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-t-[#b1124a] border-r-[#b1124a]/30 border-b-[#b1124a]/10 border-l-[#b1124a]/50 animate-spin"></div>
        {/* Inner Ring (counter-spinning) */}
        <div className="absolute inset-2 rounded-full border-4 border-b-[#fcc409] border-t-[#fcc409]/30 border-r-[#fcc409]/10 border-l-[#fcc409]/50 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      <p className="mt-4 text-[#b1124a] font-semibold text-lg animate-pulse tracking-wide">
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;
