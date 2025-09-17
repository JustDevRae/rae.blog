"use client";

import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop" | null;

export default function useMediaQuery() {
  const [deviceType, setDeviceType] = useState<DeviceType>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    const tabletQuery = window.matchMedia("(min-width: 768px)");
    const mobileQuery = window.matchMedia("(min-width: 0px)");

    const updateDeviceType = () => {
      if (desktopQuery.matches) {
        setDeviceType("desktop");
      } else if (tabletQuery.matches) {
        setDeviceType("tablet");
      } else if (mobileQuery.matches) {
        setDeviceType("mobile");
      }
    };

    updateDeviceType();

    desktopQuery.addEventListener("change", updateDeviceType);
    tabletQuery.addEventListener("change", updateDeviceType);
    mobileQuery.addEventListener("change", updateDeviceType);

    return () => {
      desktopQuery.removeEventListener("change", updateDeviceType);
      tabletQuery.removeEventListener("change", updateDeviceType);
      mobileQuery.removeEventListener("change", updateDeviceType);
    };
  }, []);

  const isMobile = deviceType === "mobile";
  const isTablet = deviceType === "tablet";
  const isDesktop = deviceType === "desktop";

  return { isMobile, isTablet, isDesktop };
}
