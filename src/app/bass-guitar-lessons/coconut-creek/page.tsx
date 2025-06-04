import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Coconut Creek, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Coconut Creek, FL. Learn groove, timing, and bass technique from a local instructor. In-home or online lessons available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/coconut-creek',
  },
};

export default function BassGuitarLessonsCoconutCreek() {
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
            "description": "Private bass guitar lessons in Coconut Creek, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/coconut-creek",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
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
        title="Bass Guitar Lessons in Coconut Creek"
        subtitle="Learn to Hold Down the Groove"
        herocopy1="New to bass or ready to advance? Our Coconut Creek bass guitar lessons help you build rock-solid rhythm and musical confidence."
        herocopy2="We focus on practical skills like timing, plucking technique, and how to support a band — no fluff, just groove."
        herocopy3="Whether you’re into rock, funk, pop, or gospel, we’ll help you sound like a pro on the low end."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in Coconut Creek</h2>
        <p className="mb-4">Looking for <strong>bass guitar lessons near Coconut Creek</strong>? We offer in-home and online lessons tailored to your pace, style, and musical goals.</p>

        <p className="mb-4">Whether you’re prepping for band practice, learning your first grooves, or just want to jam with confidence, we’ve got you covered. Lessons cover:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Right-hand technique & left-hand coordination</li>
          <li>Classic bass grooves and walking lines</li>
          <li>Playing funk, rock, gospel, and pop bass styles</li>
          <li>Improving timing, phrasing, and song feel</li>
          <li>Following chord changes and playing with a drummer</li>
        </ul>

        <p className="mb-4">Every student is different — and so is every lesson. We keep it fun, practical, and focused on what inspires you most.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
