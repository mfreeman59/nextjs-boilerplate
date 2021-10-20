import {
  CssBaseline,
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import React from 'react';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: [
      'Roboto',
      'YuGothic',
      '"Yu Gothic Medium"',
      '"Yu Gothic"',
      '"Helvetica Neue"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'HelveticaNeue',
      'Verdana',
      'Meiryo',
      'sans-serif',
    ].join(','),
    fontSize: 19.6,
  },
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
    <RecoilRoot>
      <>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
        </Head>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StyledEngineProvider>
      </>
    </RecoilRoot>
  );
};

export default MyApp;
