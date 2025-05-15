import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import LatestBlogSection from '@/components/LatestBlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In-Home Guitar Lessons in Parkland | Parkland Guitar Lessons',
  description: 'Private guitar lessons tailored to your goals. Serving Parkland, FL and surrounding areas. Book your first session today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/',
  },
};



export default function Home() {
  return (
    <>
      {/* ✅ Structured Data for LocalBusiness */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Parkland Guitar Lessons",
            "description": "Private, one-on-one guitar lessons in Parkland, FL. In-home and online available.",
            "url": "https://www.parklandguitarlessons.com",
            "image": "https://www.parklandguitarlessons.com/og/home.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Parkland",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234", // Replace with your real number
            "areaServed": {
              "@type": "Place",
              "name": "Parkland, FL and surrounding areas"
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
        title="Parkland’s Premier In-Home Guitar Lessons"
        subtitle="Unlock Your Musical Potential with Personalized, In-Home Guitar
                Lessons!"
        herocopy1="Imagine learning guitar in the comfort of your own home, with lessons
        designed just for you. Whether you're strumming your first chords or
        mastering full songs, our one-on-one, in-person guitar lessons are
        tailored to match your unique style, pace, and goals."
        herocopy2="We offer a supportive and friendly environment where you can grow as a
        musician, all while enjoying the convenience of flexible scheduling.
        Local and fully customized to meet your needs, our lessons are perfect
        for all skill levels."
        herocopy3="Experience the joy of learning in a way that’s stress-free and
        effective. Book your first lesson today and take the first step toward
        unlocking your musical potential!"
        imageSrc="/images/hero.svg" 
      />

      <InfoSection />

      <TestimonialsSection />

      <PricingSection />

      <CallToActionSection />

      <LatestBlogSection />
    </>
  );
}
