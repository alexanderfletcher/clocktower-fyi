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
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content={`Unofficial site for jinxes, interactions and updates about the popular social deduction game, Blood on the Clocktower`}
        />
        <link rel="icon" type="image/svg+xml" href="//favicon.svg"/>
        <link rel="icon" type="image/png" href="/favicon.png"/>
      </Head>
      <ThemeProvider forcedTheme="dark">
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
