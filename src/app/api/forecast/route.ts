import { ForecastResponse } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Construct a URL from the request to obtain latitude and longitude
  const searchParams = new URL(request.url).searchParams;
  const latitude = searchParams.get("latitude");
  const longitude = searchParams.get("longitude");

  if (!latitude || !longitude) {
    return NextResponse.json(
      { error: "Search Parameters Missing" },
      { status: 400 },
    );
  }

  const API_KEY: string | undefined = process.env.SUNSETHUE_API_KEY;
  if (!API_KEY) {
    return NextResponse.json({ error: "API Key Missing" }, { status: 500 });
  }
  const res: Response = await fetch(
    `https://api.sunsethue.com/forecast?latitude=${latitude}&longitude=${longitude}`,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    },
  );

  if (!res.ok) {
    return NextResponse.json({ error: "API Error" }, { status: res.status });
  }

  const data: ForecastResponse = await res.json();
  return NextResponse.json(data);
}
