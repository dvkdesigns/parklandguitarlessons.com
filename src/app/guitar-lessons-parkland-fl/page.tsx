import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import LatestBlogSection from '@/components/LatestBlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guitar Lessons in Parkland, FL | Parkland Guitar Lessons',
  description: 'Parkland’s #1 in-home guitar teacher. Personalized, flexible, and stress-free guitar lessons in the comfort of your own home.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/guitar-lessons-parkland-fl',
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
            "description": "We offer private, in-home and online guitar lessons in Parkland, FL tailored to each student’s pace and interests.",
            "url": "https://www.parklandguitarlessons.com/guitar-lessons-parkland-fl",
            "image": "https://www.parklandguitarlessons.com/og/guitar-lessons-parkland-fl.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Parkland",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Parkland, FL"
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
        title="Parkland’s Premier In-Home Guitar Lessons"
        subtitle="Guitar Lessons That Come to You — On Your Terms"
        herocopy1="Learning guitar has never been easier. We offer completely customized, one-on-one lessons from the comfort of your Parkland home — no driving, no stress."
        herocopy2="Whether you're starting from scratch or looking to sharpen your playing, we tailor each lesson around your goals, pace, and preferred musical style."
        herocopy3="We’ve helped dozens of local Parkland students build confidence, skills, and creativity — and we’d love to help you too. Let’s get started!"
        imageSrc="/images/hero.webp"
      />

      <InfoSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />

      <LatestBlogSection
        title="Guitar Learning Tips & Tools"
        slugs={[
          "how-to-choose-the-right-guitar",
          "clases-de-guitarra-en-florida-top-10-busquedas-populares-de-la-comunidad-latina",
          "essential-tips-for-maintaining-your-guitar-in-florida",
          "how-to-tune-your-guitar",
          "learn-guitar-parts-for-beginners",
          "top-10-easy-songs-we-teach-in-parkland-guitar-lessons",
          "a-day-in-the-life-of-a-parkland-guitar-student",
"group-guitar-lessons-for-adults-in-parkland",
"how-parkland-hoa-clubs-are-bringing-guitar-lessons-to-their-resident",
"the-best-musical-hobby-for-active-adults-in-parkland",
"why-adults-in-parkland-are-choosing-to-learn-guitar-now",
        ]}
      />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Parkland Guitar Lesson Coverage Area</h2>
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
