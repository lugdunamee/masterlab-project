'use client';

const ADSENSE_PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

type AdUnitProps = {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  style?: React.CSSProperties;
};

export function AdUnit({ slot, format = 'auto', style }: AdUnitProps) {
  if (!ADSENSE_PUBLISHER_ID) {
    return null;
  }

  return (
    <ins
      className="adsbygoogle"
      data-ad-client={ADSENSE_PUBLISHER_ID}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
      style={{ display: 'block', ...style }}
    />
  );
}
