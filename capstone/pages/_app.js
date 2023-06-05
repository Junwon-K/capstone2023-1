


// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NeRF - 원하는 영상을 링크로 만들어봐요</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

 