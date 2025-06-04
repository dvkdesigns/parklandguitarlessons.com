import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in Hollywood, FL | Parkland Guitar Lessons',
  description: 'Learn blues guitar in Hollywood, FL at our studio or your home. Get hands-on lessons in phrasing, 12-bar blues, and soloing from expert instructors.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/hollywood',
  },
};

export default function BluesGuitarLessonsHollywood() {
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
            "description": "Blues guitar lessons available in Hollywood, FL. Take lessons at our studio on Hollywood Blvd or at home. Learn blues soloing, phrasing, and classic styles.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/hollywood",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5701 Hollywood Blvd Suite B",
              "addressLocality": "Hollywood",
              "addressRegion": "FL",
              "postalCode": "33021",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Hollywood, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Blues Guitar Lessons in Hollywood, FL"
        subtitle="In-Studio or In-Home Guitar Training"
        herocopy1="Master blues guitar in Hollywood with private lessons at our studio or your home."
        herocopy2="We’ll guide you through classic blues forms, lead techniques, and the phrasing that makes the blues feel so alive."
        herocopy3="Join us at our studio located at 5701 Hollywood Blvd Suite B — or enjoy the convenience of lessons at your home."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Hollywood Blues Guitar Lessons — Studio or In-Home</h2>
        <p className="mb-4">Located in Hollywood, FL? Come learn at our convenient studio at <strong>5701 Hollywood Blvd Suite B</strong>, or take your blues lessons in-home or online.</p>

        <p className="mb-4">We teach blues styles from Delta to Chicago to Texas blues, with lessons focused on:</p>

        <ul className="list-disc list-inside mb-4">
          <li>12-bar blues and chord rhythm patterns</li>
          <li>Pentatonic soloing, bends, vibrato, and phrasing</li>
          <li>Call-and-response lead work</li>
          <li>Jam-ready riffs and blues standards</li>
          <li>Studio and gig-level preparation</li>
        </ul>

        <p className="mb-4">Come feel the music at our Hollywood studio, or enjoy private instruction from home. Either way, your blues journey starts here.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
