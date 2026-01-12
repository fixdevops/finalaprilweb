import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar"; // 1. Pastikan import tanpa kurung kurawal

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar /> {/* 2. Navbar dipasang di sini */}
      <Component {...pageProps} />
    </>
  );
}