import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gospel Guitar Lessons in North Lauderdale FL | Worship Music Classes',
  description: 'Christian gospel guitar lessons in North Lauderdale, FL. Learn praise & worship guitar from a local instructor in-home or virtually. All ages welcome.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/gospel-guitar-lessons-north-lauderdale',
  },
};

export default function GospelGuitarLessonsNorthLauderdale() {
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
            "description": "Private gospel guitar lessons in North Lauderdale, FL. Learn gospel chords, praise rhythms, and worship team techniques in-home or online.",
            "url": "https://www.parklandguitarlessons.com/gospel-guitar-lessons-north-lauderdale",
            "image": "https://www.parklandguitarlessons.com/images/gospel-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "North Lauderdale",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "North Lauderdale, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Gospel Guitar Lessons in North Lauderdale, FL"
        subtitle="Praise-Filled Guitar Instruction in Your Neighborhood"
        herocopy1="Our gospel guitar program in North Lauderdale is perfect for anyone wanting to worship through music."
        herocopy2="Learn gospel rhythms, Christian chord voicings, and worship band essentials in private sessions tailored to your goals."
        herocopy3="Lessons are offered in-home or virtually, and are open to kids, teens, and adults."
        imageSrc="/images/gospel-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">North Lauderdale Gospel Guitar Classes</h2>
        <p className="mb-4">We provide <strong>faith-based guitar lessons</strong> in North Lauderdale to help you play with purpose and praise. Whether you’re joining a church band or learning for personal expression, our program is built around worship.</p>

        <p className="mb-4">Students in North Lauderdale can expect:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Classic and contemporary gospel progressions</li>
          <li>Praise strumming patterns and 12/8 feel</li>
          <li>Using the Nashville Number System to play by ear</li>
          <li>Practice strategies for solo or worship team use</li>
          <li>Repertoire-building with meaningful songs</li>
        </ul>

        <p className="mb-4">Visit our <a href="/gospel-guitar-lessons" className="text-blue-600 underline">main gospel guitar page</a> for more details and to explore nearby service areas.</p>

        <p className="mb-4">Now is the perfect time to begin your <a href="/gospel-guitar-lessons" className="text-blue-600 underline">North Lauderdale gospel guitar journey</a>. Get started with a free trial lesson today.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Gospel Guitar Lessons Near North Lauderdale</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.6560743842957!2d-80.22010618497265!3d26.21503128339301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9086aef8b3815%3A0xe9a063ecbf4fa84f!2sNorth%20Lauderdale%2C%20FL!5e0!3m2!1sen!2sus!4v1716224671273!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
