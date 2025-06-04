import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in North Lauderdale, FL | Parkland Guitar Lessons',
  description: 'Blues guitar lessons in North Lauderdale, FL. Learn phrasing, classic licks, and 12-bar blues with in-home or virtual private lessons.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/north-lauderdale',
  },
};

export default function BluesGuitarLessonsNorthLauderdale() {
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
            "description": "Private blues guitar lessons in North Lauderdale, FL. Learn to play the blues with expert instruction in phrasing, lead, and rhythm. In-home and virtual options available.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/north-lauderdale",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
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
        title="Blues Guitar Lessons in North Lauderdale, FL"
        subtitle="Personalized Lessons That Groove"
        herocopy1="Unlock the emotional power of the blues with one-on-one lessons in North Lauderdale."
        herocopy2="We’ll help you master blues chord progressions, phrasing, and soloing with structure and soul."
        herocopy3="Learn at home or online with a local instructor who makes learning blues guitar fun and rewarding."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Blues Guitar Lessons in North Lauderdale</h2>
        <p className="mb-4">Want to get deeper into blues guitar? Our private lessons in <strong>North Lauderdale</strong> make it easy to build skill and confidence at your own pace.</p>

        <p className="mb-4">Your custom lesson plan may include:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Classic blues licks, phrases, and rhythm parts</li>
          <li>12-bar blues in multiple styles and tempos</li>
          <li>Minor and major pentatonic scales</li>
          <li>Bending, vibrato, and expressive soloing</li>
          <li>Improvising over blues backtracks and jams</li>
        </ul>

        <p className="mb-4">Whether you're jamming for fun or want to perform, our blues lessons in North Lauderdale will help you sound and feel like a real player.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
