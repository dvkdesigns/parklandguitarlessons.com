import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private gospel guitar lessons with a faith-based focus. Learn gospel chords, praise and worship songs, and spiritual rhythms from a local teacher near you.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons',
  },
};

export default function GospelGuitarLessons() {
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
            "description": "Private gospel guitar lessons in Parkland and surrounding areas. In-home or virtual. Learn praise and worship guitar with a local instructor.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/gospel-guitar-lessons.jpg",
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
        title="Faith-Based Gospel Guitar Lessons"
        subtitle="Worship Through Music — One Chord at a Time"
        herocopy1="Discover the joy of gospel guitar with one-on-one instruction that blends musical growth and spiritual expression."
        herocopy2="We teach you how to play praise and worship songs, understand the Nashville Number System, and master gospel strumming patterns like 12/8 feels and shuffles."
        herocopy3="Whether you’re a beginner or play regularly at church, our gospel guitar classes are tailored to help you shine."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Gospel Guitar Locally</h2>
        <p className="mb-4">Looking for <strong>gospel guitar lessons near you</strong>? We offer private and small group options throughout Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and surrounding cities. Our faith-based curriculum covers everything from <strong>beginner gospel guitar instruction</strong> to advanced <strong>praise and worship guitar lessons</strong>.</p>

        <p className="mb-4">You'll learn from a local guitar teacher who understands both music theory and the heart of worship. Lessons include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Gospel chord progressions with embellishments and walk-ups</li>
          <li>The Nashville Number System for easy transposing</li>
          <li>12/8 grooves, gospel shuffles, and strumming dynamics</li>
          <li>Playing in a worship team setting</li>
          <li>Popular gospel and Christian songs</li>
        </ul>

        <p className="mb-4">Whether you're a complete beginner or brushing up to join a church band, our <strong>Christian guitar lessons</strong> are structured, uplifting, and designed for your goals. Virtual and in-home gospel guitar classes available.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
