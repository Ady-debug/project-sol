import { ForecastItem, ForecastResponse } from "../app/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const latitude: number = 53.958529233422844;
const longitude: number = -2.0300812346263886;

const API_KEY: string | undefined = process.env.SUNSETHUE_API_KEY;

if (!API_KEY) {
  throw new Error("API Key Missing");
}

const res: Response = await fetch(
  `https://api.sunsethue.com/forecast?latitude=${latitude}&longitude=${longitude}`,
  {
    headers: {
      "x-api-key": API_KEY,
    },
  },
);

const response: ForecastResponse = await res.json();

const forecastItems: ForecastItem[] = response.data;
console.log(forecastItems);

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

export function ForecastCards() {
  return (
    <div>
      {forecastItems.map((item) => (
        <Card key={item.time}>
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
