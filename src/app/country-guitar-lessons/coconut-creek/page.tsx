import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Country Guitar Lessons in Coconut Creek, FL | Parkland Guitar Lessons',
  description: 'Local country guitar lessons in Coconut Creek, FL. Learn authentic strumming, fingerpicking, and Nashville-style guitar from a private teacher.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/country-guitar-lessons/coconut-creek',
  },
};

export default function CountryGuitarLessonsCoconutCreek() {
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
            "description": "Country guitar lessons now available in Coconut Creek, FL. Learn classic country strumming and picking with a local teacher.",
            "url": "https://www.parklandguitarlessons.com/country-guitar-lessons/coconut-creek",
            "image": "https://www.parklandguitarlessons.com/og/country-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coconut Creek",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Coconut Creek, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Country Guitar Lessons in Coconut Creek, FL"
        subtitle="Classic Country Meets Modern Skill Building"
        herocopy1="Pick up your guitar and start strumming along to the sounds of classic country and Americana — right here in Coconut Creek."
        herocopy2="Our lessons are built around your goals, teaching rhythm techniques, hybrid picking, and timeless country progressions."
        herocopy3="In-home or virtual options make it easy to get started, no matter your level."
        imageSrc="/images/country-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Country Guitar Lessons in Coconut Creek</h2>
        <p className="mb-4">Our private country guitar lessons in Coconut Creek give you a hands-on, song-based approach to learning. You’ll learn the roots and tricks that define the genre — from old-school Hank to modern country-pop.</p>

        <p className="mb-4">In each lesson, you'll build skills like:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Strumming patterns used in country ballads and up-tempo hits</li>
          <li>Intro to chicken pickin’ and fingerstyle blends</li>
          <li>Fretboard awareness using the Nashville Number System</li>
          <li>Playing in time with strong rhythm and chord changes</li>
          <li>Classic licks, fills, and soloing concepts</li>
        </ul>

        <p className="mb-4">Country guitar is fun, accessible, and expressive. See our <a href="/country-guitar-lessons" className="text-blue-600 underline">main country guitar page</a> to learn more or find nearby locations.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
