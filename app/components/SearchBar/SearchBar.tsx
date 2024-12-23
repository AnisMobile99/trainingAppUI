import React, { useState, useRef, useEffect } from "react";
import { FaStethoscope, FaSearch } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { allSpecialties, frequentSpecialties } from "./spacialtyData";
import { useResponsiveDevice } from "~/hooks/useResponsiveDevice";
import { useNavigate } from "react-router-dom"; // Import React Router hook

export const SearchBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("Spécialité");
  const [searchBarWidth, setSearchBarWidth] = useState(0); // Initialisé à 0

  const isMobile = useResponsiveDevice(); // Détecter si l'appareil est mobile
  const searchBarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // React Router hook for navigation

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelect = (specialty: string) => {
    setSelectedSpecialty(specialty); // Met à jour la spécialité sélectionnée
    setIsDropdownOpen(false); // Ferme le dropdown

    // Navigue vers la page correspondante à la spécialité
    const formattedSpecialty = specialty.toLowerCase().replace(/ /g, "-"); // Formatage de l'URL
    navigate(`/doctors/${formattedSpecialty}`);
  };

  const handleInputFocus = () => {
    setIsDropdownOpen(false); // Ferme le dropdown lorsqu'on clique dans l'input
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false); // Ferme le dropdown lorsqu'on clique en dehors
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Dynamically adjust width based on window size
  useEffect(() => {
    const updateWidth = () => {
      if (typeof window !== "undefined") {
        const newWidth = Math.min(window.innerWidth * 0.9, 900); // Max width = 900px
        setSearchBarWidth(newWidth);
      }
    };

    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth); // Listen for window resize
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Render only if searchBarWidth has been set (to avoid SSR issues)
  if (searchBarWidth === 0) return null;

  return (
    <div
      ref={searchBarRef}
      className={`${
        isMobile
          ? "flex flex-col items-center space-y-4 bg-white p-2 rounded-xl shadow-md relative"
          : "flex items-center bg-white shadow-md rounded-2xl p-3 space-x-4 relative"
      }`}
      style={{
        width: isMobile ? "100%" : `${searchBarWidth}px`, // Largeur mobile : 100%, desktop : largeur dynamique
        maxWidth: "900px", // Limite la largeur en desktop
        margin: isMobile ? "0" : "0 auto", // Supprime les marges sur mobile
      }}
    >
      {/* Spécialité Dropdown */}
      <div
        className={`relative flex items-center justify-between rounded-2xl px-4 py-3 cursor-pointer transition-all ${
          isMobile ? "w-full" : "flex-grow"
        } ${isDropdownOpen ? "ring-1 ring-black" : ""}`}
        onClick={toggleDropdown}
        style={{ width: "100%" }}
      >
        <div className="flex items-center space-x-2">
          <FaStethoscope className="text-lg text-gray-600" />
          <span className="text-gray-700 font-medium">{selectedSpecialty}</span>
        </div>
        <FiChevronDown
          className={`text-gray-600 text-lg transform transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {isDropdownOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-xl mt-1 border border-gray-200 z-20 max-h-56 overflow-y-auto`}
          onMouseDown={(e) => e.stopPropagation()} // Empêche le conflit avec handleClickOutside
        >
          {/* Recherche fréquente */}
          <div>
            <h3 className="px-4 py-2 text-sm font-semibold text-gray-500">
              Recherche fréquente
            </h3>
            <ul>
              {frequentSpecialties.map((specialty) => (
                <li
                  key={specialty}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                  onClick={() => handleSelect(specialty)}
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          {/* Toutes les spécialités */}
          <div className="mt-2 border-t border-gray-200">
            <h3 className="px-4 py-2 text-sm font-semibold text-gray-500">
              Toutes les spécialités
            </h3>
            <ul>
              {allSpecialties.map((specialty) => (
                <li
                  key={specialty}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                  onClick={() => handleSelect(specialty)}
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Et/ou Toggle */}
      <div
        className={`flex items-center justify-center w-10 h-10 bg-black text-white rounded-2xl flex-shrink-0`}
      >
        <span className="text-sm font-semibold">et/ou</span>
      </div>

      {/* Nom du praticien Input */}
      <div
        className={`flex items-center rounded-2xl px-4 py-3 ${
          isMobile ? "w-full" : "flex-grow"
        } focus-within:ring-1 focus-within:ring-black`}
        style={{ width: "100%" }}
      >
        <FaSearch className="text-lg text-gray-600" />
        <input
          type="text"
          placeholder="Nom du praticien"
          className="w-full px-2 text-gray-700 focus:outline-none"
          onFocus={handleInputFocus}
        />
      </div>

      {/* Rechercher Button */}
      <button
        className={`${
          isMobile ? "w-full py-3" : "px-6 py-2"
        } bg-teal-500 text-white rounded-2xl font-semibold hover:bg-teal-600 transition`}
      >
        Rechercher
      </button>
    </div>
  );
};
