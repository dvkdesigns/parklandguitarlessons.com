import Script from 'next/script';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import LatestBlogSection from '@/components/LatestBlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In-Home Guitar Lessons in Boca Raton | Parkland Guitar Lessons',
  description: 'Private guitar lessons tailored to your goals. Serving Boca Raton, FL and surrounding areas. Book your first session today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/guitar-lessons-boca-raton-fl',
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
            "description": "Private, one-on-one guitar lessons in Boca Raton, FL. In-home and online available.",
            "url": "https://www.parklandguitarlessons.com/guitar-lessons-boca-raton-fl",
            "image": "https://www.parklandguitarlessons.com/og/guitar-lessons-boca-raton-fl.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Boca Raton",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-555-1234",
            "areaServed": {
              "@type": "Place",
              "name": "Boca Raton, FL and surrounding areas"
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
        title="Boca Raton’s Premier In-Home Guitar Lessons"
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
        imageSrc="/images/hero.webp"
      />

      <InfoSection />

      <TestimonialsSection />

      <PricingSection />

      <CallToActionSection />

      <LatestBlogSection
        title="Featured Articles"
        slugs={[
          "adult-guitar-lessons-boca-raton",
"bring-guitar-to-your-boca-raton-clubhouse-or-hoa",
"guitar-after-golf-a-creative-hobby-for-boca-raton-golfers",
"how-boca-raton-hoa-clubs-are-enhancing-community-life-with-guitar-lessons",
"top-boca-raton-retirement-communities-for-guitar-lessons",
"why-guitar-is-the-best-hobby-for-adults-in-boca-raton",
          "how-to-choose-the-right-guitar",
          "clases-de-guitarra-en-florida-top-10-busquedas-populares-de-la-comunidad-latina",
          "essential-tips-for-maintaining-your-guitar-in-florida",
          "how-to-tune-your-guitar",
          "learn-guitar-parts-for-beginners",
        ]}
      />

      <div className="max-w-5xl mx-auto p-6">
  <h2 className="text-2xl font-bold mb-4 text-center">Serving Boca Raton and Nearby</h2>
  <div className="w-full h-[400px] rounded overflow-hidden shadow">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.7378772380673!2d-80.126137!3d26.368306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91f32d4150e15%3A0x32ea2c36aa1e319a!2sBoca%20Raton%2C%20FL!5e0!3m2!1sen!2sus!4v1716220065423!5m2!1sen!2sus"
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
