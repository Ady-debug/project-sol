export default function Header() {
  return (
    <header className="flex flex-col items-center text-center gap-3 py-7 font-sans">
      <h1 className="text-7xl font-black tracking-tight text-foreground">
        Project Sol
      </h1>
      <span className="h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-rose-500" />
      <p className="text-base px-5 text-muted-foreground max-w-lg">
        Real-time forecasts for the best sunrises and sunsets, based on your
        location.
      </p>
    </header>
  );
}
