import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import LatestBlogSection from '@/components/LatestBlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guitar Lessons in Hollywood FL | Parkland Guitar Lessons Studio',
  description: 'Private guitar lessons taught at our studio in Hollywood, FL. Visit us at 5701 Hollywood Blvd Suite B. Book your session today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/guitar-lessons-hollywood-fl',
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
            "name": "Parkland Guitar Lessons - Hollywood Studio",
            "description": "In-studio guitar lessons at 5701 Hollywood Blvd Suite B, Hollywood, FL 33021. One-on-one instruction for all levels.",
            "url": "https://www.parklandguitarlessons.com/guitar-lessons-hollywood-fl",
            "image": "https://www.parklandguitarlessons.com/og/guitar-lessons-hollywood-fl.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5701 Hollywood Blvd Suite B",
              "addressLocality": "Hollywood",
              "addressRegion": "FL",
              "postalCode": "33021",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Hollywood, FL and surrounding areas"
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
        title="Guitar Lessons in Hollywood, FL — At Our Studio"
        subtitle="Learn at Our Dedicated Guitar Studio on Hollywood Blvd!"
        herocopy1="Come to our professional studio at 5701 Hollywood Blvd Suite B and enjoy private, in-person guitar lessons tailored to your goals."
        herocopy2="Whether you're a complete beginner or brushing up your skills, we offer a fun and friendly space to grow as a musician."
        herocopy3="Skip the distractions of home and immerse yourself in a focused, inspiring lesson environment. Book your first session today!"
        imageSrc="/images/hero.webp"
      />

      <InfoSection />

      <TestimonialsSection />

      <PricingSection />

      <CallToActionSection />

      <LatestBlogSection
        title="Featured Articles"
        slugs={[
          "adult-guitar-lessons-hollywood",
          "why-hollywood-florida-is-the-perfect-place-to-learn-guitar",
          "benefits-of-in-studio-guitar-lessons",
          "how-to-get-comfortable-in-your-first-guitar-lesson",
          "guitar-practice-tips-for-hollywood-students",
          "how-to-choose-the-right-guitar",
          "essential-tips-for-maintaining-your-guitar-in-florida",
          "how-to-tune-your-guitar",
          "learn-guitar-parts-for-beginners"
        ]}
      />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Visit Us in Hollywood, FL</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.7767687781487!2d-80.2019915!3d26.0111518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a7874de3d249%3A0x8d71f67a93429ea0!2s5701%20Hollywood%20Blvd%20Suite%20B%2C%20Hollywood%2C%20FL%2033021!5e0!3m2!1sen!2sus!4v1717411234567!5m2!1sen!2sus"
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