import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Country Guitar Lessons in Dania Beach, FL | Parkland Guitar Lessons',
  description: 'Private country guitar lessons in Dania Beach, FL. Learn authentic country strumming, Nashville licks, and chicken pickin’ with a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/country-guitar-lessons/dania-beach',
  },
};

export default function CountryGuitarLessonsDaniaBeach() {
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
            "description": "Country guitar lessons now available in Dania Beach, FL. Learn classic country strumming and picking with a local teacher.",
            "url": "https://www.parklandguitarlessons.com/country-guitar-lessons/dania-beach",
            "image": "https://www.parklandguitarlessons.com/og/country-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dania Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Dania Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Country Guitar Lessons in Dania Beach, FL"
        subtitle="Strum, Pick, and Play with Southern Style"
        herocopy1="Bring the sound of Nashville to your fingertips with personalized country guitar lessons in Dania Beach."
        herocopy2="Our lessons cover essential techniques like chicken pickin’, hybrid picking, and classic country strumming patterns."
        herocopy3="Whether you're a beginner or looking to refine your skills, our local instructors tailor lessons to your goals."
        imageSrc="/images/country-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Country Guitar Lessons in Dania Beach</h2>
        <p className="mb-4">Looking to master the twang and groove of country guitar? Our <strong>Dania Beach country guitar lessons</strong> offer in-home and virtual sessions tailored to your skill level and musical interests.</p>

        <p className="mb-4">In each lesson, you'll learn:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Open chord progressions common in country music</li>
          <li>Strumming patterns and rhythm techniques</li>
          <li>Chicken pickin’ and hybrid picking methods</li>
          <li>Classic licks, riffs, and lead fills</li>
          <li>Understanding the Nashville Number System</li>
        </ul>

        <p className="mb-4">Our experienced instructors in Dania Beach are dedicated to helping you achieve your musical goals, whether you're aiming to play around the campfire or on stage.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
