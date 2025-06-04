import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Country Guitar Lessons in Boca Raton, FL | Parkland Guitar Lessons',
  description: 'Private country guitar lessons in Boca Raton, FL. Learn classic country strumming, Nashville licks, and chicken pickin’ with a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/country-guitar-lessons/boca-raton',
  },
};

export default function CountryGuitarLessonsBocaRaton() {
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
            "description": "Country guitar lessons now available in Boca Raton, FL. Learn how to strum, pick, and play country music with a local teacher — in-home or online.",
            "url": "https://www.parklandguitarlessons.com/country-guitar-lessons/boca-raton",
            "image": "https://www.parklandguitarlessons.com/og/country-guitar-lessons.jpg",
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
        title="Country Guitar Lessons in Boca Raton, FL"
        subtitle="Pick It, Strum It, Play It Like You Mean It"
        herocopy1="Discover the charm of country guitar with personalized lessons in Boca Raton."
        herocopy2="Learn timeless country techniques like chicken pickin’, hybrid picking, and rhythm patterns that support a band or solo voice."
        herocopy3="We offer in-home and online lessons tailored to your goals — whether you're playing acoustic classics or electric honky-tonk leads."
        imageSrc="/images/country-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Country Guitar Lessons in Boca Raton</h2>
        <p className="mb-4">Live in or near Boca Raton? Our country guitar lessons bring you closer to the sound and feel of classic and modern country music — taught by a patient, local teacher who’ll help you every step of the way.</p>

        <p className="mb-4">You’ll learn:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Open chord progressions used in country hits</li>
          <li>Down-strumming and alternate bass note patterns</li>
          <li>Lead guitar tricks like bends, double stops, and hammer-ons</li>
          <li>Chicken pickin’ and hybrid picking for extra twang</li>
          <li>The Nashville Number System for easy learning & memorization</li>
        </ul>

        <p className="mb-4">It’s never too late to pick up country guitar — we make it simple, musical, and a whole lot of fun. Check out our <a href="/country-guitar-lessons" className="text-blue-600 underline">main country guitar page</a> for more info and available locations.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
