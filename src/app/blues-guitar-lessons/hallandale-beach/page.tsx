import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in Hallandale Beach, FL | Parkland Guitar Lessons',
  description: 'Private blues guitar lessons in Hallandale Beach, FL. Learn 12-bar blues, expressive soloing, phrasing, and improvisation. In-home or virtual options available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/hallandale-beach',
  },
};

export default function BluesGuitarLessonsHallandaleBeach() {
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
            "description": "Blues guitar lessons available in Hallandale Beach, FL. Learn blues soloing, bending, phrasing, and 12-bar forms from a local instructor. Take lessons at home or online.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/hallandale-beach",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hallandale Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Hallandale Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Blues Guitar Lessons in Hallandale Beach"
        subtitle="Play With Soul. Learn With Confidence."
        herocopy1="Unlock the language of blues guitar with lessons crafted for you in Hallandale Beach, FL."
        herocopy2="We’ll guide you through bending, phrasing, scales, and rhythms that make blues music come alive."
        herocopy3="Whether you’re a beginner or a seasoned guitarist, our one-on-one lessons help you master blues technique at your pace."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Blues Guitar Lessons in Hallandale Beach, FL</h2>
        <p className="mb-4">Looking to dive into the world of <strong>blues guitar in Hallandale Beach</strong>? We offer personalized instruction that gets to the heart of what makes blues special — emotion, groove, and expression.</p>

        <p className="mb-4">Each lesson is designed to build your skills with topics like:</p>

        <ul className="list-disc list-inside mb-4">
          <li>12-bar blues forms and rhythm comping</li>
          <li>Solo phrasing and improvisation techniques</li>
          <li>Classic blues licks, turnarounds, and fills</li>
          <li>Major/minor pentatonic scale work</li>
          <li>Slide guitar, bends, vibrato, and more</li>
        </ul>

        <p className="mb-4">Whether you’re aiming to jam, perform, or just play for yourself, our blues lessons in Hallandale Beach will help you play with heart and confidence.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
