import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import LatestBlogSection from '@/components/LatestBlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guitar Lessons in Coral Springs | Parkland Guitar Lessons',
  description: 'Looking for private guitar lessons in Coral Springs, FL? We bring customized in-home instruction to you. Flexible, fun, and beginner-friendly!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/guitar-lessons-coral-springs-fl',
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
            "description": "In-home and online private guitar lessons serving Coral Springs, FL and nearby areas. Personalized, flexible, and supportive instruction.",
            "url": "https://www.parklandguitarlessons.com/guitar-lessons-coral-springs-fl",
            "image": "https://www.parklandguitarlessons.com/og/guitar-lessons-coral-springs-fl.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coral Springs",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Coral Springs, FL and surrounding communities"
            },
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
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
        title="Guitar Lessons Delivered to Your Home in Coral Springs"
        subtitle="Fun, Flexible, and Fully Tailored to You"
        herocopy1="Learning guitar doesn’t have to mean commuting or sitting in a generic class. We come to your home in Coral Springs and guide you step-by-step based on your goals and style."
        herocopy2="From brand-new beginners to intermediate players looking to grow, we personalize each lesson to help you stay motivated and make progress you can feel."
        herocopy3="Discover a better way to learn guitar—at your pace, in your space. Start your musical journey today with in-home guitar lessons built just for you."
        imageSrc="/images/hero.webp"
      />

      <InfoSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />

      <LatestBlogSection
        title="Tips, Tricks & Lesson Insights"
        slugs={[
          "how-to-choose-the-right-guitar",
          "The-Perfect-30-Minute-Practice-Routine-for-Beginner-Guitarists",
          "break-out-of-the-pentatonic-box",
          "clases-de-guitarra-en-florida-top-10-busquedas-populares-de-la-comunidad-latina",
          "essential-tips-for-maintaining-your-guitar-in-florida",
          "adult-guitar-lessons-coral-springs",
          "how-to-tune-your-guitar",
          "learn-guitar-parts-for-beginners",
          "top-10-easy-songs-we-teach-in-parkland-guitar-lessons"
        ]}
      />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Serving Coral Springs and Surrounding Neighborhoods</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.2820948302066!2d-80.26119868497249!3d26.27201738340127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d907b2c6240f51%3A0x9d1a6c5e9b1bd9a!2sCoral%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1716220726245!5m2!1sen!2sus"
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
