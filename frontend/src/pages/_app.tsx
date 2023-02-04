import type { AppProps } from "next/app";
// eslint-disable-next-line import/no-unresolved
import MainLayout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
