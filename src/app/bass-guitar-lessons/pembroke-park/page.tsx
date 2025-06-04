import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Pembroke Park, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Pembroke Park, FL. Learn to groove, play tight rhythms, and develop confidence with a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/pembroke-park',
  },
};

export default function BassGuitarLessonsPembrokePark() {
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
            "description": "Private bass guitar lessons in Pembroke Park, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/pembroke-park",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pembroke Park",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Pembroke Park, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Bass Guitar Lessons in Pembroke Park"
        subtitle="Groove, Feel, and Solid Foundation"
        herocopy1="Our bass guitar lessons in Pembroke Park are designed to help you build rock-solid rhythm and confidence — even if you’re starting from scratch."
        herocopy2="Learn how to lock in with drums, follow chord progressions, and develop basslines that bring songs to life."
        herocopy3="Flexible in-home and online lessons available, personalized to your goals and musical style."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in Pembroke Park, FL</h2>
        <p className="mb-4">Looking for <strong>bass guitar lessons near Pembroke Park</strong>? Our lessons are designed to help beginners and intermediate players master groove, technique, and musicality — one step at a time.</p>

        <p className="mb-4">We’ll work with you on the core building blocks of great bass playing, including:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Plucking and muting technique for clean tone</li>
          <li>Funk, rock, gospel, and pop grooves</li>
          <li>Walking basslines and root-based progressions</li>
          <li>How to stay locked in with a drummer</li>
          <li>Improvisation and song-based practice</li>
        </ul>

        <p className="mb-4">Each lesson is personalized and paced to match your level — all taught by an instructor who helps you build confidence and have fun with your playing.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
