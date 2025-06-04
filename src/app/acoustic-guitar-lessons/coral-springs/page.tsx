import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic Guitar Lessons in Coral Springs, FL | Parkland Guitar Lessons',
  description: 'Customized acoustic guitar lessons in Coral Springs, FL for all ages and abilities. Enhance your skills with expert instruction. Book today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/acoustic-guitar-lessons/coral-springs',
  },
};

export default function AcousticGuitarLessonsCoralSprings() {
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
            "description": "Professional acoustic guitar lessons in Coral Springs, FL. Customized instruction for beginners and advanced students, offered in-home or online.",
            "url": "https://www.parklandguitarlessons.com/acoustic-guitar-lessons-coral-springs",
            "image": "https://www.parklandguitarlessons.com/images/acoustic-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coral Springs",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Coral Springs, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Acoustic Guitar Lessons in Coral Springs, FL"
        subtitle="Your Journey to Musical Mastery"
        herocopy1="Develop your acoustic guitar talents through personalized lessons available in Coral Springs."
        herocopy2="Our tailored approach accommodates all abilities, helping you confidently play your favorite music."
        herocopy3="Conveniently scheduled lessons at your location or virtually, crafted to meet your unique musical goals."
        imageSrc="/images/acoustic-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Acoustic Guitar Instruction in Coral Springs</h2>
        <p className="mb-4">In Coral Springs, FL, we offer personalized acoustic guitar lessons that cater specifically to your musical interests and skill level. Our skilled instructors ensure you learn efficiently and enjoyably, fostering your musical growth.</p>

        <p className="mb-4">Our comprehensive lessons include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Core chords, rhythm techniques, and strumming patterns</li>
          <li>Advanced fingerpicking styles and melodic playing</li>
          <li>Customized song instruction based on your preferences</li>
          <li>Simplified music theory tailored for guitarists</li>
          <li>Performance tips and confidence-building strategies</li>
        </ul>

        <p className="mb-4">Learn more about our approach and locations by visiting our <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">main acoustic guitar lessons page</a>.</p>

        <p className="mb-4">Ready to begin your musical adventure? Explore <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">acoustic guitar lessons near Coral Springs</a> and schedule your first lesson now.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Acoustic Guitar Lessons Near Coral Springs</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.098713194692!2d-80.26838328497427!3d26.271192083416233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d907b2bc0f5d87%3A0xf630a45d7798f63f!2sCoral%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1716224179852!5m2!1sen!2sus"
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
