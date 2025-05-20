import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import LatestBlogSection from '@/components/LatestBlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guitar Lessons in Margate | Parkland Guitar Lessons',
  description: 'Margate’s trusted source for private guitar lessons at home. Learn at your pace with flexible scheduling and expert instruction.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/guitar-lessons-margate-fl',
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
            "description": "In-home guitar instruction in Margate, FL. Professional, flexible, and tailored lessons to meet your goals.",
            "url": "https://www.parklandguitarlessons.com/guitar-lessons-margate-fl",
            "image": "https://www.parklandguitarlessons.com/og/guitar-lessons-margate-fl.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Margate",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Margate, FL and nearby areas"
            },
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "10:00",
                "closes": "18:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/parklandguitarlessons",
              "https://www.instagram.com/parklandguitarlessons"
            ]
          }),
        }}
      />
      <Hero
        title="Private Guitar Lessons in Margate"
        subtitle="Learn in Your Living Room — No Stress, No Commute"
        herocopy1="Skip the traffic and crowded studios. We bring customized, one-on-one guitar lessons directly to your home in Margate."
        herocopy2="From first chords to full songs, every lesson is crafted to fit your goals, music taste, and skill level. No pressure, just progress."
        herocopy3="Whether you're a beginner or brushing up after a break, we make learning convenient, comfortable, and motivating."
        imageSrc="/images/hero.webp"
      />

      <InfoSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />

      <LatestBlogSection
        title="From the Blog"
        slugs={[
          "how-to-choose-the-right-guitar",
          "The-Perfect-30-Minute-Practice-Routine-for-Beginner-Guitarists",
          "break-out-of-the-pentatonic-box",
          "clases-de-guitarra-en-florida-top-10-busquedas-populares-de-la-comunidad-latina",
          "essential-tips-for-maintaining-your-guitar-in-florida",
          "group-guitar-lessons-for-adults-in-parkland",
          "how-to-tune-your-guitar",
          "learn-guitar-parts-for-beginners",
          "top-10-easy-songs-we-teach-in-parkland-guitar-lessons"
        ]}
      />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Margate Area Guitar Lessons</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.2076606580017!2d-80.21411108497316!3d26.24452898339195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91a3398699a9d%3A0x409bf71f3a1dba41!2sMargate%2C%20FL!5e0!3m2!1sen!2sus!4v1716222401164!5m2!1sen!2sus"
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
