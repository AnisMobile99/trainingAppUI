import { useState, useEffect } from "react";

export const useResponsiveDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      // Vérifier la taille de l'écran via les breakpoints
      const isBreakpointMobile = window.innerWidth <= 968;

      // Combiner les deux logiques
      setIsMobile(isBreakpointMobile);
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return isMobile;
};
