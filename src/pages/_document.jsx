
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Poppins-Bold.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Poppins-Thin.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Poppins-Regular.woff"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;