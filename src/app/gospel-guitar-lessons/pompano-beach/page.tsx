import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in Pompano Beach FL | Christian Guitar Teacher',
  description: 'Learn gospel guitar in Pompano Beach, FL with a faith-driven instructor. In-home or virtual lessons for worship music, gospel strumming, and Christian songs.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons-pompano-beach',
  },
};

export default function GospelGuitarLessonsPompanoBeach() {
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
            "description": "Offering gospel guitar lessons in Pompano Beach, FL. Learn praise & worship guitar, gospel chords, and spiritual rhythms with a local Christian teacher.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons-pompano-beach",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pompano Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Pompano Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in Pompano Beach, FL"
        subtitle="Worship Guitar Training in Your Neighborhood"
        herocopy1="Gospel guitar lessons are now available in Pompano Beach! Build your musical skills while growing in faith through songs that inspire."
        herocopy2="We teach you gospel-style rhythm, praise progressions, and worship band techniques tailored for all ages and skill levels."
        herocopy3="Start your journey today with in-home or online lessons from a local Christian instructor."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Faith-Focused Guitar Instruction in Pompano Beach</h2>
        <p className="mb-4">Our <strong>Pompano Beach gospel guitar lessons</strong> combine the joy of music with the heart of worship. Whether you want to play in church or strum at home, we offer a structured, inspiring learning experience rooted in faith.</p>

        <p className="mb-4">Our in-home and virtual Christian guitar lessons include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Strumming and rhythm for praise music</li>
          <li>Chord progressions with embellishments and walk-ups</li>
          <li>Intro to the Nashville Number System</li>
          <li>Playing by ear and following worship leaders</li>
          <li>Classic and modern gospel songs</li>
        </ul>

        <p className="mb-4">Visit the <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar page</a> to see our full program and other cities served.</p>

        <p className="mb-4">Book a <a href="/gospel-guitar-lessons" className="text-blue-600 underline">trial lesson in Pompano Beach</a> and let’s bring your worship to life through music.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near Pompano Beach</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.730373307164!2d-80.12273948497269!3d26.263290683397257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d901f6d275c065%3A0x696c9f7c70525dbf!2sPompano%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1716224300854!5m2!1sen!2sus"
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
