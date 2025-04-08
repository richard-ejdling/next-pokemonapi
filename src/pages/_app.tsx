import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const pokemonClassic = localFont({ src: "./fonts/pokemon-classic.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${pokemonClassic.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
