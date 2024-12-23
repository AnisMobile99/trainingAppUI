import React from "react";

type SearchBarButtonProps = {
  isMobile: boolean;
};

export const SearchBarButton: React.FC<SearchBarButtonProps> = ({
  isMobile,
}) => (
  <button
    className={`${
      isMobile ? "w-full py-3" : "px-5 py-5"
    } bg-teal-500 text-white rounded-2xl font-semibold hover:bg-teal-600 transition`}
  >
    Rechercher
  </button>
);
