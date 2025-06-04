import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blues Guitar Lessons in Pembroke Park, FL | Parkland Guitar Lessons',
  description: 'Private blues guitar lessons in Pembroke Park, FL. Learn expressive phrasing, 12-bar progressions, and lead guitar skills with a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/blues-guitar-lessons/pembroke-park',
  },
};

export default function BluesGuitarLessonsPembrokePark() {
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
            "description": "Blues guitar lessons in Pembroke Park, FL. Personalized instruction in blues licks, bending, 12-bar patterns, and improvisation with a local teacher.",
            "url": "https://www.parklandguitarlessons.com/blues-guitar-lessons/pembroke-park",
            "image": "https://www.parklandguitarlessons.com/og/blues-guitar-lessons.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pembroke Park",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Pembroke Park, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Blues Guitar Lessons in Pembroke Park, FL"
        subtitle="Discover the Soul of the Blues"
        herocopy1="In Pembroke Park, we bring the blues to life through custom-tailored guitar lessons."
        herocopy2="Learn how to bend, slide, and solo with feel and confidence — whether you’re brand new or an experienced player."
        herocopy3="Our in-home and virtual lessons are perfect for all ages and skill levels."
        imageSrc="/images/blues-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Blues Guitar Lessons in Pembroke Park</h2>
        <p className="mb-4">If you're looking to capture the sound and soul of blues music, our one-on-one <strong>blues guitar lessons in Pembroke Park</strong> are the perfect place to start.</p>

        <p className="mb-4">You'll learn:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Classic 12-bar progressions and shuffles</li>
          <li>How to bend notes and phrase like the legends</li>
          <li>Minor and major pentatonic scale application</li>
          <li>Signature licks and turnarounds</li>
          <li>Improvising over different blues grooves</li>
        </ul>

        <p className="mb-4">Take lessons from home or online, and gain a deeper connection with your playing. The blues starts here.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
