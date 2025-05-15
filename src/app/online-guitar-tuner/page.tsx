// src/app/tuner/page.tsx
import { Metadata } from 'next';
import Script from 'next/script';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Online Guitar Tuner | Parkland Guitar Lessons',
  description: 'Use our free online guitar tuner to get perfectly in tune before you practice or perform. Ideal for standard tuning and beginner-friendly.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/online-guitar-tuner',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Online Guitar Tuner",
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
<h1 className="text-3xl font-bold text-center mt-10 mb-4">🎸 Free Online Guitar Tuner</h1>
<p className="text-center text-gray-600 mb-6 px-4 max-w-2xl mx-auto">
  Quickly tune your guitar using our free online tuner. Just allow microphone access, pluck a string, and follow the real-time pitch detection. No app needed — works right in your browser!
</p>
      <div className="flex justify-center py-8 px-4">
        

        <iframe
          src="https://guitarapp.com/tuner.html?embed=true"
          width="100%"
          height="500"
          style={{ maxWidth: '360px', maxHeight: '470px', border: 'none', overflow: 'hidden' }}
          allow="microphone"
          title="Online Guitar Tuner"
        ></iframe>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 text-base leading-relaxed text-gray-800">
        <h2 className="text-2xl font-bold mb-4">🎸 Common Guitar Tunings Overview</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">1. Standard Tuning (E A D G B e)</h3>
        <p>Used in nearly all genres, this tuning keeps chords, scales, and tab notation consistent and easy to follow.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. Drop Tunings</h3>
        <p>Drop tunings lower the 6th string, making power chords easier to play.</p>
        <ul className="list-disc ml-5">
          <li><strong>Drop D (D A D G B e):</strong> Common in rock and grunge.</li>
          <li><strong>Drop C (C G C F A D):</strong> Popular in metalcore and heavier rock.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">3. Half-Step / Whole-Step Down</h3>
        <ul className="list-disc ml-5">
          <li><strong>Eb Standard (Eb Ab Db Gb Bb eb):</strong> Hendrix, Guns N' Roses style.</li>
          <li><strong>D Standard (D G C F A D):</strong> Thicker tone, used in metal.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">4. Open Tunings</h3>
        <p>Play a full chord just by strumming open strings—perfect for slide and fingerstyle.</p>
        <ul className="list-disc ml-5">
          <li><strong>Open D (D A D F# A D):</strong> D major chord, slide blues favorite.</li>
          <li><strong>Open E (E B E G# B E):</strong> Higher version of Open D.</li>
          <li><strong>Open G (D G D G B D):</strong> Used by Rolling Stones, classic blues.</li>
          <li><strong>Open C (C G C G C E):</strong> Rich for solo acoustic work.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">5. Modal & Experimental Tunings</h3>
        <ul className="list-disc ml-5">
          <li><strong>DADGAD (D A D G A D):</strong> Modal tuning great for Celtic and acoustic music.</li>
          <li><strong>C6 (C A C G C E):</strong> Used in Hawaiian slack key and experimental acoustic styles.</li>
          <li><strong>Double Drop D (D A D G B D):</strong> Adds a deeper tone—used by Neil Young.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">6. Extended Range Guitar Tunings</h3>
        <ul className="list-disc ml-5">
          <li><strong>7-String (B E A D G B e):</strong> Adds a low B string for metal and prog.</li>
          <li><strong>8-String (F# B E A D G B E):</strong> Extra depth for djent and modern metal.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-10 mb-4">🔁 Tuning Summary Table</h3>
        <div className="overflow-auto">
          <table className="table-auto w-full text-left border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Tuning Name</th>
                <th className="border px-4 py-2">Notes</th>
                <th className="border px-4 py-2">Genre Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-4 py-2">Standard</td><td className="border px-4 py-2">E A D G B e</td><td className="border px-4 py-2">All genres</td></tr>
              <tr><td className="border px-4 py-2">Drop D</td><td className="border px-4 py-2">D A D G B e</td><td className="border px-4 py-2">Rock, metal</td></tr>
              <tr><td className="border px-4 py-2">Drop C</td><td className="border px-4 py-2">C G C F A D</td><td className="border px-4 py-2">Metalcore</td></tr>
              <tr><td className="border px-4 py-2">Eb Standard</td><td className="border px-4 py-2">Eb Ab Db Gb Bb eb</td><td className="border px-4 py-2">Classic rock</td></tr>
              <tr><td className="border px-4 py-2">D Standard</td><td className="border px-4 py-2">D G C F A D</td><td className="border px-4 py-2">Metal</td></tr>
              <tr><td className="border px-4 py-2">Open D</td><td className="border px-4 py-2">D A D F# A D</td><td className="border px-4 py-2">Slide blues</td></tr>
              <tr><td className="border px-4 py-2">Open E</td><td className="border px-4 py-2">E B E G# B E</td><td className="border px-4 py-2">Slide guitar</td></tr>
              <tr><td className="border px-4 py-2">Open G</td><td className="border px-4 py-2">D G D G B D</td><td className="border px-4 py-2">Classic rock</td></tr>
              <tr><td className="border px-4 py-2">Open C</td><td className="border px-4 py-2">C G C G C E</td><td className="border px-4 py-2">Fingerstyle</td></tr>
              <tr><td className="border px-4 py-2">DADGAD</td><td className="border px-4 py-2">D A D G A D</td><td className="border px-4 py-2">Acoustic, Celtic</td></tr>
              <tr><td className="border px-4 py-2">Double Drop D</td><td className="border px-4 py-2">D A D G B D</td><td className="border px-4 py-2">Folk, Neil Young</td></tr>
              <tr><td className="border px-4 py-2">7-String</td><td className="border px-4 py-2">B E A D G B e</td><td className="border px-4 py-2">Prog, metal</td></tr>
              <tr><td className="border px-4 py-2">8-String</td><td className="border px-4 py-2">F# B E A D G B E</td><td className="border px-4 py-2">Djent</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <CallToActionSection />
    </>
  );
}
