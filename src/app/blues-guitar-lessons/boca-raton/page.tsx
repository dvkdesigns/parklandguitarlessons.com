import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in Boca Raton, FL | Parkland Guitar Lessons',
  description: 'Private blues guitar lessons in Boca Raton, FL. Learn to solo, bend, and groove with expressive blues techniques taught by a local guitar instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/boca-raton',
  },
};

export default function BluesGuitarLessonsBocaRaton() {
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
            "description": "Private blues guitar lessons in Boca Raton, FL. Learn 12-bar blues, expressive soloing, and phrasing with a local instructor. In-home and online options available.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/boca-raton",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Boca Raton",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Boca Raton, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Blues Guitar Lessons in Boca Raton"
        subtitle="Play with Soul, Feel, and Groove"
        herocopy1="Learn to bring your guitar to life with expressive blues techniques in the heart of Boca Raton."
        herocopy2="Our blues guitar lessons cover soloing, phrasing, and improvisation, all personalized to your level."
        herocopy3="Take lessons in-home or online with a local instructor who helps you feel every note you play."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Blues Guitar Lessons in Boca Raton, FL</h2>
        <p className="mb-4">Looking for <strong>blues guitar lessons in Boca Raton</strong>? Our private sessions are ideal for beginners and intermediate players ready to explore the soul of blues music.</p>

        <p className="mb-4">You’ll work on the skills that matter most for capturing that blues sound:</p>

        <ul className="list-disc list-inside mb-4">
          <li>12-bar blues and shuffle rhythms</li>
          <li>Bending, slides, and vibrato techniques</li>
          <li>Pentatonic and blues scale soloing</li>
          <li>Classic licks from blues legends</li>
          <li>Improvising over slow blues, swing, and boogie grooves</li>
        </ul>

        <p className="mb-4">Whether you’re playing for fun, jamming with friends, or preparing for live performances — we’ll help you find your voice through the blues. Start your journey with personalized lessons in Boca Raton today.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
