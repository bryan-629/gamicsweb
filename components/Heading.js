
import React from 'react';
import Head from "next/head";
function Heading({page}) {
  return (
    <Head>
        <title>Gamics - {page}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <meta name="description" content="Search your warzone stats" />
        <meta name="viewport" content="width=device-width, initial-scale=0.85"></meta>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6770273800407114"
      crossOrigin></script>
      </Head>
  )
}

export default Heading