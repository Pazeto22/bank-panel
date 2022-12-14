import { AppProps } from "next/app";
import { AuthDataProvider } from "context/AuthData";
// Dynamic para desativar SSR durante desenvolvimento
import dynamic from "next/dynamic";
import React from "react";
import "../styles/globals.scss";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Componentes

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthDataProvider>
      <Component {...pageProps} />
    </AuthDataProvider>
  );
}

// Dynamic para desativar SSR durante desenvolvimento
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
