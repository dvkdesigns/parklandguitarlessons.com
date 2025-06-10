"use client";

import Script from "next/script";

export default function BookingWidget() {
  return (
    <div className="w-full my-10">
      <style jsx global>
        {`
          footer {
            display: none;
          }
          #sb_frame_93036079607 {
            padding: 0 30%;
          }
        `}
      </style>
      <div id="mymusicstaff-widget" className="w-full" />
      <Script
        src="https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9yZlBKViIsIldlYnNpdGVJRCI6Indic19kcTVKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1FUbm1KaCJ9"
        strategy="afterInteractive"
      />
    </div>
  );
}
