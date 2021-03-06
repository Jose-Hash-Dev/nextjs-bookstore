import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutView from "../components/layout";
import { StoreProvider } from '../lib/Store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <LayoutView />
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
