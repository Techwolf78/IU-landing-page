import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import ApplyButtonRight from "./Components/ApplyButtonRight";
import LoadingSpinner from "./Components/LoadingSpinner";
import ScrollToTop from "./Components/ScrollToTop";

// Lazy loading page-level components
const BbaAdmission = lazy(() => import("./Pages/BbaAdmission"));
const ThankYou = lazy(() => import("./Pages/Thankyou"));
const NotFoundPage = lazy(() => import("./Components/NotFoundPage"));

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}>
        <ApplyButtonRight />
        <ScrollToTop />
        <main>
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Define routes for all the pages */}
              <Route path="/" element={<BbaAdmission />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
          </Suspense>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
