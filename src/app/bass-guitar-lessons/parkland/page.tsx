import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Parkland, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Parkland, FL. Learn groove, timing, and song-based technique with a local expert. In-home or online options available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/parkland',
  },
};

export default function BassGuitarLessonsParkland() {
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
            "description": "Private bass guitar lessons in Parkland, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/parkland",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
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
        title="Bass Guitar Lessons in Parkland"
        subtitle="Your Groove Starts Here"
        herocopy1="Based right here in Parkland, our bass guitar lessons help you build confidence, rhythm, and real musical ability — no matter your level."
        herocopy2="We teach students how to groove, follow progressions, and play basslines that make a band sound complete."
        herocopy3="Lessons are available in-home or online with flexible scheduling and a personal touch."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in Parkland, FL</h2>
        <p className="mb-4">Looking for <strong>bass guitar lessons right here in Parkland</strong>? You're in the right place. We're based locally and work with students of all ages — teaching bass in a way that’s practical, song-driven, and confidence-boosting.</p>

        <p className="mb-4">Our lesson approach helps you lock in your timing, strengthen technique, and learn songs you actually want to play:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Plucking and fretting coordination</li>
          <li>Grooves and fills from funk, pop, and gospel</li>
          <li>Walking bass and root-based progressions</li>
          <li>Timing drills using metronomes and drum tracks</li>
          <li>Jam-style lessons that teach you to lock in with others</li>
        </ul>

        <p className="mb-4">Whether you're a brand new beginner or picking up bass after a long break, we’ll help you find your groove and enjoy the process. Let's get started in Parkland!</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
