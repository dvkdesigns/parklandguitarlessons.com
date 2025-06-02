import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rock Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private rock guitar lessons for beginners to advanced. Learn power chords, riffs, solos, and classic rock styles from a local teacher near you.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/rock-guitar-lessons',
  },
};

export default function RockGuitarLessons() {
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
            "description": "Private rock guitar lessons in Parkland and nearby cities. In-home or virtual. Learn classic rock riffs, solos, and power chords from a local guitar teacher.",
            "url": "https://www.parklandguitarlessons.com/rock-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/rock-guitar-lessons.jpg",
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
        title="High-Energy Rock Guitar Lessons"
        subtitle="Master Riffs, Solos & Power Chords"
        herocopy1="Unlock the techniques of your favorite rock legends with private lessons tailored to your goals and skill level."
        herocopy2="We’ll teach you classic rock rhythms, soloing fundamentals, distortion tone setup, and how to jam confidently."
        herocopy3="Whether you're into 70s anthems or modern rock radio, our rock guitar classes are structured, fun, and personalized."
        imageSrc="/images/rock-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Rock Guitar Locally</h2>
        <p className="mb-4">Searching for <strong>rock guitar lessons near you</strong>? We offer in-home and virtual rock guitar instruction in Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and nearby areas. Perfect for kids, teens, and adults alike who want to learn how to rock.</p>

        <p className="mb-4">Lessons are taught by a local rock guitarist who focuses on technique, expression, and the energy of live performance. Our rock guitar curriculum includes:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Essential power chord shapes and progressions</li>
          <li>Intro to lead guitar and simple soloing</li>
          <li>Popular rock riffs from AC/DC, Nirvana, and more</li>
          <li>Strumming, muting, and palm muting techniques</li>
          <li>Using amps and pedals to shape your rock tone</li>
        </ul>

        <p className="mb-4">Whether you're picking up the guitar for the first time or reigniting an old passion, our <strong>private rock guitar classes</strong> will get you sounding great — fast. We also offer jam opportunities and songwriting support for intermediate players.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
