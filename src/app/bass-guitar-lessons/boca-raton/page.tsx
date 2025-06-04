import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Boca Raton, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Boca Raton, FL. Learn groove, timing, and bass technique with personalized instruction at home or online.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/boca-raton',
  },
};

export default function BassGuitarLessonsBocaRaton() {
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
            "description": "Private bass guitar lessons in Boca Raton, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/boca-raton",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Boca Raton",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Boca Raton, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Bass Guitar Lessons in Boca Raton"
        subtitle="Learn to Lock in the Groove"
        herocopy1="Whether you're just starting or improving your rhythm chops, our Boca Raton bass lessons teach you how to groove with confidence."
        herocopy2="You'll learn technique, song structure, timing, and how to lay down the low end that drives every band."
        herocopy3="Perfect for fans of funk, rock, gospel, pop, or jazz — and anyone ready to own the groove."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in Boca Raton</h2>
        <p className="mb-4">Searching for <strong>bass guitar lessons near Boca Raton</strong>? We provide in-home and virtual lessons for all ages and levels, right here in your area.</p>

        <p className="mb-4">The bass player holds down the rhythm and harmony — and our lessons focus on building that solid musical foundation. You'll develop core skills like:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Plucking hand control & fretting precision</li>
          <li>Grooves, walking bass, and common patterns</li>
          <li>Techniques for funk, pop, rock, and gospel</li>
          <li>How to play in time and support a band</li>
          <li>Understanding progressions, modes, and rhythm phrasing</li>
        </ul>

        <p className="mb-4">Every session is built around your musical taste and goals — from learning your favorite basslines to jamming with a drummer or prepping for your first band rehearsal.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
