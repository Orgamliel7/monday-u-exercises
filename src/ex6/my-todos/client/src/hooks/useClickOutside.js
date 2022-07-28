import React, { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (isClickOutside(ref.current, e)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};

const isClickOutside = (element, clickEvent) => {
  return element && !element.contains(clickEvent.target);
};
