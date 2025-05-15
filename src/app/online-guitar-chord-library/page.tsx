import { Metadata } from 'next';
import Script from 'next/script';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata: Metadata = {
  title: 'Online Guitar Chord Library | Interactive Chord Diagrams for Guitar, Ukulele, Bass, and Mandolin',
  description:
    'Explore the most advanced interactive online guitar chord library with real-time playback, left-handed mode, multiple instruments, and every chord voicing imaginable.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/online-guitar-chord-library',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Online Guitar Chord Library",
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

export default function ChordLibraryPage() {
  return (
    <>
      <Script
        id="ld-chord-library"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <h1 className="text-3xl font-bold text-center mt-10 mb-4">🎼 Free Online Guitar Chord Library</h1>
      <p className="text-center text-gray-600 mb-6 px-4 max-w-2xl mx-auto">
        Discover, hear, and visualize every chord in the book. This interactive chord library supports guitar, ukulele, bass, mandolin, and left-handed players.
      </p>

      <div className="flex justify-center py-8 px-4">
        <iframe
          src="https://guitarapp.com/chords/embedtool?theme=light"
          width="100%"
          height="560"
          style={{ maxWidth: '500px', maxHeight: '550px', border: 'none', overflow: 'hidden' }}
          allow="microphone"
          title="Online Guitar Chord Library"
        ></iframe>
      </div>

      <section className="max-w-5xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-semibold mt-8 mb-4">🎸 What Makes This Chord Library Different?</h2>
        <p>
          Most chord libraries online give you static diagrams, minimal variation, and zero interactivity. This chord library goes beyond by providing:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Every chord type and variation:</strong> Major, minor, diminished, augmented, sus, add9, 7th, 9th, 11th, 13th, jazz chords, slash chords, and more.</li>
          <li><strong>Alternate voicings:</strong> Multiple shapes across the fretboard for each chord.</li>
          <li><strong>Left-handed mode:</strong> Instantly flip all diagrams for left-handed guitarists.</li>
          <li><strong>Live playback:</strong> Click any chord to hear how it sounds—note-by-note or all at once.</li>
          <li><strong>Interactive diagram chart:</strong> Hover, tap, and drag across frets to visualize positions.</li>
          <li><strong>Multiple instruments:</strong> Supports guitar, ukulele, mandolin, and bass.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🖱️ Interactive Chord Diagrams</h2>
        <p>
          See each chord come to life on a virtual fretboard. Every diagram highlights finger placements, note names, and fret numbers. Simply select your root note and chord type, and instantly view:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Suggested fingerings</strong> based on playability</li>
          <li><strong>Multiple voicings</strong> across different positions</li>
          <li><strong>Barre chord options</strong> where applicable</li>
          <li><strong>Live fretboard overlays</strong> showing each note’s role (root, third, fifth, etc.)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🔊 Real-Time Playback & Audio</h2>
        <p>
          Want to hear how that chord sounds before you try it? Our library includes full audio playback with high-quality samples. You can:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Hear chords played <strong>note-by-note</strong> (arpeggiated) or <strong>strummed</strong></li>
          <li>Compare different voicings to find the one that sounds best</li>
          <li>Use a built-in <strong>BPM setting</strong> to simulate playing in rhythm</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🎚️ Built-In Filters & Smart Search</h2>
        <p>
          Finding the exact chord you need is easy. Use advanced filters to sort by:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Instrument type (Guitar, Ukulele, Bass, Mandolin)</li>
          <li>Chord root (A through G#)</li>
          <li>Chord quality (major, minor, dim, aug, etc.)</li>
          <li>Voicing complexity (basic to advanced)</li>
          <li>Left- or right-handed</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🎸 Left-Handed Guitarist Support</h2>
        <p>
          Left-handed players often get ignored in online resources. We’ve built this chord library with full left-hand mode support. With one click, you can:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Flip chord diagrams</li>
          <li>Re-orient the fretboard</li>
          <li>Use mirrored fingerings for accurate practice</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🎶 Support for Guitar, Ukulele, Bass & Mandolin</h2>
        <p>
          This isn’t just a guitar tool. Our chord library includes full visual and audio support for:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Ukulele chords:</strong> Soprano, concert, tenor, and baritone tunings</li>
          <li><strong>Bass guitar chords:</strong> Though less common, chord shapes are shown for 4, 5, and 6-string bass</li>
          <li><strong>Mandolin chords:</strong> Standard tuning and moveable chord shapes</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">📲 Practice Anywhere, On Any Device</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>No downloads, no installs</li>
          <li>Use on your phone, tablet, or desktop</li>
          <li>Perfect for quick chord checks during practice or lessons</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🎓 For Students, Teachers, and Pros Alike</h2>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Students:</strong> Learn how chords are built and how they sound</li>
          <li><strong>Teachers:</strong> Demonstrate voicings live, with visual clarity</li>
          <li><strong>Composers & Pros:</strong> Explore exotic or advanced chord substitutions quickly</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🔐 Always Free, Always Growing</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>New instruments and alternate tunings</li>
          <li>Expanded chord theory lessons</li>
          <li>User-suggested updates and features</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">💡 Learn Chords. Master Music.</h2>
        <p>
          Chords are the foundation of rhythm, harmony, and songwriting. Our online guitar chord library gives you the depth of a textbook with the speed and clarity of an interactive app.
        </p>
        <p className="mt-4">
          Whether you’re mastering your first C major or learning every voicing of a G13#11, this is the tool you’ve been waiting for.
        </p>

      </section>

      <CallToActionSection />
    </>
  );
}