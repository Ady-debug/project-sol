import ForecastDashboard from "@/components/forecast-dashboard";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="bg-[url('/mountains-bg.webp')] bg-cover bg-no-repeat bg-center min-h-screen">
      <Header />
      <ForecastDashboard />
    </main>
  );
}
