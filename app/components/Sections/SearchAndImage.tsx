import React from "react";
import { SearchBar } from "~/components/SearchBar/SearchBar";

type SearchAndImageProps = {
  isMobile: boolean;
};

export const SearchAndImage: React.FC<SearchAndImageProps> = ({ isMobile }) => {
  return (
    <div
      className={`relative mt-8 flex ${
        isMobile
          ? "flex-col items-center space-y-4"
          : "flex-row items-center justify-between"
      } w-full ${isMobile ? "" : "max-w-4xl"} mx-auto`}
    >
      {/* SearchBar */}
      <div className="z-10 w-full">
        <SearchBar />
      </div>

      {/* Image uniquement en version Desktop */}
      {!isMobile && (
        <div className="absolute right-[-250px] top-[-150px]">
          <img
            src="https://hellocare.com/img/consultation-en-ligne.png"
            alt="Médecin"
            className="w-[500px] h-[500px] object-cover"
          />
        </div>
      )}

      {/* Image en version Mobile */}
      {isMobile && (
        <div className="w-full mt-6 flex justify-center">
          <img
            src="https://hellocare.com/img/consultation-en-ligne.png"
            alt="Médecin"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
};
