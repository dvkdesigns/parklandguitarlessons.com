import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fingerstyle Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private fingerstyle guitar lessons in Parkland and surrounding areas. Learn fingerpicking, independence, and solo acoustic performance with a local guitar teacher.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/fingerstyle-guitar-lessons',
  },
};

export default function FingerstyleGuitarLessons() {
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
            "description": "Private fingerstyle guitar lessons in Parkland, FL and nearby areas. Learn to fingerpick, combine melody and bass, and perform solo acoustic guitar arrangements.",
            "url": "https://www.parklandguitarlessons.com/fingerstyle-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/fingerstyle-guitar-lessons.jpg",
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
        title="Fingerstyle Guitar Lessons"
        subtitle="Play Melody, Bass & Rhythm — All at Once"
        herocopy1="Learn the art of fingerstyle guitar with lessons that teach you how to play beautiful, full arrangements on your own."
        herocopy2="We’ll show you how to develop independence in your picking hand, navigate complex patterns, and bring out melodies and basslines simultaneously."
        herocopy3="Perfect for acoustic guitarists, solo performers, and anyone who wants to unlock the full potential of fingerpicking."
        imageSrc="/images/fingerstyle-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Fingerstyle Guitar Locally</h2>
        <p className="mb-4">Looking for <strong>fingerstyle guitar lessons near you</strong>? We offer in-home and virtual private lessons in Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and surrounding cities.</p>

        <p className="mb-4">Fingerstyle guitar is both expressive and self-contained — you’ll learn to play full-sounding pieces without needing a band. Our lessons include:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Fingerpicking technique for beginners and up</li>
          <li>Thumb independence and alternate bass</li>
          <li>Chord/melody integration and walking bass</li>
          <li>Popular fingerstyle arrangements and tabs</li>
          <li>Dynamic expression, tone, and phrasing</li>
        </ul>

        <p className="mb-4">Whether you want to sound like James Taylor, Tommy Emmanuel, or simply add texture to your acoustic playing, our <strong>private fingerstyle guitar lessons</strong> will help you grow as both a player and performer.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
