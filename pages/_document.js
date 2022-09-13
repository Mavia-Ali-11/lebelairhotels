import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery-plugin-collection.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery-ui.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.slicknav.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/lib.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/script.js" strategy="beforeInteractive" />
      </body>
    </Html>
  )
}