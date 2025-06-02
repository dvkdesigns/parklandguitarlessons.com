import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pop Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private pop guitar lessons with a local instructor near you. Learn to play modern pop songs, chord progressions, and rhythm patterns in Parkland and nearby areas.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/pop-guitar-lessons',
  },
};

export default function PopGuitarLessons() {
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
            "description": "Private pop guitar lessons in Parkland, FL and nearby cities. Learn strumming, chord progressions, and how to play your favorite pop songs from a local guitar teacher.",
            "url": "https://www.parklandguitarlessons.com/pop-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/pop-guitar-lessons.jpg",
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
        title="Modern Pop Guitar Lessons"
        subtitle="Learn to Play the Songs You Love"
        herocopy1="Whether you're a beginner or hobbyist, we’ll teach you how to play today’s most popular songs with confidence and ease."
        herocopy2="Our private lessons focus on modern pop progressions, rhythm styles, and how to accompany vocals or build your own arrangements."
        herocopy3="From Taylor Swift to Ed Sheeran, Olivia Rodrigo to Shawn Mendes — if it’s on the charts, we’ll help you play it."
        imageSrc="/images/pop-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Pop Guitar Locally</h2>
        <p className="mb-4">Searching for <strong>pop guitar lessons near you</strong>? We offer in-home and virtual private guitar sessions across Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and nearby areas.</p>

        <p className="mb-4">Pop music is built on catchy chords, clean rhythm, and accessible structure — perfect for beginners and intermediate players alike. You’ll learn:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Modern pop chord progressions and strumming patterns</li>
          <li>How to play full acoustic or electric arrangements</li>
          <li>Accompaniment for singing or performing in duos</li>
          <li>Playing along with backing tracks and loops</li>
          <li>Popular songs from artists students love</li>
        </ul>

        <p className="mb-4">These lessons are especially great for teens, singer-songwriters, and adults who just want to enjoy the guitar again. We tailor each session to your musical taste and experience level.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
