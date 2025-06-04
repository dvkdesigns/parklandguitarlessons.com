import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Pompano Beach, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Pompano Beach, FL. Learn timing, groove, and bassline skills with a local instructor. In-home and online lessons available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/pompano-beach',
  },
};

export default function BassGuitarLessonsPompanoBeach() {
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
            "description": "Private bass guitar lessons in Pompano Beach, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/pompano-beach",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pompano Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Pompano Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Bass Guitar Lessons in Pompano Beach"
        subtitle="Learn to Lock In & Groove With Confidence"
        herocopy1="Our bass guitar lessons in Pompano Beach help you build solid rhythm, clean technique, and musical feel — no matter your experience level."
        herocopy2="You’ll learn how to support a band, follow progressions, and lay down basslines that drive the music."
        herocopy3="Lessons are available in-home or online, tailored to your style and pace."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in Pompano Beach, FL</h2>
        <p className="mb-4">Looking for <strong>bass guitar lessons near Pompano Beach</strong>? Our one-on-one sessions are designed for beginners, intermediate players, and returning bassists who want to groove with confidence and play the music they love.</p>

        <p className="mb-4">You’ll learn real-world bass guitar skills including:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Right-hand technique and plucking control</li>
          <li>Funk, gospel, rock, and pop grooves</li>
          <li>Root motion, walking bass, and scale use</li>
          <li>Rhythm practice with metronomes and backing tracks</li>
          <li>Creative bassline building and band jamming skills</li>
        </ul>

        <p className="mb-4">Each lesson is fun, clear, and designed to help you progress every single week — whether you’re starting fresh or refining your tone and timing.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
