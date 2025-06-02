import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Funk Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private funk guitar lessons in Parkland and nearby areas. Learn syncopated rhythm, 9th chords, and tight groove playing from a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/funk-guitar-lessons',
  },
};

export default function FunkGuitarLessons() {
  return (
    <>
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Parkland Guitar Lessons",
            "description": "Private funk guitar lessons in Parkland, FL and surrounding areas. Learn rhythm guitar, syncopation, percussive muting, and groove-based playing with a local teacher.",
            "url": "https://www.parklandguitarlessons.com/funk-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/funk-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Parkland",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Parkland, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Funk Guitar Lessons with Groove"
        subtitle="Tight Rhythms. Clean Chops. Pure Pocket."
        herocopy1="Learn how to lay down syncopated rhythms and master funk guitar with private lessons focused on timing, tone, and feel."
        herocopy2="We'll teach you the signature chords, muting techniques, and strumming precision that drive the funk — from James Brown to Vulfpeck."
        herocopy3="Whether you’re learning for fun or to join a band, our local funk guitar lessons will have you in the pocket fast."
        imageSrc="/images/funk-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Funk Guitar Locally</h2>
        <p className="mb-4">Looking for <strong>funk guitar lessons near you</strong>? We offer private in-home and virtual sessions in Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and surrounding areas.</p>

        <p className="mb-4">Funk guitar is all about rhythm and control. Our lessons break down the mechanics of groove playing so you can stay tight and expressive. You’ll learn:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Ninth chords, dominant extensions & funky voicings</li>
          <li>16th-note syncopation & percussive muting</li>
          <li>Funk strumming patterns and ghost notes</li>
          <li>Rhythm guitar techniques for band or solo settings</li>
          <li>Funk licks, fills, and minimalist lead phrasing</li>
        </ul>

        <p className="mb-4">From old-school grooves to modern funk fusion, our <strong>private funk guitar lessons</strong> will sharpen your rhythm and expand your style. All skill levels welcome.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
