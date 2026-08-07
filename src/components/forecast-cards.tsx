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
import { cn } from "@/lib/utils";

const locale: string = "en-GB";

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

function formatDate(isoString: string) {
  return new Date(isoString).toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatTime(isoString: string) {
  return new Date(isoString).toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
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
        forecastItems.map((item) => {
          const backgroundClass =
            item.type === "sunrise"
              ? "bg-linear-30 from-orange-400 to-pink-300"
              : "bg-linear-30 from-pink-300 to-orange-400";

          return (
            <Card key={item.time} className={cn("m-2", backgroundClass)}>
              <CardHeader>
                <CardTitle>
                  {formatDate(item.time)}
                  <br />
                  <span className="capitalize">{item.type}</span>
                </CardTitle>
                <CardDescription>
                  It is looking like a{" "}
                  <b className="lowercase">{item.quality_text}</b> {item.type}{" "}
                  at <b>{formatTime(item.time)}</b>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>
                    <b>Quality:</b> {Math.round(item.quality * 100)}/100
                  </li>
                  <li>
                    <b>Cloud Cover:</b> {Math.floor(item.cloud_cover * 100)}%
                  </li>
                  <li>
                    <b>Direction:</b> {getCompassDirection(item.direction)}
                  </li>
                  {item.type === "sunrise" ? (
                    <>
                      <li>
                        <b>Blue Hour:</b> {formatTime(item.magics.blue_hour[0])}{" "}
                        to {formatTime(item.magics.blue_hour[1])}
                      </li>
                      <li>
                        <b>Golden Hour:</b>
                        {formatTime(item.magics.golden_hour[0])} to{" "}
                        {formatTime(item.magics.golden_hour[1])}
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <b>Golden Hour:</b>
                        {formatTime(item.magics.golden_hour[0])} to{" "}
                        {formatTime(item.magics.golden_hour[1])}
                      </li>
                      <li>
                        <b>Blue Hour:</b> {formatTime(item.magics.blue_hour[0])}{" "}
                        to {formatTime(item.magics.blue_hour[1])}
                      </li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
}
