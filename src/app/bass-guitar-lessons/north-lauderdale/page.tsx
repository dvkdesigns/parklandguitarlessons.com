import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in North Lauderdale, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in North Lauderdale, FL. Learn groove, timing, and bassline fundamentals with a local instructor. In-home or online lessons available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/north-lauderdale',
  },
};

export default function BassGuitarLessonsNorthLauderdale() {
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
            "description": "Private bass guitar lessons in North Lauderdale, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/north-lauderdale",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "North Lauderdale",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "North Lauderdale, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Bass Guitar Lessons in North Lauderdale"
        subtitle="Groove. Rhythm. Confidence."
        herocopy1="Learn how to lock in your groove and hold down the rhythm with bass guitar lessons in North Lauderdale."
        herocopy2="Our local instructors break down technique, timing, and song structure in a way that’s fun and easy to follow."
        herocopy3="Whether you're a beginner or picking up where YouTube left off, you’ll get personalized instruction that fits your goals."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in North Lauderdale</h2>
        <p className="mb-4">Searching for <strong>bass guitar lessons near North Lauderdale</strong>? We offer private, one-on-one instruction either at your home or virtually — customized to your pace and musical taste.</p>

        <p className="mb-4">Our lessons are built to make you a solid, versatile bass player with skills that translate to any style. You'll learn:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Plucking technique and tone control</li>
          <li>Foundational basslines and rhythmic grooves</li>
          <li>Timing exercises and jam practice with loops</li>
          <li>Funk, rock, gospel, pop and more</li>
          <li>How to play with drummers and follow chord charts</li>
        </ul>

        <p className="mb-4">No fluff — just fun, results-driven bass guitar training that helps you sound better, play tighter, and build real musical confidence.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
