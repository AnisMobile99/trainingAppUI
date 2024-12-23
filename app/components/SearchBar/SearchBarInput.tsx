import React from "react";

interface SearchBarInputProps {
  placeholder: string;
  onFocus: () => void;
  isMobile: boolean;
  icon?: React.ReactNode; // Icône optionnelle
}

export const SearchBarInput: React.FC<SearchBarInputProps> = ({
  placeholder,
  onFocus,
  isMobile,
  icon,
}) => {
  return (
    <div
      className={`flex items-center rounded-2xl px-4 py-3 ${
        isMobile ? "w-full" : "flex-grow"
      } focus-within:ring-1 focus-within:ring-black`}
      style={{ width: "100%" }}
    >
      {icon && <div className="mr-3 text-gray-600">{icon}</div>}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-2 text-gray-700 focus:outline-none"
        onFocus={onFocus}
      />
    </div>
  );
};
