import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Tamarac, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Tamarac, FL. Learn to groove, stay in the pocket, and build confidence with a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/tamarac',
  },
};

export default function BassGuitarLessonsTamarac() {
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
            "description": "Private bass guitar lessons in Tamarac, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/tamarac",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tamarac",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Tamarac, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Bass Guitar Lessons in Tamarac"
        subtitle="Learn the Groove, Play with Confidence"
        herocopy1="Want to improve your rhythm, technique, and musical feel? Our bass guitar lessons in Tamarac are designed just for that."
        herocopy2="We work with beginners and experienced players to build a strong groove, understand song structure, and develop real-world bass skills."
        herocopy3="Take lessons in-home or online — either way, it’s personalized, clear, and effective."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in Tamarac, FL</h2>
        <p className="mb-4">Looking for <strong>bass guitar lessons near Tamarac</strong>? We offer flexible, private instruction focused on groove, timing, and musicality — whether you’re brand new or picking it back up.</p>

        <p className="mb-4">We cover the most important skills every bass player needs to build confidence and play with others:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Right-hand plucking and tone shaping</li>
          <li>Timing drills and rhythm workouts</li>
          <li>Groove-based playing in funk, rock, and gospel</li>
          <li>Simple theory and bassline building</li>
          <li>Practice strategies that get results</li>
        </ul>

        <p className="mb-4">Lessons are fun, productive, and built around the kind of music you actually want to play. Let’s get you sounding great on bass in Tamarac!</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
