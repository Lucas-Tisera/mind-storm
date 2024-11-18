import React from "react";

const EnglandFlag = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      style={{
        borderRadius: "4px",
        transition: "transform 0.2s ease",
      }}
    >
      <rect width="24" height="24" fill="#012169" />
      <path
        d="M0 0 L24 24 M24 0 L0 24"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 0 L12 24 M0 12 L24 12"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 0 L12 24 M0 12 L24 12"
        stroke="#C8102E"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const SpainFlag = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        borderRadius: "4px",
        transition: "transform 0.2s ease",
      }}
    >
      <rect width="24" height="8" y="0" fill="#AA151B" />
      <rect width="24" height="8" y="8" fill="#F1BF00" />
      <rect width="24" height="8" y="16" fill="#AA151B" />
      <circle cx="8" cy="12" r="2.5" fill="#AA151B" />
    </svg>
  );
};

export { EnglandFlag, SpainFlag };
