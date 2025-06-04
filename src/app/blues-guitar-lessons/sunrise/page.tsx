import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in Sunrise, FL | Parkland Guitar Lessons',
  description: 'Learn blues guitar in Sunrise, FL with private lessons. Explore 12-bar blues, phrasing, bends, and improvisation with a local guitar teacher.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/sunrise',
  },
};

export default function BluesGuitarLessonsSunrise() {
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
            "description": "Private blues guitar instruction in Sunrise, FL. In-home or online lessons tailored to all skill levels, covering licks, phrasing, and blues improvisation.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/sunrise",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sunrise",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Sunrise, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Blues Guitar Lessons in Sunrise, FL"
        subtitle="Feel Every Note — Play with Soul"
        herocopy1="Our blues guitar lessons in Sunrise help you unlock feel, tone, and groove — the heart of blues music."
        herocopy2="From classic 12-bar progressions to phrasing that tells a story, we guide you step by step through the blues."
        herocopy3="Learn from home or online with a local blues instructor who helps you play with purpose."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Blues Guitar Lessons in Sunrise</h2>
        <p className="mb-4">Whether you're a beginner or a longtime player looking to get deeper into blues, our <strong>Sunrise blues guitar lessons</strong> offer personalized, results-driven instruction that fits your goals and schedule.</p>

        <p className="mb-4">We’ll help you build skills like:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Understanding the 12-bar blues and variations</li>
          <li>Classic blues licks, bends, and expressive phrasing</li>
          <li>Improvisation and solo structure</li>
          <li>Minor/major pentatonic navigation</li>
          <li>Building confidence to jam with others</li>
        </ul>

        <p className="mb-4">No matter your age or background, our lessons help you connect emotionally through the guitar and master the art of the blues.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
