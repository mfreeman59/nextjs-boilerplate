import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#1A9270',
    },
    secondary: {
      main: '#1A9270',
    },
  },
});

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
