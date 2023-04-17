import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="description" content="Personal Site | Jovan Reyes" />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content="Jovan Reyes" />
      <meta itemprop="description" content="Personal Site | Jovan Reyes" />
      <meta itemprop="image" content="https://lh3.google.com/u/0/d/1pnBN91NTydTRBzbFaDEgnDFj_Z9YdD8z=w1920-h901-iv1" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://jovanreyesdev.netlify.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Jovan Reyes" />
      <meta property="og:description" content="Personal Site | Jovan Reyes" />
      <meta property="og:image" content="https://lh3.google.com/u/0/d/1pnBN91NTydTRBzbFaDEgnDFj_Z9YdD8z=w1920-h901-iv1" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jovan Reyes" />
      <meta name="twitter:description" content="Personal Site | Jovan Reyes" />
      <meta name="twitter:image" content="https://lh3.google.com/u/0/d/1pnBN91NTydTRBzbFaDEgnDFj_Z9YdD8z=w1920-h901-iv1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
