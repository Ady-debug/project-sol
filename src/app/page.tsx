import ForecastDashboard from "@/components/forecast-dashboard";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div
        className="fixed inset-0 -z-10 bg-[url('/mountains-bg.webp')] bg-cover bg-no-repeat bg-position-[center_90px]"
        aria-hidden="true"
      />
      <Header />
      <ForecastDashboard />
      <Footer />
    </main>
  );
}
