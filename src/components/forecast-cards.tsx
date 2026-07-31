"use client";

import { useEffect, useState } from "react";
import {
  Coordinates,
  ForecastCardsProps,
  ForecastItem,
  ForecastApiResult,
} from "../app/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function getCompassDirection(heading: number): string {
  const compassDirections: string[] = [
    "North",
    "North-East",
    "East",
    "South-East",
    "South",
    "South-West",
    "West",
    "North-West",
  ];
  const index =
    Math.round(((heading %= 360) < 0 ? heading + 360 : heading) / 45) % 8;
  return compassDirections[index];
}

export function ForecastCards({ coords }: ForecastCardsProps) {
  const [forecastItems, setForecastItems] = useState<ForecastItem[] | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const loading = forecastItems === null && error === null;

  useEffect(() => {
    async function handleFetch(coords: Coordinates) {
      try {
        if (coords.latitude !== null && coords.longitude !== null) {
          const res: Response = await fetch(
            `/api/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}`,
          );
          const response: ForecastApiResult = await res.json();

          if ("data" in response) {
            setForecastItems(response.data);
          } else {
            setError(response.error);
            console.log(`Error: ${response.error}, Status: ${res.status}`);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    handleFetch(coords);
  }, [coords]);

  return (
    <div>
      {error && <p>There was an error loading the data: {error}</p>}
      {loading && <p>Loading...</p>}
      {!loading &&
        forecastItems !== null &&
        forecastItems.map((item) => (
          <Card key={item.time} className="m-2">
            <CardHeader>
              <CardTitle>
                {item.time.slice(0, 10)}
                <br />
                {item.type}
              </CardTitle>
              <CardDescription>
                It is looking like a <b>{item.quality_text}</b> {item.type}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  <b>Quality:</b> {Math.round(item.quality * 100)}/100
                </li>
                <li>
                  <b>Cloud Cover:</b> {item.cloud_cover * 100}%
                </li>
                <li>
                  <b>Direction:</b> {getCompassDirection(item.direction)}
                </li>
              </ul>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
