import React, { useState, useRef, useEffect } from "react";
import { useResponsiveDevice } from "~/hooks/useResponsiveDevice";
import { SearchBarDropdown } from "./SearchBarDropdown";
import { SearchBarInput } from "./SearchBarInput";
import { SearchBarButton } from "./SearchBarButton";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

interface SearchBarProps {
  showPostalCode?: boolean; // Propriété pour contrôler la visibilité du champ Code Postal
}

export const SearchBar: React.FC<SearchBarProps> = ({
  showPostalCode = false,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("Spécialité");
  const searchBarRef = useRef<HTMLDivElement>(null);
  const isMobile = useResponsiveDevice();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelect = (specialty: string) => {
    setSelectedSpecialty(specialty);
    setIsDropdownOpen(false);
  };

  const handleInputFocus = () => setIsDropdownOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchBarRef}
      className={`${
        isMobile
          ? "flex flex-col items-center space-y-4 bg-white p-2 rounded-xl shadow-md relative"
          : "flex items-center bg-white shadow-md rounded-2xl p-3 space-x-4 relative"
      }`}
    >
      <SearchBarDropdown
        isOpen={isDropdownOpen}
        selectedSpecialty={selectedSpecialty}
        onToggle={toggleDropdown}
        onSelect={handleSelect}
        isMobile={isMobile}
      />
      <div
        className={`flex items-center justify-center w-10 h-10 bg-black text-white rounded-2xl flex-shrink-0`}
      >
        <span className="text-sm font-semibold">et/ou</span>
      </div>
      <SearchBarInput
        placeholder="Nom du Practicien"
        onFocus={handleInputFocus}
        isMobile={isMobile}
        icon={<FaSearch />}
      />
      {showPostalCode && (
        <>
          <div
            className={`flex items-center justify-center w-10 h-10 bg-black text-white rounded-2xl flex-shrink-0`}
          >
            <span className="text-sm font-semibold">et/ou</span>
          </div>
          <SearchBarInput
            placeholder="Code Postal"
            onFocus={handleInputFocus}
            isMobile={isMobile}
            icon={<FaMapMarkerAlt />}
          />
        </>
      )}
      <SearchBarButton isMobile={isMobile} />
    </div>
  );
};
