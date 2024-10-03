import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
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
        <script
          defer
          src="https://app.tinyanalytics.io/pixel/tNRyri3rJQeDUzOF"
        ></script>
        <link rel="icon" type="image/svg+xml" href="//favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <ThemeProvider forcedTheme="dark">
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
        <Toaster />
      </ThemeProvider>
    </>
  );
}
