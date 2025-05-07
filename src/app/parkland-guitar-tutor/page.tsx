import { Metadata } from 'next';
import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import CityBlogSection from '@/components/CityBlogSection';

export const metadata: Metadata = {
  title: 'Parkland Guitar Tutor | In-Home Guitar Lessons in Parkland, FL',
  description: 'Looking for a patient and skilled guitar tutor in Parkland, Florida? We offer private guitar lessons tailored to your pace and style.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/location/parkland-guitar-tutor',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Parkland Guitar Lessons",
  description: metadata.description,
  url: "https://www.parklandguitarlessons.com/location/parkland-guitar-tutor",
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

export default function ParklandGuitarTutorPage() {
  return (
    <>
      <Script
        id="ld-parkland-guitar-tutor"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero
        title="Trusted Parkland Guitar Tutor for All Ages & Skill Levels"
        subtitle="In-Home Guitar Lessons Tailored to Your Style and Goals"
        herocopy1="Looking for a friendly and reliable guitar tutor in Parkland, Florida? We bring music education directly to your home—perfect for beginners, hobbyists, and intermediate players."
        herocopy3="Schedule your first lesson with a Parkland guitar tutor today and experience a custom learning journey at your pace."
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
