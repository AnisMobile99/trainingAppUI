import React from "react";
import { About } from "~/components/About/About";
import { FloatingArrowButton } from "~/components/Boutton/FloatingArrowButton";
import { Download } from "~/components/Download/Download";
import { Header } from "~/components/Header/Header";
import { SearchBar } from "~/components/SearchBar/SearchBar";
import { useResponsiveDevice } from "~/hooks/useResponsiveDevice";

export default function IndexPage() {
  const isMobile = useResponsiveDevice(); // Détecter si l'appareil est mobile

  return (
    <div>
      <Header />
      <main
        className={`container p-8 ${
          isMobile ? "pt-20" : "pt-60"
        }`} /* Ajuster l'espacement uniquement en version desktop */
      >
        {/* Section SearchBar et Image */}
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

        {/* Section Download et Floating Button */}
        <div
          className={`mt-16 flex flex-col ${
            isMobile
              ? "items-center space-y-6"
              : "items-center space-x-6 flex-row max-w-4xl mx-auto"
          }`}
        >
          {/* Section Download */}
          <div className="flex-shrink-0">
            <Download />
          </div>

          {/* Section Floating Arrow */}
          <div className={`flex-shrink-0 ${isMobile ? "mt-4" : "-ml-4"}`}>
            <FloatingArrowButton />
          </div>
        </div>

        {/* Section About */}
        <div
          className={`mt-16 w-full ${
            isMobile ? "" : "max-w-4xl"
          } mx-auto text-center`}
        >
          <About />
        </div>
      </main>
    </div>
  );
}
