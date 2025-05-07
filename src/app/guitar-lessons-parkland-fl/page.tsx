import { Metadata } from 'next';
import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import CityBlogSection from '@/components/CityBlogSection';

export const metadata: Metadata = {
  title: 'Guitar Lessons in Parkland, FL | Parkland Guitar Lessons',
  description: 'We offer private in-home and virtual guitar lessons in Parkland, Florida, personalized to your goals and skill level.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/guitar-lessons-parkland-fl',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Parkland Guitar Lessons",
  description: metadata.description,
  url: "https://www.parklandguitarlessons.com/guitar-lessons-parkland-fl",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Parkland",
    addressRegion: "FL",
    addressCountry: "US"
  },
  areaServed: {
    "@type": "Place",
    name: "Parkland, FL"
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00"
    }
  ],
  sameAs: [
    "https://www.facebook.com/parklandguitarlessons",
    "https://www.instagram.com/parklandguitarlessons"
  ]
};

export default function ParklandPage() {
  return (
    <>
      <Script
        id="ld-parkland"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero
        title="Top-Rated In-Home Guitar Lessons in Parkland, FL"
        subtitle="Personalized Guitar Lessons for Beginners and Intermediates"
        herocopy1="Ready to start playing guitar in Parkland, Florida? Our expert-led in-home guitar lessons bring the music to you—right in your living room."
        herocopy3="Book your first lesson in Parkland today and discover how stress-free, local, and inspiring in-home guitar lessons can be."
        imageSrc="/images/hero.svg"
      />
      <InfoSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />
      <CityBlogSection city={{ name: 'Parkland' }} />
    </>
  );
}
