import { useState, useLayoutEffect } from "react";

export const useScroll = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    }
  };

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return {
    position,
    scrollTo: typeof window !== "undefined" ? window.scrollTo : () => {},
  };
};
