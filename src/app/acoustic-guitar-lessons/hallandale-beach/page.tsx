import Script from 'next/script';
import Hero from '@/components/Hero';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic Guitar Lessons in Hallandale Beach, FL | Parkland Guitar Lessons',
  description: 'Expert acoustic guitar instruction in Hallandale Beach, FL. Personalized lessons for all skill levels. Schedule your first session today!',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/acoustic-guitar-lessons/hallandale-beach',
  },
};

export default function AcousticGuitarLessonsHallandaleBeach() {
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
            "description": "Customized acoustic guitar lessons in Hallandale Beach, FL. Professional guidance for beginners through advanced players, offered in-home or online.",
            "url": "https://www.parklandguitarlessons.com/acoustic-guitar-lessons-hallandale-beach",
            "image": "https://www.parklandguitarlessons.com/images/acoustic-hero.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hallandale Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "+1-954-249-8837",
            "areaServed": {
              "@type": "Place",
              "name": "Hallandale Beach, FL"
            },
            "priceRange": "$$"
          }),
        }}
      />

      <Hero
        title="Acoustic Guitar Lessons in Hallandale Beach, FL"
        subtitle="Discover Your Musical Potential"
        herocopy1="Transform your acoustic guitar playing with customized lessons in Hallandale Beach."
        herocopy2="Our skilled instructors adapt lessons to your personal musical interests, enhancing your skills and enjoyment."
        herocopy3="Flexible in-home or online lessons, tailored specifically around your musical aspirations."
        imageSrc="/images/acoustic-hero.webp"
      />

      <section className="max-w-5xl mx-auto p-6 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-center">Private Acoustic Guitar Instruction in Hallandale Beach</h2>
        <p className="mb-4">In Hallandale Beach, FL, we offer personalized acoustic guitar lessons tailored to your unique musical goals. Whether you're just starting out or looking to advance your skills, our friendly, knowledgeable instructors provide comprehensive support.</p>

        <p className="mb-4">Lessons cover a range of key areas including:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Chord fundamentals and rhythm techniques</li>
          <li>Advanced fingerstyle guitar and picking methods</li>
          <li>Personalized song learning to match your musical interests</li>
          <li>Simplified, practical music theory</li>
          <li>Enhancing performance confidence and stage presence</li>
        </ul>

        <p className="mb-4">Explore more details by visiting our <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">main acoustic guitar lessons page</a>, featuring information and additional service areas.</p>

        <p className="mb-4">Ready to start your journey? Discover <a href="/acoustic-guitar-lessons" className="text-blue-600 underline">acoustic guitar lessons near Hallandale Beach</a> and book your first session now.</p>
      </section>

      <TestimonialsSection />
      <CallToActionSection />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Acoustic Guitar Lessons in Hallandale Beach</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.695552261555!2d-80.15135168497594!3d25.98120268343751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9aa0f51db7b91%3A0xb860a0b0dfd56703!2sHallandale%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1716224179852!5m2!1sen!2sus"
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
