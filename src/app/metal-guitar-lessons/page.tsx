import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metal Guitar Lessons Near You | Parkland Guitar Lessons',
  description: 'Private metal guitar lessons in Parkland and surrounding areas. Learn palm muting, fast picking, power chords, and advanced techniques with a local instructor.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/metal-guitar-lessons',
  },
};

export default function MetalGuitarLessons() {
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
            "description": "Private metal guitar lessons in Parkland, FL. Learn metal riffs, chugging rhythms, speed picking, and advanced lead guitar techniques from a local instructor.",
            "url": "https://www.parklandguitarlessons.com/metal-guitar-lessons",
            "image": "https://www.parklandguitarlessons.com/og/metal-guitar-lessons.jpg",
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
        title="Metal Guitar Lessons"
        subtitle="Unleash Speed, Precision & Power"
        herocopy1="Shred faster, chug heavier, and rip through solos with personalized metal guitar lessons built for intensity."
        herocopy2="We’ll help you master rhythm riffs, alternate picking, palm muting, and the dark melodic styles of metal from classic to modern."
        herocopy3="Whether you're into Metallica, Megadeth, Slipknot, or your own aggressive sound — we’ve got the chops and structure to get you there."
        imageSrc="/images/metal-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn Metal Guitar Locally</h2>
        <p className="mb-4">Searching for <strong>metal guitar lessons near you</strong>? We offer in-home and virtual training across Parkland, Coral Springs, Coconut Creek, Margate, Boca Raton, and surrounding cities.</p>

        <p className="mb-4">Our lessons break down complex metal techniques into learnable steps. You’ll develop control, speed, and stage confidence through:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Power chords, drop tuning, and palm muting</li>
          <li>Alternate picking, tremolo, and gallop rhythms</li>
          <li>Lead guitar techniques: legato, tapping, sweep picking</li>
          <li>Rhythm training and riff creation</li>
          <li>Metal tone shaping with amps and pedals</li>
        </ul>

        <p className="mb-4">Our <strong>private metal guitar lessons</strong> are ideal for teens, hobbyists, and future shredders who want to play fast, tight, and loud — with the skill to back it up.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
