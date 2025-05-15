// src/app/tuner/page.tsx
import { Metadata } from 'next';
import Script from 'next/script';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Online Guitar Metronome | Parkland Guitar Lessons',
  description: 'Use our free online metronome with adjustable BPM, time signatures, and a tap tempo feature—perfect for practicing guitar rhythm and timing.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/online-guitar-metronome',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Online Guitar Metronome",
  operatingSystem: "Web",
  applicationCategory: "MusicApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  publisher: {
    "@type": "Organization",
    name: "Parkland Guitar Lessons",
    url: "https://www.parklandguitarlessons.com"
  }
};


export default function TunerPage() {
  return (
    <>
      <Script
        id="ld-tuner"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <h1 className="text-3xl font-bold text-center mt-10 mb-4">🎵 Free Online Guitar Metronome</h1>
<p className="text-center text-gray-600 mb-6 px-4">Adjust BPM, time signature, accents, and even use Tap Tempo. Perfect for solo practice or band rehearsals.</p>


      <div className="flex justify-center py-8 px-4">
        <iframe
          src="https://guitarapp.com/metronome.html?embed=true&tempo=120&timeSignature=2&pattern=1"
          width="100%"
          height="500"
          style={{ maxWidth: '360px', maxHeight: '470px', border: 'none', overflow: 'hidden' }}
          allow="microphone"
          title="Online Guitar Metronome"
        ></iframe>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 text-base leading-relaxed text-gray-800">
        <p className="text-center text-gray-600 mb-6 px-4">This online metronome is free and does not require any sign-up or registration. It is designed to be used on any device with a web browser, including desktop computers, laptops, tablets, and smartphones.</p>
        <p className="text-center text-gray-600 mb-6 px-4">You can adjust the BPM (beats per minute) and time signature of the metronome to match your desired tempo and rhythm. You can also add accents to the beats to help you keep time.</p>
      </div>

      <CallToActionSection />
    </>
  );
}
