import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import LatestBlogSection from '@/components/LatestBlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Guitar Tutor in Parkland | Parkland Guitar Lessons',
  description: 'Need a personal guitar tutor in Parkland, FL? Learn guitar with custom, 1-on-1 in-home or online lessons designed around you.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/parkland-guitar-tutor',
  },
};

export default function Home() {
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
            "description": "Looking for a private guitar tutor in Parkland, FL? We offer in-home and virtual 1-on-1 guitar lessons for all ages and skill levels.",
            "url": "https://www.parklandguitarlessons.com/parkland-guitar-tutor",
            "image": "https://www.parklandguitarlessons.com/og/parkland-guitar-tutor.jpg",
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
        title="Your Go-To Guitar Tutor in Parkland"
        subtitle="Custom Guitar Lessons, Taught One-on-One"
        herocopy1="Get expert guitar instruction in a supportive, relaxed environment. Whether you're just starting or looking to grow, we tailor every lesson to your needs."
        herocopy2="Learn chords, strumming, theory, songs, and improvisation — all at your pace, in your space. Perfect for kids, teens, or adults looking for guidance and structure."
        herocopy3="We make learning fun, focused, and totally stress-free. Book your first session with a dedicated Parkland guitar tutor today."
        imageSrc="/images/hero.webp"
      />

      <InfoSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />

      <LatestBlogSection
        title="Guitar Tutor Tips & Resources"
        slugs={[
          "how-to-tune-your-guitar",
          "learn-guitar-parts-for-beginners",
          "break-out-of-the-pentatonic-box",
          "group-guitar-lessons-for-adults-in-parkland"
        ]}
      />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find a Guitar Tutor Near You in Parkland</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.772657376721!2d-80.22383108497273!3d26.258251183396926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9098122cfd35f%3A0x73cfc6f4a8e6e0a2!2sParkland%2C%20FL!5e0!3m2!1sen!2sus!4v1716223544321!5m2!1sen!2sus"
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
