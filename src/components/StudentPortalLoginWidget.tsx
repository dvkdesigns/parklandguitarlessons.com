"use client";

import Script from "next/script";

export default function BookingWidget() {
  return (
    <div className="w-full">
      <style jsx global>{`
        /* Attempt to hide external footer */
        footer {
          display: none !important;
        }
        #student-portal {
          display: block !important;
        }

        iframe {
          padding: 0 30% !important;
        }
      `}</style>
      <div id="student-portal" className="hidden">
        <Script
          src="https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9yZlBKViIsIldlYnNpdGVJRCI6Indic19kcTVKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1FUbkxKOSJ9"
          strategy="afterInteractive"
        />
      </div>
      <div id="mymusicstaff-widget" className="w-full" />
    </div>
  );
}
