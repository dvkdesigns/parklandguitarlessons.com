import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bass Guitar Lessons in Sunrise, FL | Parkland Guitar Lessons',
  description: 'Private bass guitar lessons in Sunrise, FL. Learn groove, rhythm, and technique with a local instructor. In-home and online lessons available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/bass-guitar-lessons/sunrise',
  },
};

export default function BassGuitarLessonsSunrise() {
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
            "description": "Private bass guitar lessons in Sunrise, FL. Learn rhythm, groove, and basslines with a local instructor. In-home and online lessons available.",
            "url": "https://www.parklandguitarlessons.com/bass-guitar-lessons/sunrise",
            "image": "https://www.parklandguitarlessons.com/og/bass-guitar-lessons.jpg",
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
        title="Bass Guitar Lessons in Sunrise"
        subtitle="Build Your Groove, Your Way"
        herocopy1="Get started with bass guitar lessons in Sunrise — personalized, practical, and focused on the skills that make you a solid player."
        herocopy2="You’ll learn timing, technique, and how to create basslines that support the music and feel great to play."
        herocopy3="Lessons are available in your home or online, taught by a local instructor who makes learning bass fun and effective."
        imageSrc="/images/bass-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Bass Guitar Lessons in Sunrise, FL</h2>
        <p className="mb-4">Need <strong>bass guitar lessons near Sunrise</strong>? Whether you’re starting out or leveling up your skills, we provide custom lessons that meet you where you are and help you grow week by week.</p>

        <p className="mb-4">In each session, we’ll focus on the essentials that every great bassist needs:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Plucking, fretting, and tone control</li>
          <li>Groove-based exercises and pocket playing</li>
          <li>Popular styles: funk, rock, gospel, and pop</li>
          <li>Timing and rhythm development with a drummer or metronome</li>
          <li>Jamming and building basslines in real songs</li>
        </ul>

        <p className="mb-4">You’ll get personal attention, a supportive teacher, and a clear path to becoming the kind of bassist people want to play with. Let’s get started in Sunrise!</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
