import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Dania Beach, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Dania Beach, FL. Learn groove, timing, and essential bass skills with a local instructor. In-home and online options available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/dania-beach',
  },
};

export default function BassGuitarLessonsDaniaBeach() {
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
            "description": "Private bass guitar lessons in Dania Beach, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/dania-beach",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dania Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Dania Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Bass Guitar Lessons in Dania Beach"
        subtitle="Groove, Lock In, and Play With Confidence"
        herocopy1="Looking to learn bass guitar in Dania Beach? We’ll help you get your rhythm tight, your timing sharp, and your sound full."
        herocopy2="Our lessons go beyond scales and drills — we teach you how to be the backbone of any band."
        herocopy3="Whether you’re into funk, gospel, pop, or classic rock, we’ll help you hold it down on the low end."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in Dania Beach</h2>
        <p className="mb-4">Need <strong>bass guitar lessons near Dania Beach</strong>? Our local instructor offers personalized lessons at home or online for all levels.</p>

        <p className="mb-4">From first grooves to full-on basslines, we cover everything to get you sounding great and feeling confident:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Right-hand plucking and string control</li>
          <li>Foundational grooves and walking basslines</li>
          <li>Rhythm practice with drum loops and backing tracks</li>
          <li>Techniques from funk, gospel, pop, and more</li>
          <li>Creative phrasing and bassline composition</li>
        </ul>

        <p className="mb-4">Every lesson is built around your favorite genres and your pace. Whether you’re new to the bass or building on YouTube basics, we’ll help you level up with intention.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
