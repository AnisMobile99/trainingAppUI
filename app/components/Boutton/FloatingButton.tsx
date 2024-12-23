import React from "react";

interface FloatingButtonProps {
  icon: React.ReactNode; // L'icône à afficher
  onClick?: () => void; // Action à exécuter au clic
  className?: string; // Classes supplémentaires pour le style
  animation?: string; // Classes pour l'animation (par ex. hover ou focus)
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  icon,
  onClick,
  className = "",
  animation = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-md ${animation} ${className}`}
    >
      {icon}
    </button>
  );
};
