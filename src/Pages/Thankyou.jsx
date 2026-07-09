import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Home, Calendar } from 'lucide-react';

const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Thank You | BBA Admissions - Indira University Pune</title>
        <meta name="description" content="Thank you for your interest in Indira University Pune BBA programs. Your inquiry has been successfully submitted." />
        
        {/* Google Ads Conversion Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16977491177"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16977491177');
            gtag('event', 'conversion', {
              'send_to': 'AW-16977491177/Y_6BCM_mk7YaEOnpv58_'
            });
          `}
        </script>
      </Helmet>

      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#021844] via-[#052968] to-[#0a1128] overflow-hidden px-4">
        {/* Decorative background glow elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#FCC409]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 sm:p-12 text-center text-white" data-aos="zoom-in">
          {/* Glowing Animated Success Icon */}
          <div className="relative mx-auto w-24 h-24 mb-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FCC409]/20 to-[#FFD700]/30 border border-[#FCC409]/40 shadow-[0_0_30px_rgba(252,196,9,0.2)]">
            <CheckCircle2 className="w-12 h-12 text-[#FCC409] animate-pulse" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Application Received!
          </h1>
          
          <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed mb-6">
            Thank you for applying to the BBA program at <span className="text-[#FCC409] font-semibold">Indira University, Pune</span>. 
            Our admissions advisor will connect with you shortly.
          </p>

          {/* Extra Info Box */}
          <div className="bg-white/5 border border-white/5 rounded-2xl p-4 mb-8 flex items-center justify-center gap-3 text-sm text-gray-300">
            <Calendar className="w-5 h-5 text-[#FCC409] flex-shrink-0" />
            <span>Admissions open for Academic Year 2026-27</span>
          </div>

          {/* Countdown timer badge */}
          <div className="inline-block px-4 py-1.5 bg-[#FCC409]/10 text-[#FCC409] text-xs font-semibold rounded-full border border-[#FCC409]/20 mb-8">
            Redirecting to home page in <span className="font-bold text-sm mx-0.5">{countdown}</span> seconds
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGoBack}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
            <button
              onClick={handleReturnHome}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(252,196,9,0.4)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              Return Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;