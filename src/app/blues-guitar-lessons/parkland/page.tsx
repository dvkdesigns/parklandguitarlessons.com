import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in Parkland, FL | Parkland Guitar Lessons',
  description: 'Private blues guitar lessons in Parkland, FL. Learn 12-bar blues, bending, phrasing, and lead guitar skills with a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/parkland',
  },
};

export default function BluesGuitarLessonsParkland() {
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
            "description": "Private blues guitar instruction in Parkland, FL. Learn classic phrasing, 12-bar forms, and lead guitar skills with expert one-on-one guidance.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/parkland",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
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
        title="Blues Guitar Lessons in Parkland, FL"
        subtitle="Let the Music Speak Through You"
        herocopy1="Discover the expressive power of blues guitar right here in Parkland."
        herocopy2="Our private lessons cover phrasing, soloing, and the 12-bar forms that define the genre."
        herocopy3="Perfect for all skill levels — learn at your home or online with a local blues instructor."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Parkland’s Home for Blues Guitar Lessons</h2>
        <p className="mb-4">We’re proud to offer personalized <strong>blues guitar lessons in Parkland, FL</strong>, tailored to your goals and playing style. Whether you're into B.B. King, Clapton, or John Mayer, we’ll help you find your voice.</p>

        <p className="mb-4">Lessons are structured around:</p>

        <ul className="list-disc list-inside mb-4">
          <li>12-bar blues and shuffle grooves</li>
          <li>Call-and-response phrasing techniques</li>
          <li>Minor and major pentatonic scale mastery</li>
          <li>Classic licks, bending, and vibrato skills</li>
          <li>Improvisation over slow blues, funk blues, and boogie</li>
        </ul>

        <p className="mb-4">Take lessons from home or virtually, and start building the skills to jam, solo, and connect emotionally through your guitar.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
