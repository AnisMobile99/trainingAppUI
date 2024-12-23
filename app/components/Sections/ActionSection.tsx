import React from "react";
import { Download } from "~/components/Download/Download";
import { FloatingArrowButton } from "~/components/Boutton/FloatingArrowButton";

type ActionSectionProps = {
  isMobile: boolean;
};

export const ActionSection: React.FC<ActionSectionProps> = ({ isMobile }) => {
  return (
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
  );
};
