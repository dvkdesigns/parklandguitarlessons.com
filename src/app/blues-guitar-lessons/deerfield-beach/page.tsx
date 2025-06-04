import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in Deerfield Beach, FL | Parkland Guitar Lessons',
  description: 'Take private blues guitar lessons in Deerfield Beach, FL. Learn 12-bar blues, soulful phrasing, and lead guitar techniques from a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/deerfield-beach',
  },
};

export default function BluesGuitarLessonsDeerfieldBeach() {
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
            "description": "Blues guitar lessons in Deerfield Beach, FL. Learn expressive guitar skills like bending, 12-bar blues progressions, and blues improvisation. In-home or online available.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/deerfield-beach",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Deerfield Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Deerfield Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Blues Guitar Lessons in Deerfield Beach"
        subtitle="Turn Emotion into Music with the Power of the Blues"
        herocopy1="Explore the sound and soul of blues guitar with private lessons right here in Deerfield Beach."
        herocopy2="From slow blues ballads to up-tempo shuffles, you’ll learn the phrasing, tone, and rhythm that define this timeless style."
        herocopy3="Lessons are tailored to your level — beginners and advanced players welcome. Take lessons at home or online."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Blues Guitar Lessons in Deerfield Beach, FL</h2>
        <p className="mb-4">Looking for <strong>blues guitar lessons in Deerfield Beach</strong>? Our experienced instructors bring the feel of the blues right to your fingertips with custom-tailored private sessions.</p>

        <p className="mb-4">You’ll learn how to:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Play through 12-bar blues in various keys</li>
          <li>Solo with confidence using pentatonic and blues scales</li>
          <li>Master expressive techniques like bends, vibrato, and slides</li>
          <li>Create memorable licks and improvise freely</li>
          <li>Lock in rhythm and lead parts for full band playing</li>
        </ul>

        <p className="mb-4">Whether you’re drawn to Clapton, Stevie Ray, or the roots of Chicago blues — our program will help you sound the part. Let’s get started in Deerfield Beach!</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
