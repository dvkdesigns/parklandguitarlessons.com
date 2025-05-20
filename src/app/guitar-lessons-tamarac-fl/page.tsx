import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import LatestBlogSection from '@/components/LatestBlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guitar Lessons in Tamarac | Parkland Guitar Lessons',
  description: 'Get personalized guitar lessons in Tamarac, FL. In-home instruction that fits your goals, schedule, and skill level.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/guitar-lessons-tamarac-fl',
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
            "description": "Offering in-home private guitar lessons in Tamarac, FL. Perfect for beginners or players looking to sharpen their skills.",
            "url": "https://www.parklandguitarlessons.com/guitar-lessons-tamarac-fl",
            "image": "https://www.parklandguitarlessons.com/og/guitar-lessons-tamarac-fl.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tamarac",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Tamarac, FL and nearby areas"
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
        title="Tamarac Guitar Lessons That Come to You"
        subtitle="One-on-One Lessons at Home — Easy, Comfortable, Effective"
        herocopy1="Skip the hassle of traffic and group classes. We provide personal guitar instruction right in your Tamarac home."
        herocopy2="Whether you're learning chords for the first time or working on advanced techniques, we adapt to your goals and learning style."
        herocopy3="Lessons are laid-back but structured — the perfect balance for real progress with zero pressure."
        imageSrc="/images/hero.webp"
      />

      <InfoSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />

      <LatestBlogSection
        title="Guitar Tips, Tricks & Insights"
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
        <h2 className="text-2xl font-bold mb-4 text-center">Guitar Lessons in Tamarac, FL</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.626709674402!2d-80.24082668497346!3d26.23140128338762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d908f9b35002d5%3A0x82d49d1506b4e122!2sTamarac%2C%20FL!5e0!3m2!1sen!2sus!4v1716222943671!5m2!1sen!2sus"
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
