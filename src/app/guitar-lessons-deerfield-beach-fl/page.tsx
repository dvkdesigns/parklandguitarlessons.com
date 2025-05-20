import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import LatestBlogSection from '@/components/LatestBlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guitar Lessons in Deerfield Beach | Parkland Guitar Lessons',
  description: 'In-home guitar coaching in Deerfield Beach, FL. One-on-one lessons crafted to fit your pace and style. Learn from the comfort of your home!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/guitar-lessons-deerfield-beach-fl',
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
            "description": "In-home guitar lessons in Deerfield Beach, FL. Personalized instruction for beginners and intermediate players.",
            "url": "https://www.parklandguitarlessons.com/guitar-lessons-deerfield-beach-fl",
            "image": "https://www.parklandguitarlessons.com/og/guitar-lessons-deerfield-beach-fl.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Deerfield Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Deerfield Beach, FL and nearby neighborhoods"
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
        title="Deerfield Beach’s Trusted In-Home Guitar Coach"
        subtitle="One-on-One Guitar Lessons That Come to You"
        herocopy1="No more guessing how to improve—our personalized lessons in Deerfield Beach are designed for your learning style and musical taste."
        herocopy2="Whether you're picking up your first guitar or returning after years away, we’ll help you build skill and confidence, one chord at a time."
        herocopy3="We make learning easy, enjoyable, and convenient. Let’s get started on your musical journey right at home."
        imageSrc="/images/hero.webp"
      />

      <InfoSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />

      <LatestBlogSection
        title="From the Blog"
        slugs={[
            "bring-guitar-night-to-your-deerfield-beach-clubhouse",
"how-deerfield-beach-hoas-are-using-guitar-lessons-to-build-community",
"top-deerfield-beach-communities-offering-senior-guitar-lessons",
"why-guitar-is-a-top-hobby-for-adults-in-deerfield-beach",
"why-more-golfers-in-deerfield-beach-are-picking-up-the-guitar",
          "how-to-choose-the-right-guitar",
          "break-out-of-the-pentatonic-box",
          "clases-de-guitarra-en-florida-top-10-busquedas-populares-de-la-comunidad-latina",
          "essential-tips-for-maintaining-your-guitar-in-florida",
          "how-to-tune-your-guitar",
          "learn-guitar-parts-for-beginners",
        ]}
      />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Deerfield Beach Guitar Lesson Service Area</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.903870122019!2d-80.1153696849738!3d26.318664283378316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90031d19808f3%3A0xd48f15a20e2e3a06!2sDeerfield%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1716221602613!5m2!1sen!2sus"
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
