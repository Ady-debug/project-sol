import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header>
      <div className="flex justify-end items-center p-4 gap-4 h-16">
        <ClerkProvider>
          <Show when="signed-out">
            <SignInButton>
              <button className="cursor-pointer text-sm">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-linear-to-r from-amber-400 to-rose-500 text-white text-sm rounded-full font-medium h-10 px-4 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </ClerkProvider>
      </div>

      <div className="flex flex-col items-center text-center gap-3 py-5 font-sans">
        <h1 className="text-7xl font-black tracking-tight text-foreground">
          Project Sol
        </h1>
        <span className="h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-rose-500" />
        <p className="text-base px-5 mb-8 text-muted-foreground max-w-lg">
          Real-time forecasts for the best sunrises and sunsets, based on your
          location.
        </p>
      </div>
    </header>
  );
}
