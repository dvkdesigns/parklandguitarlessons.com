import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import LatestBlogSection from '@/components/LatestBlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adult Guitar Lessons in Parkland | Parkland Guitar Lessons',
  description: 'Friendly, flexible guitar lessons for adult learners in Parkland, FL. Learn at your own pace in a judgment-free, in-home environment.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/adult-guitar-lessons-parkland',
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
            "description": "In-home guitar lessons for adults in Parkland, FL. Comfortable and customized instruction for hobbyists and beginners alike.",
            "url": "https://www.parklandguitarlessons.com/adult-guitar-lessons-parkland",
            "image": "https://www.parklandguitarlessons.com/og/adult-guitar-lessons-parkland.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Parkland",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Parkland, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />
      <Hero
        title="Adult Guitar Lessons in Parkland"
        subtitle="Judgment-Free, One-on-One Coaching for Adults"
        herocopy1="It’s never too late to pick up the guitar. Our adult-focused lessons are designed around your pace, your taste, and your schedule — no pressure, no pretentiousness."
        herocopy2="Whether you’re learning for the first time or picking it back up after years away, we’ll guide you with clear instruction, patient support, and real progress."
        herocopy3="Enjoy the confidence that comes with learning in your own space, on your own terms. Start your musical journey today — we’ll meet you wherever you are."
        imageSrc="/images/hero.webp"
      />

      <InfoSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />

      <LatestBlogSection
        title="Adult Learning Tips & Practice Advice"
        slugs={[
          "how-to-choose-the-right-guitar",
          "The-Perfect-30-Minute-Practice-Routine-for-Beginner-Guitarists",
          "group-guitar-lessons-for-adults-in-parkland",
          "essential-tips-for-maintaining-your-guitar-in-florida"
        ]}
      />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Adult Guitar Lessons in Parkland, FL</h2>
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
