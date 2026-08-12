"use client";

import { ForecastCards } from "@/components/forecast-cards";
import { Coordinates } from "@/lib/types";
import { useState, useEffect } from "react";

export default function ForecastDashboard() {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    longitude: null,
    latitude: null,
  });

  useEffect(() => {
    function handleSuccess(position: GeolocationPosition) {
      const { latitude, longitude } = position.coords;
      setCoordinates({
        latitude,
        longitude,
      });
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }
    function handleError(error: GeolocationPositionError) {
      console.error("Unable to retrieve your location");
      console.error(error.message);
    }
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <ForecastCards coords={coordinates} />
    </div>
  );
}
