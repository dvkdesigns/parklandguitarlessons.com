import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in Dania Beach, FL | Parkland Guitar Lessons',
  description: 'Private blues guitar lessons in Dania Beach, FL. Master blues rhythm, soloing, bends, and phrasing with a local instructor. In-home or online.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/dania-beach',
  },
};

export default function BluesGuitarLessonsDaniaBeach() {
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
            "description": "Private blues guitar instruction in Dania Beach, FL. Learn classic 12-bar blues, phrasing, and lead guitar skills with a local expert. In-home and virtual lessons offered.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/dania-beach",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
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
        title="Blues Guitar Lessons in Dania Beach"
        subtitle="Feel the Groove. Play from the Heart."
        herocopy1="Ready to master the expressive style of blues guitar? Our lessons in Dania Beach teach you to play with feeling and skill."
        herocopy2="From foundational grooves to signature licks, you'll gain confidence and control over your tone and timing."
        herocopy3="We offer in-home and virtual options, with lessons tailored to beginners and intermediate players alike."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Blues Guitar Lessons in Dania Beach, FL</h2>
        <p className="mb-4">Searching for <strong>blues guitar lessons in Dania Beach</strong>? Learn to make your guitar sing with private sessions built around your goals and musical style.</p>

        <p className="mb-4">We’ll cover essential techniques and skills like:</p>

        <ul className="list-disc list-inside mb-4">
          <li>12-bar blues forms in major and minor keys</li>
          <li>Lead guitar phrasing and bending control</li>
          <li>Minor/major pentatonic scale mastery</li>
          <li>Signature blues licks and call-and-response playing</li>
          <li>Improvisation over slow and fast blues grooves</li>
        </ul>

        <p className="mb-4">Whether you’re a beginner or returning player, we’ll guide you every step of the way. Start learning blues guitar in Dania Beach with a teacher who makes it fun, inspiring, and personal.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
