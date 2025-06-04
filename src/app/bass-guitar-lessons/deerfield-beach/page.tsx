import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Deerfield Beach, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Deerfield Beach, FL. Learn to groove, develop timing, and build technique with a local instructor. Virtual and in-home lessons available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/deerfield-beach',
  },
};

export default function BassGuitarLessonsDeerfieldBeach() {
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
            "description": "Private bass guitar lessons in Deerfield Beach, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/deerfield-beach",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Deerfield Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Deerfield Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Bass Guitar Lessons in Deerfield Beach"
        subtitle="Groove-Focused Instruction That Clicks"
        herocopy1="Our bass lessons in Deerfield Beach are all about groove, feel, and getting your timing tight."
        herocopy2="Whether you're learning your first riff or tightening up your pocket for band practice, we’ll help you groove with confidence."
        herocopy3="Perfect for fans of rock, funk, gospel, or pop who want to master the low end the right way."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in Deerfield Beach</h2>
        <p className="mb-4">Looking for <strong>bass guitar lessons near Deerfield Beach</strong>? We offer personalized in-home and online lessons tailored to your pace, style, and goals.</p>

        <p className="mb-4">The bass guitar holds the band together — and we’ll show you how to bring structure and rhythm to every song. Lessons include:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Right- and left-hand coordination techniques</li>
          <li>Groove development & timing drills</li>
          <li>Walking bass, funk lines, and syncopation</li>
          <li>Playing with a drummer or metronome</li>
          <li>Applying music theory to real basslines</li>
        </ul>

        <p className="mb-4">Whether you're starting from scratch or upgrading your current skill set, we'll help you sound solid, musical, and band-ready.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
