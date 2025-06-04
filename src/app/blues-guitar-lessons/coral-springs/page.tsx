import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in Coral Springs, FL | Parkland Guitar Lessons',
  description: 'Take private blues guitar lessons in Coral Springs, FL. Learn soulful lead playing, phrasing, 12-bar blues, and soloing techniques from a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/coral-springs',
  },
};

export default function BluesGuitarLessonsCoralSprings() {
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
            "description": "Blues guitar lessons in Coral Springs, FL. Learn 12-bar blues, bending, phrasing, and classic blues licks. In-home or online private lessons available.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/coral-springs",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coral Springs",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Coral Springs, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Blues Guitar Lessons in Coral Springs"
        subtitle="Feel the Music. Learn to Express Yourself Through Blues."
        herocopy1="Ready to bring your playing to life? Our blues guitar lessons in Coral Springs help you master soulful, expressive guitar work."
        herocopy2="Learn the foundations of blues — from 12-bar structure and pentatonic scales to bends, vibrato, and improvisation."
        herocopy3="Take private lessons in-home or virtually with a local instructor who makes blues simple, fun, and powerful."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Blues Guitar Lessons in Coral Springs, FL</h2>
        <p className="mb-4">Looking for <strong>blues guitar lessons in Coral Springs</strong>? We help guitarists of all levels connect with the feel and energy of the blues.</p>

        <p className="mb-4">We’ll cover techniques and topics like:</p>

        <ul className="list-disc list-inside mb-4">
          <li>12-bar blues in multiple keys</li>
          <li>Bending, vibrato, and blues solo phrasing</li>
          <li>Pentatonic and blues scales — major and minor</li>
          <li>Slide guitar basics and classic licks</li>
          <li>Call-and-response and improvisation exercises</li>
        </ul>

        <p className="mb-4">Whether you want to jam, record, or just play for fun, we’ll help you build confidence and style with every lesson. Book your trial session in Coral Springs today.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
