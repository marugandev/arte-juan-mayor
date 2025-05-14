import "./ScrollTop.css";

import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const isAtBottom = scrolled + windowHeight >= docHeight - 66;
      const shouldShow = scrolled > 400 && !isAtBottom;

      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      className="scroll-top"
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      ↑
    </button>
  );
};

export default ScrollTop;
