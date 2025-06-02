import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electric Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private electric guitar lessons with a local teacher near you. Learn lead guitar, tone shaping, effects pedals, and your favorite electric riffs and solos.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/electric-guitar-lessons',
  },
};

export default function ElectricGuitarLessons() {
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
            "description": "Private electric guitar lessons in Parkland and nearby cities. Learn tone control, soloing, effects pedals, and genre-specific techniques from a local instructor.",
            "url": "https://www.parklandguitarlessons.com/electric-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/electric-guitar-lessons.jpg",
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
        title="Electric Guitar Lessons That Rock"
        subtitle="Lead, Solo & Sound Like a Pro"
        herocopy1="Learn how to control your tone, play dynamic lead guitar, and use pedals like a pro — all with personalized guidance from a local instructor."
        herocopy2="Whether you're into rock, blues, funk, or modern alt styles, our electric guitar lessons focus on technique, tone, and expression."
        herocopy3="From first-time players to aspiring lead guitarists, we’ll help you plug in, power up, and play with confidence."
        imageSrc="/images/electric-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Electric Guitar Locally</h2>
        <p className="mb-4">Looking for <strong>electric guitar lessons near you</strong>? We offer in-home and online private sessions across Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and more.</p>

        <p className="mb-4">Electric guitar offers endless creativity — from gritty rhythm playing to expressive soloing. Our lessons include:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Power chords, scales, and arpeggios</li>
          <li>Bending, slides, vibrato, and hammer-ons</li>
          <li>Playing with distortion, delay, reverb, and more</li>
          <li>Intro to lead guitar improvisation</li>
          <li>Understanding pickups, amps, and effects pedals</li>
        </ul>

        <p className="mb-4">We tailor each lesson to your style and goals — so you’ll be playing the songs and solos you love with confidence and creativity. All experience levels welcome!</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
