import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import '../styles/globals.css';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default MyApp;
