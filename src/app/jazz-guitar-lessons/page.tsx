import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jazz Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private jazz guitar lessons in Parkland, FL. Learn jazz chords, improvisation, comping, and soloing techniques from a local guitar instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/jazz-guitar-lessons',
  },
};

export default function JazzGuitarLessons() {
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
            "description": "Private jazz guitar lessons in Parkland, FL and surrounding areas. Learn jazz chords, comping, improvisation, and walking basslines from a local instructor.",
            "url": "https://www.parklandguitarlessons.com/jazz-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/jazz-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Parkland",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Parkland, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Private Jazz Guitar Lessons"
        subtitle="Master Chords, Improv & Sophisticated Sound"
        herocopy1="Learn the language of jazz through personalized guitar lessons that break down complex concepts into approachable steps."
        herocopy2="We’ll guide you through jazz chords, progressions, comping, and soloing — helping you build musical fluency and expressive freedom."
        herocopy3="Whether you're just curious about jazz or preparing for a music program, our local instructor will help you play smarter and smoother."
        imageSrc="/images/jazz-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Jazz Guitar Locally</h2>
        <p className="mb-4">If you’re searching for <strong>jazz guitar lessons near you</strong>, we offer in-home and virtual private instruction in Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and surrounding areas.</p>

        <p className="mb-4">Jazz guitar requires a mix of theory, technique, and feel. Our step-by-step approach makes it approachable and fun. You’ll learn:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Essential jazz chords (7ths, 9ths, 11ths, 13ths)</li>
          <li>Chord substitutions and voicings</li>
          <li>ii–V–I progressions in multiple keys</li>
          <li>Improvisation using modes and arpeggios</li>
          <li>Comping and playing in a small combo setting</li>
        </ul>

        <p className="mb-4">Our <strong>private jazz guitar lessons</strong> are customized for your level — whether you’re brand new to jazz or want to improve your improvisational vocabulary.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
