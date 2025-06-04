import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in Pompano Beach, FL | Parkland Guitar Lessons',
  description: 'One-on-one blues guitar lessons in Pompano Beach, FL. Learn bending, phrasing, classic blues licks, and 12-bar grooves with a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/pompano-beach',
  },
};

export default function BluesGuitarLessonsPompanoBeach() {
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
            "description": "Blues guitar instruction in Pompano Beach, FL. Learn expressive solos, 12-bar blues, and signature licks through private in-home or online lessons.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/pompano-beach",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
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
        title="Blues Guitar Lessons in Pompano Beach, FL"
        subtitle="Master the Language of the Blues"
        herocopy1="Turn your guitar into a storytelling instrument with personalized blues lessons in Pompano Beach."
        herocopy2="We’ll guide you through 12-bar forms, blues phrasing, scales, and signature solo techniques."
        herocopy3="Whether you prefer electric or acoustic, you’ll gain skills and confidence that last a lifetime."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Blues Guitar Lessons in Pompano Beach</h2>
        <p className="mb-4">Live in <strong>Pompano Beach</strong> and want to explore blues guitar? Our private, structured lessons give you the tools and techniques to develop a soulful, expressive sound — right from home or online.</p>

        <p className="mb-4">Topics include:</p>

        <ul className="list-disc list-inside mb-4">
          <li>12-bar blues patterns & rhythm styles</li>
          <li>Classic blues licks and lead guitar techniques</li>
          <li>Improvisation using minor/major pentatonic scales</li>
          <li>Bending, vibrato, and articulation</li>
          <li>Playing over backing tracks and building phrasing</li>
        </ul>

        <p className="mb-4">No matter your skill level, we’ll help you build a strong blues foundation and a feel for the groove.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
