import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private acoustic guitar lessons with a local teacher near you. Learn fingerpicking, strumming, and acoustic rhythm techniques in Parkland and nearby areas.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/acoustic-guitar-lessons',
  },
};

export default function AcousticGuitarLessons() {
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
            "description": "Private acoustic guitar lessons in Parkland and nearby cities. Learn fingerstyle, rhythm playing, and classic acoustic songs from a local instructor.",
            "url": "https://www.parklandguitarlessons.com/acoustic-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/acoustic-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Parkland",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Parkland, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Private Acoustic Guitar Lessons"
        subtitle="Play with Confidence — Anytime, Anywhere"
        herocopy1="Learn how to play acoustic guitar from a local instructor who makes learning fun, simple, and rewarding."
        herocopy2="We cover strumming, fingerpicking, rhythm patterns, and popular acoustic songs across styles like pop, folk, country, and worship."
        herocopy3="Whether you're starting from scratch or want to enhance your unplugged playing, our acoustic guitar lessons are customized to your pace and goals."
        imageSrc="/images/acoustic-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Acoustic Guitar Locally</h2>
        <p className="mb-4">If you're searching for <strong>acoustic guitar lessons near you</strong>, we offer private in-home and online sessions throughout Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and nearby areas.</p>

        <p className="mb-4">Our instructor focuses on technique, timing, and style — all while helping you build a repertoire of songs you enjoy. You’ll learn to:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Play basic and barre chords cleanly</li>
          <li>Strum naturally with dynamic rhythm</li>
          <li>Use fingerpicking and hybrid styles</li>
          <li>Understand song structure and progressions</li>
          <li>Play acoustic versions of popular songs</li>
        </ul>

        <p className="mb-4">Acoustic guitar is a timeless and versatile instrument. Whether you want to play around the campfire, accompany your voice, or perform unplugged — we’ll get you sounding great from day one.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
