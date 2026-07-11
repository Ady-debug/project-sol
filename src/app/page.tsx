import { ForecastItem, ForecastResponse } from "./lib/types";
import { responseData } from "./lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  // ***Uncomment below to use live API instead of dummy data***

  // const API_KEY: string | undefined = process.env.SUNSETHUE_API_KEY;

  // if (!API_KEY) {
  //   throw new Error("API Key Missing");
  // }

  // const latitude: number = 53.962;
  // const longitude: number = -2.016;
  // const res: Response = await fetch(
  //   `https://api.sunsethue.com/forecast?latitude=${latitude}&longitude=${longitude}`,
  //   {
  //     headers: {
  //       "x-api-key": API_KEY,
  //     },
  //   },
  // );

  // const response: ForecastResponse = await res.json();

  const response: ForecastResponse = responseData; // <- remove line if using production API
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

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Sol forecast:</h1>
        {forecastItems.map((item) => (
          <Card key={item.time} className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>
                {item.time.slice(0, 10)} - {item.type}
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

          // <div key={item.time}>
          //   <ul>
          //     <li>
          //       <b>{item.time}</b>
          //     </li>
          //     <li>Type: {item.type}</li>
          //     <li>
          //       Quality: {item.quality} - {item.quality_text}
          //     </li>
          //     <li>Cloud Cover: {item.cloud_cover}</li>
          //   </ul>
          // </div>
        ))}
      </main>
    </div>
  );
}
