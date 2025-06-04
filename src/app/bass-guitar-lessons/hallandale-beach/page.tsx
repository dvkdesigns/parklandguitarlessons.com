import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Hallandale Beach, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Hallandale Beach, FL. Learn to groove, play with feel, and hold down the rhythm with a local instructor. In-home or online lessons available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/hallandale-beach',
  },
};

export default function BassGuitarLessonsHallandaleBeach() {
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
            "description": "Private bass guitar lessons in Hallandale Beach, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/hallandale-beach",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hallandale Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Hallandale Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Bass Guitar Lessons in Hallandale Beach"
        subtitle="Lock In Your Sound and Rhythm"
        herocopy1="Ready to groove in Hallandale Beach? Our bass guitar lessons help you build solid rhythm, clean technique, and confidence with every note."
        herocopy2="Perfect for beginners or intermediate players looking to jam, join a band, or support a worship team."
        herocopy3="Whether you love gospel, funk, pop, or rock, we’ll help you become the bassist everyone wants to play with."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in Hallandale Beach</h2>
        <p className="mb-4">Searching for <strong>bass guitar lessons near Hallandale Beach</strong>? Our personalized instruction is available in-home or online, designed around your musical taste and learning speed.</p>

        <p className="mb-4">We focus on real-world bass skills that prepare you to groove with a band, follow a chord chart, and develop your own style. Lessons include:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Plucking and fretting control</li>
          <li>Core grooves and genre-specific patterns</li>
          <li>Timing, rhythm, and playing in the pocket</li>
          <li>Improvisation and melodic phrasing</li>
          <li>Jamming with drums and backing tracks</li>
        </ul>

        <p className="mb-4">If you're serious about improving on bass or just starting out the right way, we're here to guide your journey step by step.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
