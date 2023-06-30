import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
