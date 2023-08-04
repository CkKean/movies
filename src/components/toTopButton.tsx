// ToTopButton.tsx
import { FC, useEffect, useState } from "react";

const ToTopButton: FC = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    setShowButton(top > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`to-top-button ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ToTopButton;
