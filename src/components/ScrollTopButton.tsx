import React, { useState, useEffect } from "react";
import styles from "./ScrollTopButton.module.css";

const ScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className={styles.scrollToTop}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <div className={styles.icon}>↑</div>
        </button>
      )}
    </>
  );
};

export default ScrollTopButton;
