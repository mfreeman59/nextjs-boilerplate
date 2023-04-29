import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import React from 'react';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

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

const clientSideEmotionCache = createCache({ key: 'css' });

const MyApp = (props: AppProps) => {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  return (
    <RecoilRoot>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </RecoilRoot>
  );
};

export default MyApp;
