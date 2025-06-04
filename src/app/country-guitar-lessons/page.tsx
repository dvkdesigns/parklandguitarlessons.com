import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Country Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private country guitar lessons with a local teacher near you. Learn country strumming patterns, Nashville-style leads, and classic twang in Parkland and nearby areas.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/country-guitar-lessons',
  },
};

export default function CountryGuitarLessons() {
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
            "description": "Private country guitar lessons in Parkland and surrounding cities. Learn strumming, chicken pickin', and Nashville-style solos from a local instructor.",
            "url": "https://www.parklandguitarlessons.com/country-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/country-guitar-lessons.jpg",
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
        title="Authentic Country Guitar Lessons"
        subtitle="Learn to Pick, Strum & Play With Southern Style"
        herocopy1="Strum along to your favorite country songs and learn the essential skills that define country guitar — from simple acoustic ballads to honky-tonk leads."
        herocopy2="Our private lessons cover chord transitions, country rhythms, chicken pickin’ techniques, and how to back a singer or jam in a band."
        herocopy3="Whether you're brand new to guitar or looking to sharpen your country chops, we’ll guide you step by step."
        imageSrc="/images/country-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Country Guitar Locally</h2>
        <p className="mb-4">Looking for <strong>country guitar lessons near you</strong>? We offer in-home and virtual sessions across Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and surrounding areas. Lessons are tailored to beginners, hobbyists, and intermediate players alike.</p>

        <p className="mb-4">You’ll learn with a local guitar teacher who understands the sound and feel of country music. We focus on:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Basic and intermediate open chord progressions</li>
          <li>Country-style strumming patterns and dynamics</li>
          <li>Chicken pickin’ & hybrid picking techniques</li>
          <li>Classic licks, riffs, and lead fills</li>
          <li>Nashville Number System for learning songs fast</li>
        </ul>

        <p className="mb-4">We cover both acoustic and electric country guitar styles so you can build confidence whether you're strumming around a campfire or performing live. Country guitar is fun, expressive, and easier to get started than you might think!</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
