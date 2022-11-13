/* eslint-disable react/no-children-prop */
import '@/styles/global.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

import nextI18NextConfig from '../../next-i18next.config';
// import "/node_modules/flag-icons/css/flag-icons.min.css";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <Head>
        <meta
          id="viewport"
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"
        />
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
