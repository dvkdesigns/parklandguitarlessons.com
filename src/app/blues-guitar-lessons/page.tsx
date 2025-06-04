import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private blues guitar lessons with a local instructor. Learn 12-bar blues, bending, phrasing, and classic licks in Parkland and nearby cities.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons',
  },
};

export default function BluesGuitarLessons() {
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
            "description": "Private blues guitar lessons in Parkland, FL and surrounding areas. Learn 12-bar blues, phrasing, bending, and lead techniques from a local guitar teacher.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
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
        title="Private Blues Guitar Lessons"
        subtitle="Learn to Bend, Groove, and Tell a Story"
        herocopy1="Master the expressive techniques of blues guitar with private instruction tailored to your level and goals."
        herocopy2="We’ll walk you through 12-bar blues forms, classic turnarounds, signature licks, and phrasing that brings your playing to life."
        herocopy3="Whether you want to jam, solo, or just feel the music deeper, our blues lessons help you connect through your guitar."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Blues Guitar Locally</h2>
        <p className="mb-4">Looking for <strong>blues guitar lessons near you</strong>? We offer in-home and virtual blues instruction throughout Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and nearby areas.</p>

        <p className="mb-4">The blues is the foundation of so many styles — and one of the most emotional forms of guitar playing. You’ll learn:</p>

        <ul className="list-disc list-inside mb-4">
          <li>12-bar blues progressions in multiple keys</li>
          <li>Call-and-response phrasing and lead concepts</li>
          <li>Bending, vibrato, and slide techniques</li>
          <li>Minor/major pentatonic scales and blues licks</li>
          <li>Improvisation over slow blues, shuffles, and boogies</li>
        </ul>

        <p className="mb-4">Our private blues guitar lessons are great for all levels — from absolute beginners to experienced players looking to deepen their feel and technique.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
