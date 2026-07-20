import { useEffect, useState } from "react";

const NPFWidget = () => {
  const [height, setHeight] = useState("550px");

  useEffect(() => {
    // Determine height dynamically based on screen width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setHeight("600px"); // Mobile
      } else {
        setHeight("550px"); // Desktop
      }
    };

    handleResize(); // Set initial height
    window.addEventListener("resize", handleResize);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <div
      className="npf_wgts"
      data-height={height}
      data-w="fa696c7c8f761369fe613b07551b1bf3"
      style={{ minHeight: height }}
    ></div>
  );
};

export default NPFWidget;
