import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reggae Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private reggae guitar lessons in Parkland and surrounding cities. Learn offbeat strumming, skank rhythm, and reggae grooves with a local guitar teacher.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/reggae-guitar-lessons',
  },
};

export default function ReggaeGuitarLessons() {
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
            "description": "Private reggae guitar lessons in Parkland, FL and nearby areas. Learn the skank rhythm, offbeat strumming, and reggae grooves with a local instructor.",
            "url": "https://www.parklandguitarlessons.com/reggae-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/reggae-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Parkland",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Parkland, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Reggae Guitar Lessons"
        subtitle="Feel the Groove. Play the Offbeat."
        herocopy1="Dive into the rhythm and soul of reggae guitar with private lessons that teach you the art of the skank and groove-based playing."
        herocopy2="We’ll show you how to create the signature reggae sound through muted strumming, syncopated rhythm, and minimalist voicings."
        herocopy3="Perfect for acoustic or electric players who want to lock into laid-back grooves and island vibes."
        imageSrc="/images/reggae-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Reggae Guitar Locally</h2>
        <p className="mb-4">Looking for <strong>reggae guitar lessons near you</strong>? We offer in-home and virtual sessions throughout Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and surrounding areas.</p>

        <p className="mb-4">Whether you love Bob Marley, Toots and the Maytals, or modern reggae fusion, our lessons break down reggae’s essentials. You'll learn:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Reggae chord progressions and minor-key grooves</li>
          <li>Skank rhythm and offbeat strumming patterns</li>
          <li>Muting techniques and dynamic control</li>
          <li>One-drop and rockers-style rhythm coordination</li>
          <li>Playing alongside dub-style basslines and keys</li>
        </ul>

        <p className="mb-4">Our <strong>private reggae guitar lessons</strong> are great for rhythm players, singer-songwriters, and anyone looking to capture that smooth, pocket-driven feel. No experience needed to get started!</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
