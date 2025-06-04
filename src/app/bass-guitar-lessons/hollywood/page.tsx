import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Hollywood, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Hollywood, FL. Learn to groove, play with confidence, and develop technique at our Hollywood studio or online.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/hollywood',
  },
};

export default function BassGuitarLessonsHollywood() {
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
            "description": "Private bass guitar lessons offered at our Hollywood, FL studio. Learn rhythm, groove, and basslines with a professional instructor. In-studio or online options available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/hollywood",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5701 Hollywood Blvd Suite B",
              "addressLocality": "Hollywood",
              "addressRegion": "FL",
              "postalCode": "33021",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Hollywood, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Bass Guitar Lessons in Hollywood, FL"
        subtitle="Learn Bass at Our Hollywood Studio"
        herocopy1="Join us for private bass guitar lessons right here in Hollywood at our local studio on Hollywood Blvd."
        herocopy2="Whether you're starting fresh or want to tighten up your groove, we’ll help you learn real-world bass skills in a fun, focused setting."
        herocopy3="In-studio and virtual lessons available — flexible, supportive, and completely personalized."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Visit Us at 5701 Hollywood Blvd, Suite B</h2>
        <p className="mb-4">Looking for <strong>bass guitar lessons near Hollywood, FL</strong>? Our teaching studio is conveniently located at <strong>5701 Hollywood Blvd, Suite B</strong>, right in the heart of Hollywood. Students from Dania Beach, Hallandale, Pembroke Park, and nearby areas are welcome.</p>

        <p className="mb-4">In your lessons, we’ll cover essential skills while keeping it fun and creative:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Right-hand plucking and finger control</li>
          <li>Groove-building and rhythm exercises</li>
          <li>Funk, rock, gospel, and pop basslines</li>
          <li>Timing, feel, and how to lock in with a drummer</li>
          <li>Practical music theory for bass players</li>
        </ul>

        <p className="mb-4">You can learn in-person at our <strong>Hollywood studio</strong> or from home via Zoom or FaceTime. We tailor every session to your level, goals, and musical taste.</p>

        <p className="mb-4">Ready to feel confident on the low end? Schedule a lesson at our <strong>Hollywood location</strong> today and start grooving like a pro.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
