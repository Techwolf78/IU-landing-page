import React, { useState } from "react";
import brochureImage from "../assets/Images/3d-brochure.avif";
import { FaRegCommentDots, FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Brochure = () => {
  const [isBrochureVisible, setIsBrochureVisible] = useState(true);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseBrochure = (e) => {
    e.stopPropagation();
    setIsBrochureVisible(false);
  };

  const handleBrochureClick = () => {
    const link = document.createElement("a");
    link.href = "/brochure/BBA-Brochure.pdf";
    link.download = "BBA-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Brochure downloaded successfully!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="fixed bottom-4 left-2 right-2 z-50 flex justify-between items-center">
        {/* Chat bubble */}
        <div
          className="bg-[#007bff] p-3 rounded-full shadow-lg cursor-pointer animate-bounce"
          onClick={handleScrollToTop}
        >
          <FaRegCommentDots size={24} className="text-white" />
        </div>

        {/* Brochure */}
        {isBrochureVisible && (
          <div className="relative">
            <img
              src={brochureImage}
              alt="Download Brochure"
              className="w-16 h-16 md:w-20 md:h-20 cursor-pointer"
              onClick={handleBrochureClick}
            />

            <button
              onClick={handleCloseBrochure}
              className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
            >
              <FaTimes size={14} />
            </button>
          </div>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default Brochure;
