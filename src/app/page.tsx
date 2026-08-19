import ForecastDashboard from "@/components/forecast-dashboard";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div
        className="fixed inset-0 -z-10 h-lvh overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-[-2%] bg-[url('/mountains-bg.webp')] bg-cover bg-no-repeat bg-position-[center_155px]" />
      </div>
      <Header />
      <ForecastDashboard />
      <Footer />
    </main>
  );
}
