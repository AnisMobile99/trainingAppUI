import React, { useState } from "react";
import { BsFiletypeDoc, BsPersonVideo3 } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { PiTimerLight } from "react-icons/pi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const About: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      icon: <BsPersonVideo3 className="text-4xl text-red-500" />,
      title: "Consultation en vidéo",
      description: "Prenez rendez-vous avec un professionnel de santé.",
    },
    {
      icon: <PiTimerLight className="text-4xl text-red-500" />,
      title: "Consultations rapides",
      description: "Accédez à des consultations sans attente.",
    },
    {
      icon: <CiCalendarDate className="text-4xl text-red-500" />,
      title: "Prise de RDV en ligne",
      description: "Réservez facilement vos rendez-vous.",
    },
    {
      icon: <BsFiletypeDoc className="text-4xl text-red-500" />,
      title: "Documents en ligne",
      description: "Accédez à vos documents médicaux à tout moment.",
    },
  ];

  return (
    <section className="mt-16 w-full max-w-6xl mx-auto text-center px-4">
      {/* Titre */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        LA TÉLÉCONSULTATION SIMPLE, RAPIDE ET EFFICACE
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center bg-white shadow-md rounded-xl p-4 border border-gray-200 overflow-hidden h-48 w-full cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Front Content */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-evenly p-3 transform transition-transform duration-300 ${
                hoveredIndex === index ? "-translate-y-full" : "translate-y-0"
              }`}
            >
              {card.icon}
              <p className="text-gray-800 font-medium mt-4 text-md">
                {card.title}
              </p>
              <FaChevronDown className="text-black text-xl mt-2" />
            </div>

            {/* Back Content */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-evenly bg-gray-50 transform transition-transform duration-300 ${
                hoveredIndex === index ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <p className="text-gray-700 text-sm px-4">{card.description}</p>
              <FaChevronUp className="text-black text-xl mt-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
