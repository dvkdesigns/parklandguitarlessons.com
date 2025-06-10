'use client';

import Script from 'next/script';

export default function BookingWidget() {
  return (
    <div className="w-full max-w-3xl mx-auto my-12 min-h-[800px] relative z-10">
      <div id="mymusicstaff-widget" className="w-full" />

      {/* Correct way to apply styles in JSX */}
      <style jsx global>{`
        /* Attempt to hide external footer */
        footer, .jsx-52f278c42e36afd0 {
          display: none !important;
        }

        /* Additional common fix: Prevent weird positioning */
        #mymusicstaff-widget {
          position: relative !important;
          z-index: 10 !important;
        }
      `}</style>

      <Script
        src="https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9yZlBKViIsIldlYnNpdGVJRCI6Indic19kcTVKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1FUQ2NKOSJ9"
        strategy="afterInteractive"
      />
    </div>
  );
}
