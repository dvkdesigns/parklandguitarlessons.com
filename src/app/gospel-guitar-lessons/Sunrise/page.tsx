import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Sunrise FL | Christian Guitar Teacher',
  description: 'Learn gospel guitar in Sunrise, FL with private or virtual lessons. Christian-focused instruction for worship music, gospel rhythm, and praise songs.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons/sunrise',
  },
};

export default function GospelGuitarLessonsSunrise() {
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
            "description": "Faith-based gospel guitar lessons in Sunrise, FL. Learn Christian songs, gospel chords, and worship technique with a local teacher in-home or online.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons/sunrise",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
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
        title="Gospel Guitar Lessons in Sunrise, FL"
        subtitle="Praise-Focused Guitar Classes for All Ages"
        herocopy1="Looking for faith-based music lessons in Sunrise? Our gospel guitar program helps you build confidence and skill through worship music."
        herocopy2="Learn gospel rhythms, Christian chord progressions, and worship team techniques from a dedicated instructor."
        herocopy3="Take lessons from home or online — no experience required, just a desire to play with purpose."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Sunrise Christian Guitar Lessons</h2>
        <p className="mb-4">Our <strong>gospel guitar lessons in Sunrise</strong> are designed to help you worship with your instrument. Whether you're new to guitar or want to grow as a praise team member, our one-on-one lessons will move you forward spiritually and musically.</p>

        <p className="mb-4">We cover everything from:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Gospel strumming and rhythm patterns</li>
          <li>Popular praise and worship songs</li>
          <li>The Nashville Number System</li>
          <li>Chord transitions, walk-ups, and dynamics</li>
          <li>Fretboard fluency in a worship context</li>
        </ul>

        <p className="mb-4">Visit our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar lessons page</a> for more on our teaching approach and nearby service areas.</p>

        <p className="mb-4">Start learning today with <a href="/gospel-guitar-lessons" className="text-blue-600 underline">faith-first guitar lessons in Sunrise</a> — tailored to your calling and your schedule.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near Sunrise</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.3449644791045!2d-80.28540538497247!3d26.160363983389698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90755e7f89b8f%3A0x9936d8b41ae68c7c!2sSunrise%2C%20FL!5e0!3m2!1sen!2sus!4v1716224560566!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}