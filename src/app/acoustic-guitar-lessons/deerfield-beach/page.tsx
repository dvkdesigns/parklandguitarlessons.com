import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic Guitar Lessons in Deerfield Beach, FL | Parkland Guitar Lessons',
  description: 'Tailored acoustic guitar lessons in Deerfield Beach, FL. Expert instructors for all skill levels. Book your lesson today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/acoustic-guitar-lessons/deerfield-beach',
  },
};

export default function AcousticGuitarLessonsDeerfieldBeach() {
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
            "description": "Personalized acoustic guitar lessons in Deerfield Beach, FL. Professional instruction for beginners to advanced musicians, offered in-home or online.",
            "url": "https://www.parklandguitarlessons.com/acoustic-guitar-lessons-deerfield-beach",
            "image": "https://www.parklandguitarlessons.com/images/acoustic-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Deerfield Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Deerfield Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Acoustic Guitar Lessons in Deerfield Beach, FL"
        subtitle="Elevate Your Guitar Skills"
        herocopy1="Take your acoustic guitar abilities to new heights with personalized lessons in Deerfield Beach."
        herocopy2="Our expert instructors adapt lessons to your individual skill level, guiding you in playing your favorite music confidently."
        herocopy3="Lessons available conveniently at your home or online, designed around your musical goals."
        imageSrc="/images/acoustic-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Acoustic Guitar Instruction in Deerfield Beach</h2>
        <p className="mb-4">In Deerfield Beach, FL, we offer tailored acoustic guitar instruction designed specifically for your interests and skill level. Our friendly, skilled teachers will help you develop technique, confidence, and musical enjoyment.</p>

        <p className="mb-4">Our lesson offerings include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Chord fundamentals and rhythmic training</li>
          <li>Fingerstyle and advanced picking techniques</li>
          <li>Customized song instruction tailored to your preferences</li>
          <li>Simplified music theory and fretboard mastery</li>
          <li>Building performance confidence and stage presence</li>
        </ul>

        <p className="mb-4">Discover more by visiting our <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">main acoustic guitar lessons page</a>, where additional details and nearby areas served are listed.</p>

        <p className="mb-4">Ready to start playing? Explore <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">acoustic guitar lessons near Deerfield Beach</a> and schedule your first lesson today.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Acoustic Guitar Lessons in Deerfield Beach</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.6432662610974!2d-80.10289648497329!3d26.31841298340868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d902b4c2676ce9%3A0xa564a27db82cf49!2sDeerfield%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1716224179852!5m2!1sen!2sus"
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
