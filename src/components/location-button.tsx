"use client";
import { PositionResponse } from "@/app/lib/types";
import { Button } from "@/components/ui/button";
import { IconCurrentLocation } from "@tabler/icons-react";

let latitude: number | null;
let longitude: number | null;

function geoLocator() {
  function success(position: PositionResponse) {
    console.log(position);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
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

export function LocationButton() {
  return (
    <Button onClick={geoLocator}>
      Get current location
      <IconCurrentLocation stroke={2} />
    </Button>
  );
}
