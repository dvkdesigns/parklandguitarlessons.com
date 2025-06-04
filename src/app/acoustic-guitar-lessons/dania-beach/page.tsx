import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic Guitar Lessons in Dania Beach, FL | Parkland Guitar Lessons',
  description: 'Personalized acoustic guitar lessons in Dania Beach, FL. Expert instruction tailored to all skill levels. Schedule your first session today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/acoustic-guitar-lessons/dania-beach',
  },
};

export default function AcousticGuitarLessonsDaniaBeach() {
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
            "description": "Tailored acoustic guitar lessons in Dania Beach, FL. Professional guidance for beginners to advanced players, offered in-home or online.",
            "url": "https://www.parklandguitarlessons.com/acoustic-guitar-lessons-dania-beach",
            "image": "https://www.parklandguitarlessons.com/images/acoustic-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dania Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Dania Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Acoustic Guitar Lessons in Dania Beach, FL"
        subtitle="Master Your Acoustic Guitar Skills"
        herocopy1="Achieve your musical goals through personalized acoustic guitar lessons in Dania Beach."
        herocopy2="Our instructors cater to all levels, ensuring you gain confidence playing the songs you love."
        herocopy3="Enjoy convenient in-home or online lessons specifically designed around your interests and ambitions."
        imageSrc="/images/acoustic-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Acoustic Guitar Instruction in Dania Beach</h2>
        <p className="mb-4">For residents of Dania Beach, FL, our acoustic guitar lessons provide individualized teaching methods to fit your unique style and musical tastes. Our experienced instructors help you quickly advance your playing skills in a relaxed and supportive environment.</p>

        <p className="mb-4">Lesson highlights include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Fundamental chord techniques and rhythm mastery</li>
          <li>Expert fingerstyle and advanced picking methods</li>
          <li>Personalized song instruction and repertoire building</li>
          <li>Clear, practical music theory</li>
          <li>Stage presence and confidence-building</li>
        </ul>

        <p className="mb-4">Find out more by checking our <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">main acoustic guitar lessons page</a>, including details and other areas served.</p>

        <p className="mb-4">Start your musical journey now! Discover <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">acoustic guitar lessons near Dania Beach</a> and book your first session today.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Acoustic Guitar Lessons in Dania Beach</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.4190104609545!2d-80.15284958497515!3d26.05286098342986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9aa9b0d71f7cb%3A0x72765ddbf79f06f2!2sDania%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1716224179852!5m2!1sen!2sus"
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