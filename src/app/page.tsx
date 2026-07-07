import { ForecastItem, ForecastResponse } from "./lib/types";

export default async function Home() {
  const API_KEY: string | undefined = process.env.SUNSETHUE_API_KEY;

  if (!API_KEY) {
    throw new Error("API Key Missing");
  }

  const latitude: number = 53.962;
  const longitude: number = -2.016;
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

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Sol forecast:</h1>
        {forecastItems.map((item) => (
          <div key={item.time}>
            <ul>
              <li>
                <b>{item.time}</b>
              </li>
              <li>Type: {item.type}</li>
              <li>
                Quality: {item.quality} - {item.quality_text}
              </li>
              <li>Cloud Cover: {item.cloud_cover}</li>
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
}
