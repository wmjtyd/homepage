import Document, { Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../../next-i18next.config';

class MyDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
    console.log('currentLocale', currentLocale);
    return (
      <Html lang={currentLocale || 'en'} data-theme="">
        <Head>
          <meta
            name="description"
            content="WMJTYD"
          />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- Google tag (gtag.js) --> */}
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-65C62TFZTK"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-65C62TFZTK');
          </script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
