import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
 
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
        <title>Thank You - IU Pune</title>
        <meta name="description" content="Thank you for your interest in IU Pune. Your lead has been successfully captured." />
        {/* Google Ads Conversion Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16977491177"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16977491177');
            gtag('event', 'conversion', {'send_to': 'AW-16977491177/Y_6BCM_mk7YaEOnpv58_'});
          `}
        </script>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <svg className="mx-auto h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-lg text-gray-600 mb-4">
            Your enquiry has been submitted successfully. We will get back to you soon.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Redirecting to home page in {countdown} second{countdown !== 1 ? 's' : ''}...
          </p>
          <div className="flex flex-col space-y-3">
            <button
              onClick={handleGoBack}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={handleReturnHome}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default ThankYou;
 