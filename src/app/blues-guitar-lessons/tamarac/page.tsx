import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in Tamarac, FL | Parkland Guitar Lessons',
  description: 'Tamarac’s best blues guitar lessons – private instruction on 12-bar blues, lead phrasing, bending, and jam-ready skills. In-home or virtual lessons available.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/tamarac',
  },
};

export default function BluesGuitarLessonsTamarac() {
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
            "description": "Blues guitar lessons available in Tamarac, FL with a local instructor. Learn phrasing, 12-bar blues, scales, and expressive soloing in a private setting.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/tamarac",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tamarac",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Tamarac, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Blues Guitar Lessons in Tamarac, FL"
        subtitle="Authentic Blues Playing Starts Here"
        herocopy1="Get started with private blues guitar lessons in Tamarac and tap into the soul of your instrument."
        herocopy2="From Texas shuffle to Chicago blues, we cover phrasing, rhythm, scales, and expression tailored to you."
        herocopy3="Take lessons at home or online and build your blues skills with a local teacher who gets it."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Blues Guitar Lessons in Tamarac</h2>
        <p className="mb-4">If you’re in <strong>Tamarac, FL</strong> and ready to learn blues guitar, we’ve got you covered. Our one-on-one lessons are crafted to help you understand the language of the blues while building solid guitar fundamentals.</p>

        <p className="mb-4">Our blues program includes:</p>

        <ul className="list-disc list-inside mb-4">
          <li>12-bar blues and rhythmic variations</li>
          <li>Lead guitar and solo phrasing</li>
          <li>Famous blues licks and turnaround riffs</li>
          <li>Bending, vibrato, and expressive tone techniques</li>
          <li>How to jam, improvise, and build solos</li>
        </ul>

        <p className="mb-4">Whether you love B.B. King, Stevie Ray Vaughan, or want your own blues voice, our lessons in Tamarac help you play with confidence and feel.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
