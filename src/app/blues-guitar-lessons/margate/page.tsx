import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Margate, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Margate, FL. Learn to groove, improve your rhythm, and master bass fundamentals with a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/margate',
  },
};

export default function BassGuitarLessonsMargate() {
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
            "description": "Private bass guitar lessons in Margate, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/margate",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Margate",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Margate, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Bass Guitar Lessons in Margate"
        subtitle="Lock In the Groove With Confidence"
        herocopy1="Ready to become the bassist every band wants? Our Margate bass guitar lessons help you build timing, tone, and groove — one note at a time."
        herocopy2="From funk and pop to gospel and rock, we tailor your lessons to the music you love and your personal goals."
        herocopy3="Learn at home in Margate or online — with patient instruction that keeps you motivated and moving forward."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in Margate, FL</h2>
        <p className="mb-4">Searching for <strong>bass guitar lessons near Margate</strong>? Whether you're picking up the bass for the first time or building on past experience, we’ll help you develop real-world skills that sound great and feel right.</p>

        <p className="mb-4">You’ll focus on fundamentals and groove techniques that make you a strong, supportive bass player. Lessons include:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Plucking and fretting technique</li>
          <li>Timing, pocket playing, and rhythm control</li>
          <li>Grooves and riffs from funk, pop, and rock</li>
          <li>Bassline construction and improvisation</li>
          <li>Locking in with drums and backing tracks</li>
        </ul>

        <p className="mb-4">Every lesson is hands-on, clear, and structured around your favorite music. You’ll build confidence, consistency, and creativity on bass — fast.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
