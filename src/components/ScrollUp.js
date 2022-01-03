import React, { useEffect, useState } from "react";

function ScrollUp() {
  const [x, setX] = useState(false);
  const changeheaderLinkStyle = () => {
    if (window.scrollY >= 560) {
      setX(true);
    } else {
      setX(false);
    }
  };
  window.addEventListener("scroll", changeheaderLinkStyle);
  return (
    <a
      href="#"
      className="scrollup"
      style={{
        bottom: x ? "5rem" : "-20%",
      }}
      id="scroll-up"
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}

export default ScrollUp;
