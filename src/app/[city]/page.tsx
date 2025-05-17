import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import CityBlogSection from '@/components/CityBlogSection';

type CityContent = {
  name: string;
  description: string;
  subtitle?: string;
};

const cityData: Record<string, CityContent> = {
  'guitar-lessons-parkland-fl': { name: 'Parkland', subtitle: 'In-home and virtual guitar coaching tailored to your goals', description: 'We offer private guitar lessons in Parkland, FL for beginners, hobbyists, and intermediate players...' },
  'parkland-guitar-tutor': { name: 'Parkland', subtitle: 'In-home and virtual guitar coaching tailored to your goals', description: 'We offer private guitar lessons in Parkland, FL for beginners, hobbyists, and intermediate players...' },
  'adult-guitar-lessons-parkland': { name: 'Parkland', subtitle: 'In-home and virtual guitar coaching tailored to your goals', description: 'We offer private guitar lessons in Parkland, FL for beginners, hobbyists, and intermediate players...' },
  'guitar-lessons-boca-raton-fl': { name: 'Boca Raton', subtitle: 'Custom guitar lessons for adults and kids alike', description: 'Boca Raton guitar students benefit from our personalized approach...' },
  'guitar-lessons-coral-springs-fl': { name: 'Coral Springs', subtitle: 'Fun, skill-based lessons from a patient and experienced teacher', description: 'In Coral Springs, we help aspiring guitarists develop musical confidence...' },
  'guitar-lessons-coconut-creek-fl': { name: 'Coconut Creek', subtitle: 'Fun, skill-based lessons from a patient and experienced teacher', description: 'In Coconut Creek, we help aspiring guitarists develop musical confidence...' },
  'guitar-lessons-deerfield-beach-fl': { name: 'Deerfield Beach', subtitle: 'Fun, skill-based lessons from a patient and experienced teacher', description: 'In Deerfield Beach, we help aspiring guitarists develop musical confidence...' },
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const city = cityData[params.city];

  const baseUrl = 'https://www.parklandguitarlessons.com';
  const path = `/guitar-lessons/${params.city}`;
  const canonicalUrl = `${baseUrl}${path}`;

  if (!city) {
    return {
      title: 'Guitar Lessons | Parkland Guitar Lessons',
      description: 'Find personalized, in-home guitar lessons in South Florida.',
      alternates: {
        canonical: `${baseUrl}/guitar-lessons`, // fallback canonical
      },
    };
  }

  return {
    title: `Guitar Lessons in ${city.name} | Parkland Guitar Lessons`,
    description: city.description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}


// ✅ Correct page component with NO TYPING
export default async function CityPage({ params }: any) {
  const city = cityData[params.city];

  if (!city) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Parkland Guitar Lessons",
    "description": city.description,
    "url": `https://www.parklandguitarlessons.com/${params.city}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "Place",
      "name": `${city.name}, FL`
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
  };

  return (
    <>
      <Script
        id={`ld-city-${params.city}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero
        title={`Top-Rated In-Home Guitar Lessons in ${city.name}, FL`}
        subtitle={`Personalized Guitar Lessons for Beginners and Intermediates in ${city.name} and Surrounding Areas`}
        herocopy1={`Ready to start playing guitar in ${city.name}, Florida? Our expert-led in-home guitar lessons bring the music to you—right in your living room.`}
        herocopy3={`Book your first lesson in ${city.name} today and discover how stress-free, local, and inspiring in-home guitar lessons can be.`}
        imageSrc="/images/hero.svg"
      />
      <InfoSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />
      <CityBlogSection city={{ name: city.name }} />
    </>
  );
}

// ✅ Static params generator
export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city,
  }));
}
