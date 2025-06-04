import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Coral Springs, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Coral Springs, FL. Learn timing, groove, and real-world bass skills with a local instructor. In-home or virtual lessons available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/coral-springs',
  },
};

export default function BassGuitarLessonsCoralSprings() {
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
            "description": "Private bass guitar lessons in Coral Springs, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/coral-springs",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
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
        title="Bass Guitar Lessons in Coral Springs"
        subtitle="Master the Groove — One Note at a Time"
        herocopy1="Our Coral Springs bass guitar lessons are perfect for beginners and intermediates who want to lock in rhythm and learn the role of bass in a band."
        herocopy2="From plucking and fretting technique to playing with a drummer or backing a singer, we’ll teach you to play like a real bassist."
        herocopy3="You’ll learn real music — not just drills — and gain confidence with every note."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in Coral Springs</h2>
        <p className="mb-4">Need <strong>bass guitar lessons near Coral Springs</strong>? We offer flexible in-home and online lessons that adapt to your skill level and goals.</p>

        <p className="mb-4">The bass is all about feel, rhythm, and supporting the groove. With our local instructors, you’ll develop a strong foundation in:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Right-hand plucking & tone control</li>
          <li>Fingerstyle grooves and walking basslines</li>
          <li>Pop, gospel, funk, and rock techniques</li>
          <li>Playing with a metronome, drummer, or loop</li>
          <li>Building confidence as a rhythm section player</li>
        </ul>

        <p className="mb-4">Whether you're looking to jam with friends, join a band, or just groove at home — we’ll help you get there, one lesson at a time.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
