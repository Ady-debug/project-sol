import ForecastDashboard from "@/components/forecast-dashboard";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col flex-1 items-center justify-center m-25">
        <ForecastDashboard />
      </div>
    </main>
  );
}
