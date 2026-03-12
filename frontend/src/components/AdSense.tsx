'use client';

import Script from 'next/script';

const ADSENSE_PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

export function AdSense() {
  if (!ADSENSE_PUBLISHER_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </>
  );
}
