import ForecastDashboard from "@/components/forecast-dashboard";

export default function Home() {
  return (
    <main className="bg-[url('/mountains-bg.webp')] bg-cover bg-no-repeat bg-center min-h-screen">
      <div className="flex flex-col flex-1 items-center justify-center m-25">
        <ForecastDashboard />
      </div>
    </main>
  );
}
