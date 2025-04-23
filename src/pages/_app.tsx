import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "react-query";

const pokemonClassic = localFont({ src: "./fonts/pokemon-classic.ttf" });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${pokemonClassic.className}`}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
