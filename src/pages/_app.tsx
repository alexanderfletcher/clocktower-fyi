import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Clocktower.fyi</title>
      </Head>
      <ThemeProvider forcedTheme="dark">
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
