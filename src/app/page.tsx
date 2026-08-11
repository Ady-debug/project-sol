import ForecastDashboard from "@/components/forecast-dashboard";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-[url('/mountains-bg.webp')] bg-cover bg-no-repeat bg-fixed bg-position-[center_90px] min-h-screen">
      <Header />
      <ForecastDashboard />
      <Footer />
    </main>
  );
}
