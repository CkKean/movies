import { useEffect, useState } from "react";

export const useDeviceType = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 767;
  const isWeb = width >= 768;

  return { isMobile, isWeb };
};
