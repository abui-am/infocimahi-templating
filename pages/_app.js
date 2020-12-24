import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "~/theme";
import PageTransition from "../src/components/transition/PageTransition";
import { WindowSizeProvider } from "~/context/WindowSizeContext";
import { ResponsiveProvider } from "~/context/ResponsiveContext";
import "../public/font/style.css";
export default function MyApp(props) {
  const { Component, pageProps, router } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <WindowSizeProvider>
          <ResponsiveProvider>
            <PageTransition>
              <Component {...pageProps} key={router.route} />
            </PageTransition>
          </ResponsiveProvider>
        </WindowSizeProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object,
};
