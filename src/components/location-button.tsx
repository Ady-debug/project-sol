"use client";
import { PositionResponse, Coordinates } from "@/app/lib/types";
import { Button } from "@/components/ui/button";
import { IconCurrentLocation } from "@tabler/icons-react";
import { useState } from "react";

export function LocationButton() {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    longitude: null,
    latitude: null,
  });

  function geoLocator() {
    function success(position: PositionResponse) {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      console.log(
        `Latitude: ${coordinates.latitude}, Longitude: ${coordinates.longitude}`,
      );
    }
    function error() {
      console.error("Unable to retrieve your location");
    }
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return (
    <Button onClick={geoLocator}>
      Get current location
      <IconCurrentLocation stroke={2} />
    </Button>
  );
}
