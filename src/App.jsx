import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Brochure from "./Pages/Brochure";
import BbaAdmission from "./Pages/BbaAdmission";
import ApplyButtonRight from "./Components/ApplyButtonRight";
import ThankYou from "./Pages/Thankyou";


// Importing the 404 Page
import NotFoundPage from "./Components/NotFoundPage"; // Make sure this is the correct path to your 404 page

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}>
        <ApplyButtonRight />
        <main>
          <Navbar />
          {/* <Brochure /> */}
          <Routes>
            {/* Define routes for all the pages */}
            <Route path="/" element={<BbaAdmission />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
