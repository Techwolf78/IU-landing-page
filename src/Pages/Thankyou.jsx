import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Home, Calendar } from 'lucide-react';

const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    // 1. Set Title and Description
    document.title = "Thank You | BBA Admissions - Indira University Pune";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.content : "";
    if (metaDesc) {
      metaDesc.content = "Thank you for your interest in Indira University Pune BBA programs. Your inquiry has been successfully submitted.";
    }

    // 2. Append Google Ads conversion scripts dynamically
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-16977491177";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16977491177');
      gtag('event', 'conversion', {
        'send_to': 'AW-16977491177/Y_6BCM_mk7YaEOnpv58_'
      });
    `;
    document.head.appendChild(script2);

    // 3. Setup redirect timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = "https://indirauniversity.edu.in/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup scripts and restore original metadata on unmount
    return () => {
      clearInterval(timer);
      if (metaDesc) {
        metaDesc.content = originalDesc;
      }
      if (document.head.contains(script1)) document.head.removeChild(script1);
      if (document.head.contains(script2)) document.head.removeChild(script2);
    };
  }, [navigate]);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleReturnHome = () => {
    window.location.href = "https://indirauniversity.edu.in/";
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#021844] via-[#052968] to-[#0a1128] overflow-hidden px-4">
      {/* Decorative background glow elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#FCC409]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-center text-white animate-fade-in">
        {/* Glowing Animated Success Icon */}
        <div className="relative mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FCC409]/20 to-[#FFD700]/30 border border-[#FCC409]/40 shadow-[0_0_30px_rgba(252,196,9,0.2)]">
          <CheckCircle2 className="w-8 h-8 text-[#FCC409] animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          Application Received!
        </h1>
        
        <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed mb-4">
          Thank you for applying to the BBA program at <span className="text-[#FCC409] font-semibold">Indira University, Pune</span>. 
          Our admissions advisor will connect with you shortly.
        </p>

        {/* Extra Info Box */}
        <div className="bg-white/5 border border-white/5 rounded-xl p-3 mb-4 flex items-center justify-center gap-2.5 text-xs sm:text-sm text-gray-300">
          <Calendar className="w-4 h-4 text-[#FCC409] flex-shrink-0" />
          <span>Admissions open for Academic Year 2026-27</span>
        </div>

        {/* Countdown timer badge */}
        <div className="inline-block px-3.5 py-1 bg-[#FCC409]/10 text-[#FCC409] text-[11px] font-semibold rounded-full border border-[#FCC409]/20 mb-4">
          Redirecting to home page in <span className="font-bold text-xs mx-0.5">{countdown}</span> seconds
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleGoBack}
            className="flex items-center justify-center gap-2 px-5 py-2.5 border border-white/20 text-white text-sm rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
          <button
            onClick={handleReturnHome}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black text-sm font-bold rounded-xl hover:shadow-[0_0_20px_rgba(252,196,9,0.4)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;