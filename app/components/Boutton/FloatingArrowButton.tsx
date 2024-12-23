import React from "react";

export const FloatingArrowButton: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-bounce flex items-center justify-center w-12 h-12 bg-teal-500 text-white rounded-full shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};
