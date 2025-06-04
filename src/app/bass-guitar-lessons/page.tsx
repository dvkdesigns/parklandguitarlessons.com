import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons with a local instructor near you. Learn groove, timing, and bass technique with personalized lessons in Parkland and surrounding areas.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons',
  },
};

export default function BassGuitarLessons() {
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
            "description": "Private bass guitar lessons in Parkland, FL and surrounding areas. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
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
        title="Private Bass Guitar Lessons"
        subtitle="Lock In the Groove & Drive the Band"
        herocopy1="Whether you're brand new or building on your rhythm skills, we’ll teach you how to groove with confidence on bass."
        herocopy2="Our bass guitar lessons cover timing, technique, song structure, and how to hold down a band’s foundation."
        herocopy3="Perfect for students who love funk, rock, gospel, pop, or jazz — or just want to play the low end like a pro."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Bass Guitar Locally</h2>
        <p className="mb-4">Looking for <strong>bass guitar lessons near you</strong>? We offer private in-home and online bass lessons across Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and surrounding areas.</p>

        <p className="mb-4">Bass is the backbone of every great song. Our lessons help you develop groove, timing, and bassline creativity — with topics like:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Right-hand plucking & left-hand fretting accuracy</li>
          <li>Essential grooves and walking basslines</li>
          <li>Funk, rock, gospel, and pop bass techniques</li>
          <li>Scales, modes, and rhythmic phrasing</li>
          <li>How to play with a drummer and follow chord progressions</li>
        </ul>

        <p className="mb-4">Our approach makes learning fun, structured, and musical — whether you're preparing for a band, a church team, or just want to lay down solid low-end lines at home.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
