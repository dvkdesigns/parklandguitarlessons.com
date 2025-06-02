import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latin Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private Latin guitar lessons in Parkland and surrounding areas. Learn Latin rhythms, fingerpicking, and popular styles like salsa, bossa nova, and flamenco.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/latin-guitar-lessons',
  },
};

export default function LatinGuitarLessons() {
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
            "description": "Private Latin guitar lessons in Parkland, FL and surrounding cities. Learn salsa, flamenco, bossa nova, and Latin strumming techniques from a local instructor.",
            "url": "https://www.parklandguitarlessons.com/latin-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/latin-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Parkland",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Parkland, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Latin Guitar Lessons"
        subtitle="Rhythm. Passion. Precision."
        herocopy1="Learn the infectious rhythms and vibrant chord movements of Latin guitar with private lessons tailored to your style."
        herocopy2="From salsa to bossa nova, flamenco to Latin pop — we’ll help you master the strumming patterns, fingerpicking techniques, and dynamic flair that define Latin music."
        herocopy3="Perfect for all levels, our lessons bring cultural flavor and musical depth to your guitar journey."
        imageSrc="/images/latin-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Latin Guitar Locally</h2>
        <p className="mb-4">Looking for <strong>Latin guitar lessons near you</strong>? We offer private in-home and virtual sessions in Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and the surrounding area.</p>

        <p className="mb-4">Latin guitar covers a wide range of beautiful, rhythmic styles. Our lessons can include:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Clave rhythm and syncopated strumming</li>
          <li>Fingerpicking patterns in bossa nova and bolero</li>
          <li>Flamenco-inspired rasgueado and percussive technique</li>
          <li>Latin pop and acoustic arrangements</li>
          <li>Chord progressions common in salsa, tango, and rumba</li>
        </ul>

        <p className="mb-4">Whether you speak Spanish or not, the language of Latin music is universal. Our <strong>Latin guitar lessons</strong> will help you play with soul, rhythm, and musical purpose — one note at a time.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
