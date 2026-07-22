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

  const redirectUrl = encodeURIComponent("https://bba-sob.indirauniversity.edu.in/thankyou");

  return (
    <div
      className="npf_wgts"
      data-height={height}
      data-w="485adad5d85a233b731dd5cc763e58ba"
      data-r={redirectUrl}
      style={{ minHeight: height }}
    ></div>
  );
};

export default NPFWidget;
