import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in Coconut Creek, FL | Parkland Guitar Lessons',
  description: 'Private blues guitar lessons in Coconut Creek, FL. Learn expressive solos, 12-bar blues, and groove-based techniques from a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/coconut-creek',
  },
};

export default function BluesGuitarLessonsCoconutCreek() {
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
            "description": "Private blues guitar lessons in Coconut Creek, FL. Learn 12-bar blues, expressive lead techniques, and improvisation with a local guitar teacher. In-home or online options.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/coconut-creek",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coconut Creek",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Coconut Creek, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Blues Guitar Lessons in Coconut Creek"
        subtitle="Master the Sound and Soul of the Blues"
        herocopy1="Learn to channel emotion through your guitar with private blues lessons right here in Coconut Creek."
        herocopy2="From soloing and rhythm to technique and theory, we tailor your blues learning experience to fit your style."
        herocopy3="Take lessons in your home or online — perfect for beginners and experienced players looking to improve their feel and phrasing."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Blues Guitar Lessons in Coconut Creek, FL</h2>
        <p className="mb-4">Looking for <strong>blues guitar lessons in Coconut Creek</strong>? You’ve come to the right place. Our lessons are perfect for anyone looking to get into the groove of blues guitar — or take their skills to the next level.</p>

        <p className="mb-4">Each session focuses on real-world blues guitar skills like:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Classic 12-bar blues progressions</li>
          <li>Soloing using minor and major pentatonic scales</li>
          <li>Bending, slides, hammer-ons, and expressive playing</li>
          <li>Turnarounds, fills, and phrasing techniques</li>
          <li>Playing over different blues feels — slow blues, shuffle, boogie</li>
        </ul>

        <p className="mb-4">Whether you love Clapton, B.B. King, Stevie Ray Vaughan or John Mayer — we’ll help you find your own voice in the blues. Book your first lesson today in Coconut Creek.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
