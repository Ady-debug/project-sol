export default async function Home() {
  const API_KEY: string | undefined = process.env.SUNSETHUE_API_KEY;

  if (!API_KEY) {
    throw new Error("API Key Missing");
  }

  const latitude: number = 53.962;
  const longitude: number = -2.016;
  const res = await fetch(
    `https://api.sunsethue.com/forecast?latitude=${latitude}&longitude=${longitude}`,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    },
  );

  const data = await res.json();
  console.log(data);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        Data mapped here eventually
      </main>
    </div>
  );
}
